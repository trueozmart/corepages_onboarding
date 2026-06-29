import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { LeadData } from "@/pages/Onboard";

type Props = {
  leadData: LeadData;
  onConfirm: (updated: LeadData) => void;
};

export default function StepConfirm({ leadData, onConfirm }: Props) {
  const [form, setForm] = useState({
    business_name: leadData.business_name,
    suburb: leadData.suburb,
    services: leadData.services.join(", "),
    contact_phone: leadData.contact_phone,
    contact_email: leadData.contact_email,
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onConfirm({
      lead_id: leadData.lead_id,
      business_name: form.business_name.trim(),
      suburb: form.suburb.trim(),
      services: form.services.split(",").map((s) => s.trim()).filter(Boolean),
      contact_phone: form.contact_phone.trim(),
      contact_email: form.contact_email.trim(),
    });
  }

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-forest mb-1">
        Let's confirm your details
      </h1>
      <p className="font-body text-muted-foreground text-sm mb-6">
        We've pre-filled this from your business info. Check it's right and fix anything that's off.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="business_name" className="font-body text-sm font-medium text-forest mb-1.5 block">
            Business name
          </Label>
          <Input
            id="business_name"
            value={form.business_name}
            onChange={(e) => setForm({ ...form, business_name: e.target.value })}
            required
            className="font-body"
          />
        </div>

        <div>
          <Label htmlFor="suburb" className="font-body text-sm font-medium text-forest mb-1.5 block">
            Suburb / Location
          </Label>
          <Input
            id="suburb"
            value={form.suburb}
            onChange={(e) => setForm({ ...form, suburb: e.target.value })}
            required
            className="font-body"
          />
        </div>

        <div>
          <Label htmlFor="services" className="font-body text-sm font-medium text-forest mb-1.5 block">
            Services offered
            <span className="text-muted-foreground font-normal ml-1">(comma separated)</span>
          </Label>
          <textarea
            id="services"
            value={form.services}
            onChange={(e) => setForm({ ...form, services: e.target.value })}
            placeholder="e.g. Interior Painting, Exterior Painting"
            required
            rows={3}
            className="font-body w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
          />
        </div>

        <div>
          <Label htmlFor="contact_phone" className="font-body text-sm font-medium text-forest mb-1.5 block">
            Phone number
          </Label>
          <Input
            id="contact_phone"
            type="tel"
            value={form.contact_phone}
            onChange={(e) => setForm({ ...form, contact_phone: e.target.value })}
            required
            className="font-body"
          />
        </div>

        <div>
          <Label htmlFor="contact_email" className="font-body text-sm font-medium text-forest mb-1.5 block">
            Email address
          </Label>
          <Input
            id="contact_email"
            type="email"
            value={form.contact_email}
            onChange={(e) => setForm({ ...form, contact_email: e.target.value })}
            required
            className="font-body"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-forest hover:bg-forest/90 text-white font-heading font-semibold py-3 text-base mt-2"
        >
          Looks good — next step →
        </Button>
      </form>
    </div>
  );
}
