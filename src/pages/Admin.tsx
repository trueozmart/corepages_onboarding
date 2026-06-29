import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

type Submission = {
  id: string;
  lead_id: string;
  business_name: string;
  suburb: string;
  services: string[];
  contact_phone: string;
  contact_email: string;
  image_urls: string[] | null;
  images_skipped: boolean;
  status: string;
  created_at: string;
};

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Submission | null>(null);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === "corepages") {
      setAuthed(true);
    } else {
      setError("Wrong password.");
    }
  }

  useEffect(() => {
    if (!authed) return;
    setLoading(true);
    supabase
      .from("onboarding_submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setSubmissions((data as Submission[]) ?? []);
        setLoading(false);
      });
  }, [authed]);

  if (!authed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="flex items-center gap-2 mb-8 justify-center">
            <div className="w-8 h-8 rounded-lg bg-forest flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">C</span>
            </div>
            <span className="font-heading font-semibold text-lg text-forest">Core Pages Admin</span>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            {error && <p className="text-destructive text-sm font-body">{error}</p>}
            <button
              type="submit"
              className="w-full bg-forest hover:bg-forest/90 text-white font-heading font-semibold py-2.5 rounded-md text-sm"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-forest py-4 px-4 mb-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-marine flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">C</span>
            </div>
            <span className="text-white font-heading font-semibold text-lg">Core Pages Admin</span>
          </div>
          <span className="text-white/60 font-body text-sm">{submissions.length} submissions</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-12">
        {loading && <p className="text-muted-foreground font-body text-sm">Loading…</p>}

        {!loading && submissions.length === 0 && (
          <p className="text-muted-foreground font-body text-sm">No submissions yet.</p>
        )}

        {/* Detail modal */}
        {selected && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-4 overflow-y-auto">
            <div className="bg-card rounded-xl w-full max-w-2xl my-8 shadow-xl">
              <div className="flex items-center justify-between p-5 border-b border-border">
                <h2 className="font-heading font-bold text-forest text-lg">{selected.business_name}</h2>
                <button
                  onClick={() => setSelected(null)}
                  className="text-muted-foreground hover:text-forest text-xl leading-none"
                >
                  ×
                </button>
              </div>
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm font-body">
                  <div>
                    <p className="text-muted-foreground text-xs mb-0.5">Location</p>
                    <p className="text-forest font-medium">{selected.suburb || "—"}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs mb-0.5">Phone</p>
                    <p className="text-forest font-medium">{selected.contact_phone || "—"}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs mb-0.5">Email</p>
                    <p className="text-forest font-medium">{selected.contact_email || "—"}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs mb-0.5">Submitted</p>
                    <p className="text-forest font-medium">{new Date(selected.created_at).toLocaleString("en-AU")}</p>
                  </div>
                </div>

                {selected.services?.length > 0 && (
                  <div>
                    <p className="text-muted-foreground text-xs font-body mb-1.5">Services</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.services.map((s) => (
                        <span key={s} className="bg-forest/10 text-forest text-xs font-body px-2.5 py-1 rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <p className="text-muted-foreground text-xs font-body mb-2">
                    Photos {selected.images_skipped ? "(skipped — using online sources)" : `(${selected.image_urls?.length ?? 0} uploaded)`}
                  </p>
                  {selected.image_urls && selected.image_urls.length > 0 ? (
                    <div className="grid grid-cols-3 gap-2">
                      {selected.image_urls.map((url) => (
                        <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                          <img
                            src={url}
                            alt=""
                            className="w-full aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity"
                          />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground font-body text-sm">No images uploaded.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Submissions list */}
        <div className="space-y-3">
          {submissions.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setSelected(sub)}
              className="w-full text-left bg-card border border-border rounded-xl p-4 hover:border-forest/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-semibold text-forest text-base">{sub.business_name}</p>
                  <p className="font-body text-muted-foreground text-sm">{sub.suburb}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    {sub.contact_phone} {sub.contact_email ? `· ${sub.contact_email}` : ""}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                  <span className={`text-xs font-body px-2 py-0.5 rounded-full ${
                    sub.images_skipped
                      ? "bg-amber-100 text-amber-700"
                      : sub.image_urls?.length
                      ? "bg-green-100 text-green-700"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {sub.images_skipped ? "Skipped photos" : `${sub.image_urls?.length ?? 0} photos`}
                  </span>
                  <span className="text-xs text-muted-foreground font-body">
                    {new Date(sub.created_at).toLocaleDateString("en-AU")}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
