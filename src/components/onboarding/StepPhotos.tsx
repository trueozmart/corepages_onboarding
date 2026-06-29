import { useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import type { LeadData } from "@/pages/Onboard";

type Props = {
  leadData: LeadData;
  onComplete: (imageUrls: string[], skipped: boolean) => Promise<void>;
};

type UploadedFile = {
  name: string;
  url: string;
  preview: string;
};

export default function StepPhotos({ leadData, onComplete }: Props) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadFile = useCallback(async (file: File): Promise<UploadedFile | null> => {
    const ext = file.name.split(".").pop();
    const path = `${leadData.lead_id}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage
      .from("onboarding-uploads")
      .upload(path, file, { cacheControl: "3600", upsert: false });
    if (error) { console.error("Upload error:", error); return null; }
    const { data } = supabase.storage.from("onboarding-uploads").getPublicUrl(path);
    return { name: file.name, url: data.publicUrl, preview: URL.createObjectURL(file) };
  }, [leadData.lead_id]);

  const handleFiles = useCallback(async (incoming: FileList | null) => {
    if (!incoming || incoming.length === 0) return;
    const toUpload = Array.from(incoming).slice(0, 20 - files.length);
    setUploading(true);
    const results = await Promise.all(toUpload.map(uploadFile));
    setFiles((prev) => [...prev, ...results.filter((r): r is UploadedFile => r !== null)]);
    setUploading(false);
  }, [files.length, uploadFile]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const removeFile = (url: string) => {
    setFiles((prev) => prev.filter((f) => f.url !== url));
  };

  const handleSkip = async () => {
    setSubmitting(true);
    await onComplete([], true);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    await onComplete(files.map((f) => f.url), false);
  };

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-forest mb-1">
        Add some photos
      </h1>
      <p className="font-body text-muted-foreground text-sm mb-6">
        Upload 3–5 images — logo, work photos, team shots. Or skip and we'll source images from your Google and Facebook profiles.
      </p>

      {/* Drop zone */}
      <div
        className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-colors mb-4 ${
          dragOver
            ? "border-marine bg-marine/5"
            : "border-border hover:border-marine/50"
        }`}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <div className="text-4xl mb-2">📸</div>
        <p className="font-body text-sm font-medium text-forest">
          {uploading ? "Uploading…" : "Tap to choose photos"}
        </p>
        <p className="font-body text-xs text-muted-foreground mt-1">
          or drag and drop — up to 20 images
        </p>
        {uploading && (
          <div className="mt-3 flex justify-center">
            <div className="w-5 h-5 border-2 border-marine border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Uploaded previews */}
      {files.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mb-5">
          {files.map((f) => (
            <div key={f.url} className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <img src={f.preview} alt={f.name} className="w-full h-full object-cover" />
              <button
                onClick={() => removeFile(f.url)}
                className="absolute top-1 right-1 w-5 h-5 bg-black/60 text-white rounded-full text-xs flex items-center justify-center leading-none"
                aria-label="Remove"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="space-y-3">
        {files.length > 0 && (
          <Button
            onClick={handleSubmit}
            disabled={submitting || uploading}
            className="w-full bg-forest hover:bg-forest/90 text-white font-heading font-semibold py-3 text-base"
          >
            {submitting ? "Submitting…" : `Use these ${files.length} photo${files.length !== 1 ? "s" : ""} →`}
          </Button>
        )}

        <Button
          variant="outline"
          onClick={handleSkip}
          disabled={submitting}
          className="w-full font-body text-sm border-border text-muted-foreground hover:text-forest hover:border-forest py-3"
        >
          Skip — use what's online
        </Button>
        <p className="text-center text-xs text-muted-foreground font-body">
          If you skip, we'll pull images from your Google Business and Facebook profiles.
        </p>
      </div>
    </div>
  );
}
