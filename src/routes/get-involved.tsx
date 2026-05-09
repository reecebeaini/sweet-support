import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Page Order" },
      { name: "description", content: "Volunteer with us or partner your bakery to reduce food waste." },
    ],
  }),
  component: GetInvolvedPage,
});

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function CheckboxGroup({ label, options, name }: { label: string; options: string[]; name: string }) {
  return (
    <div>
      <Label className="mb-3 block text-sm font-semibold text-brown">{label}</Label>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {options.map((o) => (
          <label key={o} className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 cursor-pointer hover:border-brown/40">
            <Checkbox name={name} value={o} />
            <span className="text-sm">{o}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function VolunteerForm() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks for volunteering! We'll be in touch soon.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };
  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <p className="text-muted-foreground">
        Thank you for your interest in helping reduce food waste and support local communities. Volunteers may assist with bakery pickups, food packaging, distribution, outreach, and community events. Community service hours are available.
      </p>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Personal Information</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><Label>Full Name *</Label><Input required /></div>
          <div><Label>Preferred Name</Label><Input /></div>
          <div><Label>Date of Birth *</Label><Input type="date" required /></div>
          <div><Label>Email *</Label><Input type="email" required /></div>
          <div><Label>Phone *</Label><Input type="tel" required /></div>
          <div><Label>School / Organization</Label><Input /></div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Availability</legend>
        <CheckboxGroup label="Days available" options={days} name="days" />
        <CheckboxGroup label="Preferred times" options={["Morning", "Afternoon", "Evening"]} name="times" />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Volunteer Interests</legend>
        <CheckboxGroup label="Opportunities" options={["Bakery Pickups", "Food Packaging", "Distribution Support", "Social Media & Marketing"]} name="interests" />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Transportation</legend>
        <div>
          <Label className="mb-2 block">Reliable transportation?</Label>
          <RadioGroup defaultValue="" className="flex gap-4">
            {["Yes", "No", "Sometimes"].map((v) => (
              <label key={v} className="flex items-center gap-2"><RadioGroupItem value={v} />{v}</label>
            ))}
          </RadioGroup>
        </div>
        <div>
          <Label className="mb-2 block">Comfortable with pickups/deliveries?</Label>
          <RadioGroup className="flex gap-4">
            {["Yes", "No"].map((v) => (
              <label key={v} className="flex items-center gap-2"><RadioGroupItem value={v} />{v}</label>
            ))}
          </RadioGroup>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Community Service Hours</legend>
        <div>
          <Label className="mb-2 block">Need verified hours?</Label>
          <RadioGroup className="flex gap-4">
            {["Yes", "No"].map((v) => (
              <label key={v} className="flex items-center gap-2"><RadioGroupItem value={v} />{v}</label>
            ))}
          </RadioGroup>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><Label>School Name</Label><Input /></div>
          <div><Label>Hours Needed</Label><Input type="number" min={0} /></div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Emergency Contact</legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <div><Label>Name</Label><Input /></div>
          <div><Label>Phone</Label><Input type="tel" /></div>
          <div><Label>Relationship</Label><Input /></div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Additional Information</legend>
        <Textarea placeholder="Questions, accommodations, or notes..." rows={4} />
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="font-display text-2xl text-brown">Agreement</legend>
        <label className="flex items-start gap-3 text-sm">
          <Checkbox required className="mt-1" />
          <span>I understand volunteering may involve food handling, lifting donation boxes, transportation assistance, and community outreach.</span>
        </label>
        <label className="flex items-start gap-3 text-sm">
          <Checkbox required className="mt-1" />
          <span>I agree to communicate professionally and represent the organization respectfully.</span>
        </label>
      </fieldset>

      <Button type="submit" size="lg" disabled={submitting} className="w-full rounded-full bg-brown text-cream hover:bg-brown/90">
        {submitting ? "Submitting..." : "Submit Volunteer Application"}
      </Button>
    </form>
  );
}

function PartnerForm() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you! We'll reach out about partnership soon.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };
  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <p className="text-muted-foreground">
        By donating surplus pastries and baked goods, your business helps provide food support to local organizations while reducing unnecessary waste.
      </p>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Business Information</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><Label>Business Name *</Label><Input required /></div>
          <div><Label>Business Type</Label><Input /></div>
          <div><Label>Contact Person *</Label><Input required /></div>
          <div><Label>Position / Role</Label><Input /></div>
          <div><Label>Email *</Label><Input type="email" required /></div>
          <div><Label>Phone *</Label><Input type="tel" required /></div>
          <div className="sm:col-span-2"><Label>Business Address</Label><Input /></div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Donation Information</legend>
        <CheckboxGroup label="Items interested in donating" options={["Donuts", "Pastries", "Bagels", "Bread", "Other Baked Goods"]} name="items" />
        <div>
          <Label className="mb-2 block">Donation frequency</Label>
          <RadioGroup className="flex flex-wrap gap-4">
            {["Daily", "Several Times Per Week", "Weekly", "Occasionally"].map((v) => (
              <label key={v} className="flex items-center gap-2"><RadioGroupItem value={v} />{v}</label>
            ))}
          </RadioGroup>
        </div>
        <div>
          <Label className="mb-2 block">Estimated quantity per donation</Label>
          <RadioGroup className="flex flex-wrap gap-4">
            {["Under 25", "25–50", "50–100", "100+"].map((v) => (
              <label key={v} className="flex items-center gap-2"><RadioGroupItem value={v} />{v}</label>
            ))}
          </RadioGroup>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Pickup Preferences</legend>
        <CheckboxGroup label="Preferred pickup days" options={days} name="pickupDays" />
        <CheckboxGroup label="Preferred pickup time" options={["Morning", "Afternoon", "Evening", "End of Business Day"]} name="pickupTime" />
        <div>
          <Label className="mb-2 block">Recurring pickups?</Label>
          <RadioGroup className="flex gap-4">
            {["Yes", "No", "Unsure"].map((v) => (
              <label key={v} className="flex items-center gap-2"><RadioGroupItem value={v} />{v}</label>
            ))}
          </RadioGroup>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Business Benefits</legend>
        <CheckboxGroup
          label="What interests your business?"
          options={["Reducing Food Waste", "Supporting Local Communities", "Sustainability", "Community Recognition", "Tax Deductions", "Surplus Disposal"]}
          name="benefits"
        />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Additional Information</legend>
        <Textarea placeholder="Questions, special pickup instructions..." rows={4} />
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="font-display text-2xl text-brown">Agreement</legend>
        <label className="flex items-start gap-3 text-sm">
          <Checkbox required className="mt-1" />
          <span>I understand submitted information will be used to coordinate donation and pickup opportunities.</span>
        </label>
        <label className="flex items-start gap-3 text-sm">
          <Checkbox required className="mt-1" />
          <span>I understand donation schedules may vary depending on volunteer and community availability.</span>
        </label>
      </fieldset>

      <Button type="submit" size="lg" disabled={submitting} className="w-full rounded-full bg-brown text-cream hover:bg-brown/90">
        {submitting ? "Submitting..." : "Submit Partnership Interest"}
      </Button>
    </form>
  );
}

function GetInvolvedPage() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown-soft">Get involved</p>
          <h1 className="mt-4 font-display text-5xl text-brown md:text-6xl">Join the movement</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Volunteer your time or partner your bakery — every contribution rescues pastries and feeds neighbors.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Tabs defaultValue="volunteer" className="w-full">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-2 rounded-full bg-cream-deep p-1">
            <TabsTrigger value="volunteer" className="rounded-full">Volunteer</TabsTrigger>
            <TabsTrigger value="partner" className="rounded-full">Partner With Us</TabsTrigger>
          </TabsList>
          <TabsContent value="volunteer" className="mt-10 rounded-[2rem] bg-card p-6 shadow-soft md:p-12">
            <VolunteerForm />
          </TabsContent>
          <TabsContent value="partner" className="mt-10 rounded-[2rem] bg-card p-6 shadow-soft md:p-12">
            <PartnerForm />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}