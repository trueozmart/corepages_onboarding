import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import StepConfirm from "@/components/onboarding/StepConfirm";
import StepPhotos from "@/components/onboarding/StepPhotos";
import StepDone from "@/components/onboarding/StepDone";
import OnboardProgress from "@/components/onboarding/OnboardProgress";

export type LeadData = {
  lead_id: string;
  business_name: string;
  suburb: string;
  services: string[];
  contact_phone: string;
  contact_email: string;
};

const MOCK_LEADS: Record<string, LeadData> = {
  demo: {
    lead_id: "demo",
    business_name: "Smith Painting & Decorating",
    suburb: "Manly, NSW",
    services: ["Interior Painting", "Exterior Painting", "Colour Consultation"],
    contact_phone: "0412 345 678",
    contact_email: "dave@smithpainting.com.au",
  },
};

type Step = "confirm" | "photos" | "done";

export default function Onboard() {
  const [searchParams] = useSearchParams();
  const leadId = searchParams.get("lead") ?? "demo";

  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [step, setStep] = useState<Step>("confirm");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLead() {
      const { data: existing } = await supabase
        .from("onboarding_submissions")
        .select("*")
        .eq("lead_id", leadId)
        .maybeSingle();

      if (existing) {
        setLeadData({
          lead_id: existing.lead_id,
          business_name: existing.business_name,
          suburb: existing.suburb,
          services: existing.services ?? [],
          contact_phone: existing.contact_phone,
          contact_email: existing.contact_email,
        });
        if (existing.status === "pending" && (existing.image_urls?.length || existing.images_skipped)) {
          setStep("done");
        }
        setLoading(false);
        return;
      }

      const mock = MOCK_LEADS[leadId];
      if (mock) {
        setLeadData(mock);
        setLoading(false);
        return;
      }

      setError("We couldn't find your onboarding link. Please check the link or contact us.");
      setLoading(false);
    }

    fetchLead();
  }, [leadId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-forest border-t-marine rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground font-body">Loading your details…</p>
        </div>
      </div>
    );
  }

  if (error || !leadData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <p className="text-lg font-heading text-forest mb-2">Hmm, something's off</p>
          <p className="text-muted-foreground font-body text-sm">{error}</p>
        </div>
      </div>
    );
  }

  const stepIndex: Record<Step, number> = { confirm: 0, photos: 1, done: 2 };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-forest py-4 px-4">
        <div className="max-w-lg mx-auto flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-marine flex items-center justify-center">
            <span className="text-white font-heading font-bold text-sm">C</span>
          </div>
          <span className="text-white font-heading font-semibold text-lg">Core Pages</span>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        <OnboardProgress currentStep={stepIndex[step]} totalSteps={3} />

        {step === "confirm" && (
          <StepConfirm
            leadData={leadData}
            onConfirm={(updated) => {
              setLeadData(updated);
              setStep("photos");
            }}
          />
        )}

        {step === "photos" && (
          <StepPhotos
            leadData={leadData}
            onComplete={async (imageUrls, skipped) => {
              await supabase.from("onboarding_submissions").upsert({
                lead_id: leadData.lead_id,
                business_name: leadData.business_name,
                suburb: leadData.suburb,
                services: leadData.services,
                contact_phone: leadData.contact_phone,
                contact_email: leadData.contact_email,
                image_urls: imageUrls,
                images_skipped: skipped,
                status: "pending",
              }, { onConflict: "lead_id" });
              setStep("done");
            }}
          />
        )}

        {step === "done" && (
          <StepDone businessName={leadData.business_name} />
        )}
      </main>
    </div>
  );
}
