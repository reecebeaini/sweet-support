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
      { title: "Get Involved — Zero Crumbs Initiative" },
      { name: "description", content: "Volunteer with us or partner your bakery to reduce food waste." },
    ],
  }),
  component: GetInvolvedPage,
});

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const VIRTUAL_MEDIA_VALUE = "Virtual Media Team (Instagram Reels)";

const opportunityOptions = [
  {
    value: "Bakery Pickups",
    description: "Pick up surplus pastries and baked goods from partner bakeries and deliver them to distribution points. Requires reliable transportation.",
  },
  {
    value: "Food Packaging",
    description: "Sort and pack rescued food into distribution-ready portions at packaging events. No transportation needed.",
  },
  {
    value: "Distribution Support",
    description: "Help hand out packaged food to community members at distribution sites and local events.",
  },
  {
    value: "Social Media & Marketing",
    description: "Support ZCI's online presence by helping plan posts, design graphics, or manage our social accounts.",
  },
  {
    value: VIRTUAL_MEDIA_VALUE,
    description: "Create original Instagram Reels — food waste facts, recruitment videos, impact stories, or reels using ZCI-provided footage. Fully remote; no pickups or events required. Submissions are reviewed by a ZCI officer before hours are approved.",
  },
];

type Option = string | { value: string; description?: string };

function CheckboxGroup({
  label,
  options,
  name,
  selected,
  onToggle,
}: {
  label: string;
  options: Option[];
  name: string;
  selected?: string[];
  onToggle?: (value: string, checked: boolean) => void;
}) {
  const isControlled = selected !== undefined;
  return (
    <div>
      <Label className="mb-3 block text-sm font-semibold text-brown">{label}</Label>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((opt) => {
          const value = typeof opt === "string" ? opt : opt.value;
          const description = typeof opt === "string" ? undefined : opt.description;
          return (
            <label
              key={value}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 cursor-pointer hover:border-brown/40"
            >
              <Checkbox
                name={name}
                value={value}
                className="mt-0.5"
                checked={isControlled ? selected!.includes(value) : undefined}
                onCheckedChange={
                  isControlled ? (checked) => onToggle?.(value, checked === true) : undefined
                }
              />
              <span className="text-sm">
                <span className="block font-medium">{value}</span>
                {description && (
                  <span className="mt-0.5 block text-xs text-muted-foreground">{description}</span>
                )}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

function VolunteerForm() {
  const [submitting, setSubmitting] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);

  const isVirtualMediaSelected = interests.includes(VIRTUAL_MEDIA_VALUE);
  const onlyVirtualMediaSelected = interests.length > 0 && interests.every((i) => i === VIRTUAL_MEDIA_VALUE);

  const toggleInterest = (value: string, checked: boolean) => {
    setInterests((prev) => (checked ? [...prev, value] : prev.filter((v) => v !== value)));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.target as HTMLFormElement);
    try {
      const res = await fetch("https://formspree.io/f/mrevqbrl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        toast.success("Thanks for volunteering! We'll be in touch soon.");
        (e.target as HTMLFormElement).reset();
        setInterests([]);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <p className="text-muted-foreground">
        Thank you for your interest in helping reduce food waste and support local communities. Volunteers may assist with bakery pickups, food packaging, distribution, outreach, community events, and content creation through our Virtual Media Team. Community service hours are available.
      </p>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Personal Information</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><Label>Full Name *</Label><Input name="fullName" required /></div>
          <div><Label>Preferred Name</Label><Input name="preferredName" /></div>
          <div><Label>Date of Birth *</Label><Input name="dob" type="date" required /></div>
          <div><Label>Email *</Label><Input name="email" type="email" required /></div>
          <div><Label>Phone *</Label><Input name="phone" type="tel" required /></div>
          <div><Label>School / Organization</Label><Input name="school" /></div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Volunteer Interests</legend>
        <CheckboxGroup
          label="Opportunities"
          options={opportunityOptions}
          name="interests"
          selected={interests}
          onToggle={toggleInterest}
        />
      </fieldset>

      {isVirtualMediaSelected && (
        <fieldset className="space-y-4 rounded-2xl border border-border bg-cream-deep/40 p-6">
          <legend className="font-display text-2xl text-brown px-2">Virtual Media Team</legend>
          <p className="text-sm text-muted-foreground">
            The Virtual Media Team lets you earn community service hours by creating original Instagram Reels that
            promote ZCI's mission — food waste facts, recruitment videos, impact stories, or reels using
            ZCI-provided footage. Every submission is reviewed by a ZCI officer for quality and relevance before
            hours are approved.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><Label>Instagram Handle</Label><Input name="instagramHandle" placeholder="Optional — for credit/tagging" /></div>
            <div><Label>Estimated Reels per Month</Label><Input name="reelsPerMonth" type="number" min={0} /></div>
          </div>
          <div>
            <Label className="mb-2 block">Have you created Reels or short-form video before?</Label>
            <RadioGroup name="videoExperience" className="flex gap-4">
              {["Yes", "No"].map((v) => (
                <label key={v} className="flex items-center gap-2"><RadioGroupItem value={v} />{v}</label>
              ))}
            </RadioGroup>
          </div>
          <CheckboxGroup
            label="Content type interest"
            options={["Educational Facts", "Recruitment/Promo", "Impact Stories", "Using ZCI-Provided Footage", "Open to Any"]}
            name="contentTypes"
          />
          <div>
            <Label className="mb-2 block">Do you need ZCI-provided footage or B-roll?</Label>
            <RadioGroup name="needsFootage" className="flex gap-4">
              {["Yes", "No"].map((v) => (
                <label key={v} className="flex items-center gap-2"><RadioGroupItem value={v} />{v}</label>
              ))}
            </RadioGroup>
          </div>
        </fieldset>
      )}

      {!onlyVirtualMediaSelected && (
        <>
          <fieldset className="space-y-4">
            <legend className="font-display text-2xl text-brown">Availability</legend>
            <CheckboxGroup label="Days available" options={days} name="days" />
            <CheckboxGroup label="Preferred times" options={["Morning", "Afternoon", "Evening"]} name="times" />
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="font-display text-2xl text-brown">Transportation</legend>
            <div>
              <Label className="mb-2 block">Reliable transportation?</Label>
              <RadioGroup defaultValue="" name="transportation" className="flex gap-4">
                {["Yes", "No", "Sometimes"].map((v) => (
                  <label key={v} className="flex items-center gap-2"><RadioGroupItem value={v} />{v}</label>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Label className="mb-2 block">Comfortable with pickups/deliveries?</Label>
              <RadioGroup name="pickupComfort" className="flex gap-4">
                {["Yes", "No"].map((v) => (
                  <label key={v} className="flex items-center gap-2"><RadioGroupItem value={v} />{v}</label>
                ))}
              </RadioGroup>
            </div>
          </fieldset>
        </>
      )}

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Community Service Hours</legend>
        <div>
          <Label className="mb-2 block">Need verified hours?</Label>
          <RadioGroup name="needHours" className="flex gap-4">
            {["Yes", "No"].map((v) => (
              <label key={v} className="flex items-center gap-2"><RadioGroupItem value={v} />{v}</label>
            ))}
          </RadioGroup>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><Label>School Name</Label><Input name="schoolName" /></div>
          <div><Label>Hours Needed</Label><Input name="hoursNeeded" type="number" min={0} /></div>
        </div>
        {isVirtualMediaSelected && (
          <p className="text-xs text-muted-foreground">
            Note: Virtual Media Team hours are earned per approved submission, not by shift. A ZCI officer will
            confirm your hour count once your Reel is reviewed.
          </p>
        )}
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Emergency Contact</legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <div><Label>Name</Label><Input name="emergencyName" /></div>
          <div><Label>Phone</Label><Input name="emergencyPhone" type="tel" /></div>
          <div><Label>Relationship</Label><Input name="emergencyRelationship" /></div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Additional Information</legend>
        <Textarea name="notes" placeholder="Questions, accommodations, or notes..." rows={4} />
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="font-display text-2xl text-brown">Agreement</legend>
        {!onlyVirtualMediaSelected && (
          <label className="flex items-start gap-3 text-sm">
            <Checkbox required className="mt-1" />
            <span>I understand volunteering may involve food handling, lifting donation boxes, transportation assistance, and community outreach.</span>
          </label>
        )}
        {isVirtualMediaSelected && (
          <label className="flex items-start gap-3 text-sm">
            <Checkbox required className="mt-1" />
            <span>I understand that Virtual Media Team submissions are subject to officer review, and service hours are only granted for approved content that meets ZCI's quality and messaging standards.</span>
          </label>
        )}
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
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.target as HTMLFormElement);
    try {
      const res = await fetch("https://formspree.io/f/mnjydnlg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        toast.success("Thank you! We'll reach out about partnership soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <p className="text-muted-foreground">
        By donating surplus pastries and baked goods, your business helps provide food support to local organizations while reducing unnecessary waste.
      </p>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Business Information</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><Label>Business Name *</Label><Input name="businessName" required /></div>
          <div><Label>Business Type</Label><Input name="businessType" /></div>
          <div><Label>Contact Person *</Label><Input name="contactPerson" required /></div>
          <div><Label>Position / Role</Label><Input name="role" /></div>
          <div><Label>Email *</Label><Input name="email" type="email" required /></div>
          <div><Label>Phone *</Label><Input name="phone" type="tel" required /></div>
          <div className="sm:col-span-2"><Label>Business Address</Label><Input name="address" /></div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-2xl text-brown">Donation Information</legend>
        <CheckboxGroup label="Items interested in donating" options={["Donuts", "Pastries", "Bagels", "Bread", "Other Baked Goods"]} name="items" />
        <div>
          <Label className="mb-2 block">Donation frequency</Label>
          <RadioGroup name="frequency" className="flex flex-wrap gap-4">
            {["Daily", "Several Times Per Week", "Weekly", "Occasionally"].map((v) => (
              <label key={v} className="flex items-center gap-2"><RadioGroupItem value={v} />{v}</label>
            ))}
          </RadioGroup>
        </div>
        <div>
          <Label className="mb-2 block">Estimated quantity per donation</Label>
          <RadioGroup name="quantity" className="flex flex-wrap gap-4">
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
          <RadioGroup name="recurring" className="flex gap-4">
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
        <Textarea name="notes" placeholder="Questions, special pickup instructions..." rows={4} />
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
