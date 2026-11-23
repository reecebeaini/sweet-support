import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { BAKERIES, MORE_BAKERIES, ORG, STATS } from "@/lib/org";
import { MapPin, Mail, Package, Truck, Clock } from "lucide-react";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Zero Crumbs Initiative" },
      {
        name: "description",
        content: "Volunteer with us or partner your bakery to reduce food waste.",
      },
    ],
  }),
  validateSearch: (search: Record<string, unknown>): { tab?: Tab } => {
    const t = search.tab;
    return t === "volunteer" || t === "bakery" || t === "in-kind" ? { tab: t } : {};
  },
  component: GetInvolvedPage,
});

type Tab = "volunteer" | "bakery" | "in-kind";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const VIRTUAL_MEDIA_VALUE = "Virtual Media Team (Instagram Reels)";

const opportunityOptions = [
  {
    value: "Bakery Pickups",
    description:
      "Pick up surplus pastries and baked goods from partner bakeries and deliver them to distribution points. Requires reliable transportation.",
  },
  {
    value: "Food Packaging",
    description:
      "Sort and pack rescued food into distribution-ready portions at packaging events. No transportation needed.",
  },
  {
    value: "Distribution Support",
    description:
      "Help hand out packaged food to community members at distribution sites and local events.",
  },
  {
    value: "Social Media & Marketing",
    description:
      "Support ZCI's online presence by helping plan posts, design graphics, or manage our social accounts.",
  },
  {
    value: VIRTUAL_MEDIA_VALUE,
    description:
      "Create original Instagram Reels — food waste facts, recruitment videos, impact stories, or reels using ZCI-provided footage. Fully remote; no pickups or events required. Submissions are reviewed by a ZCI officer before hours are approved.",
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
  const onlyVirtualMediaSelected =
    interests.length > 0 && interests.every((i) => i === VIRTUAL_MEDIA_VALUE);

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
        Thank you for your interest in helping reduce food waste and support local communities.
        Volunteers may assist with bakery pickups, food packaging, distribution, outreach, community
        events, and content creation through our Virtual Media Team. Community service hours are
        available.
      </p>

      <fieldset className="space-y-4">
        <legend className="w-full border-b border-border/60 pb-2 font-display text-2xl text-brown">
          Personal Information
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label>Full Name *</Label>
            <Input name="fullName" required />
          </div>
          <div>
            <Label>Preferred Name</Label>
            <Input name="preferredName" />
          </div>
          <div>
            <Label>Date of Birth *</Label>
            <Input name="dob" type="date" required />
          </div>
          <div>
            <Label>Email *</Label>
            <Input name="email" type="email" required />
          </div>
          <div>
            <Label>Phone *</Label>
            <Input name="phone" type="tel" required />
          </div>
          <div>
            <Label>School / Organization</Label>
            <Input name="school" />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="w-full border-b border-border/60 pb-2 font-display text-2xl text-brown">
          Volunteer Interests
        </legend>
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
            The Virtual Media Team lets you earn community service hours by creating original
            Instagram Reels that promote ZCI's mission — food waste facts, recruitment videos,
            impact stories, or reels using ZCI-provided footage. Every submission is reviewed by a
            ZCI officer for quality and relevance before hours are approved.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label>Instagram Handle</Label>
              <Input name="instagramHandle" placeholder="Optional — for credit/tagging" />
            </div>
            <div>
              <Label>Estimated Reels per Month</Label>
              <Input name="reelsPerMonth" type="number" min={0} />
            </div>
          </div>
          <div>
            <Label className="mb-2 block">Have you created Reels or short-form video before?</Label>
            <RadioGroup name="videoExperience" className="flex gap-4">
              {["Yes", "No"].map((v) => (
                <label key={v} className="flex items-center gap-2">
                  <RadioGroupItem value={v} />
                  {v}
                </label>
              ))}
            </RadioGroup>
          </div>
          <CheckboxGroup
            label="Content type interest"
            options={[
              "Educational Facts",
              "Recruitment/Promo",
              "Impact Stories",
              "Using ZCI-Provided Footage",
              "Open to Any",
            ]}
            name="contentTypes"
          />
          <div>
            <Label className="mb-2 block">Do you need ZCI-provided footage or B-roll?</Label>
            <RadioGroup name="needsFootage" className="flex gap-4">
              {["Yes", "No"].map((v) => (
                <label key={v} className="flex items-center gap-2">
                  <RadioGroupItem value={v} />
                  {v}
                </label>
              ))}
            </RadioGroup>
          </div>
        </fieldset>
      )}

      {!onlyVirtualMediaSelected && (
        <>
          <fieldset className="space-y-4">
            <legend className="w-full border-b border-border/60 pb-2 font-display text-2xl text-brown">
              Availability
            </legend>
            <CheckboxGroup label="Days available" options={days} name="days" />
            <CheckboxGroup
              label="Preferred times"
              options={["Morning", "Afternoon", "Evening"]}
              name="times"
            />
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="w-full border-b border-border/60 pb-2 font-display text-2xl text-brown">
              Transportation
            </legend>
            <div>
              <Label className="mb-2 block">Reliable transportation?</Label>
              <RadioGroup defaultValue="" name="transportation" className="flex gap-4">
                {["Yes", "No", "Sometimes"].map((v) => (
                  <label key={v} className="flex items-center gap-2">
                    <RadioGroupItem value={v} />
                    {v}
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Label className="mb-2 block">Comfortable with pickups/deliveries?</Label>
              <RadioGroup name="pickupComfort" className="flex gap-4">
                {["Yes", "No"].map((v) => (
                  <label key={v} className="flex items-center gap-2">
                    <RadioGroupItem value={v} />
                    {v}
                  </label>
                ))}
              </RadioGroup>
            </div>
          </fieldset>
        </>
      )}

      <fieldset className="space-y-4">
        <legend className="w-full border-b border-border/60 pb-2 font-display text-2xl text-brown">
          Community Service Hours
        </legend>
        <div>
          <Label className="mb-2 block">Need verified hours?</Label>
          <RadioGroup name="needHours" className="flex gap-4">
            {["Yes", "No"].map((v) => (
              <label key={v} className="flex items-center gap-2">
                <RadioGroupItem value={v} />
                {v}
              </label>
            ))}
          </RadioGroup>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label>School Name</Label>
            <Input name="schoolName" />
          </div>
          <div>
            <Label>Hours Needed</Label>
            <Input name="hoursNeeded" type="number" min={0} />
          </div>
        </div>
        {isVirtualMediaSelected && (
          <p className="text-xs text-muted-foreground">
            Note: Virtual Media Team hours are earned per approved submission, not by shift. A ZCI
            officer will confirm your hour count once your Reel is reviewed.
          </p>
        )}
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="w-full border-b border-border/60 pb-2 font-display text-2xl text-brown">
          Emergency Contact
        </legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <Label>Name</Label>
            <Input name="emergencyName" />
          </div>
          <div>
            <Label>Phone</Label>
            <Input name="emergencyPhone" type="tel" />
          </div>
          <div>
            <Label>Relationship</Label>
            <Input name="emergencyRelationship" />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="w-full border-b border-border/60 pb-2 font-display text-2xl text-brown">
          Additional Information
        </legend>
        <Textarea name="notes" placeholder="Questions, accommodations, or notes..." rows={4} />
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="w-full border-b border-border/60 pb-2 font-display text-2xl text-brown">
          Agreement
        </legend>
        {!onlyVirtualMediaSelected && (
          <label className="flex items-start gap-3 text-sm">
            <Checkbox required className="mt-1" />
            <span>
              I understand volunteering may involve food handling, lifting donation boxes,
              transportation assistance, and community outreach.
            </span>
          </label>
        )}
        {isVirtualMediaSelected && (
          <label className="flex items-start gap-3 text-sm">
            <Checkbox required className="mt-1" />
            <span>
              I understand that Virtual Media Team submissions are subject to officer review, and
              service hours are only granted for approved content that meets ZCI's quality and
              messaging standards.
            </span>
          </label>
        )}
        <label className="flex items-start gap-3 text-sm">
          <Checkbox required className="mt-1" />
          <span>
            I agree to communicate professionally and represent the organization respectfully.
          </span>
        </label>
      </fieldset>

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="w-full rounded-full bg-brown text-cream shadow-soft transition hover:bg-brown-soft"
      >
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
    <form onSubmit={onSubmit} className="space-y-8">
      <p className="text-muted-foreground">
        By donating surplus pastries and baked goods, your business helps provide food support to
        local organizations while reducing unnecessary waste.
      </p>

      <ul className="grid gap-3 rounded-2xl bg-cream-deep p-6 text-sm sm:grid-cols-2">
        {[
          "Set aside unsold items in a box at closing. That's it.",
          "We pick up on a set schedule that fits your hours.",
          "Food goes to a local shelter or food bank.",
          "No fees and no ongoing commitment required.",
          "Every donation gets a written receipt.",
          "Food donated in good faith is covered by the Bill Emerson Good Samaritan Food Donation Act.",
        ].map((t) => (
          <li key={t} className="flex items-start gap-2 text-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-pastel" />
            {t}
          </li>
        ))}
      </ul>

      <fieldset className="space-y-4">
        <legend className="w-full border-b border-border/60 pb-2 font-display text-2xl text-brown">
          Your business
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="businessName">Business name *</Label>
            <Input id="businessName" name="businessName" required />
          </div>
          <div>
            <Label htmlFor="contactPerson">Contact person *</Label>
            <Input id="contactPerson" name="contactPerson" required />
          </div>
          <div>
            <Label htmlFor="partnerEmail">Email *</Label>
            <Input id="partnerEmail" name="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="partnerPhone">Phone *</Label>
            <Input id="partnerPhone" name="phone" type="tel" required />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="address">Business address</Label>
            <Input id="address" name="address" />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="w-full border-b border-border/60 pb-2 font-display text-2xl text-brown">
          What you could donate
        </legend>
        <CheckboxGroup
          label="Items"
          options={["Donuts", "Pastries", "Bagels", "Bread", "Other Baked Goods"]}
          name="items"
        />
        <div>
          <Label className="mb-2 block">How often?</Label>
          <RadioGroup name="frequency" className="flex flex-wrap gap-4">
            {["Daily", "Several Times Per Week", "Weekly", "Occasionally"].map((v) => (
              <label key={v} className="flex items-center gap-2">
                <RadioGroupItem value={v} />
                {v}
              </label>
            ))}
          </RadioGroup>
        </div>
        <CheckboxGroup label="Best pickup days" options={days} name="pickupDays" />
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="w-full border-b border-border/60 pb-2 font-display text-2xl text-brown">
          Anything else?
        </legend>
        <Textarea name="notes" placeholder="Questions, special pickup instructions..." rows={3} />
        <label className="flex items-start gap-3 pt-2 text-sm">
          <Checkbox required className="mt-1" />
          <span>
            I understand submitted information will be used to coordinate donation and pickup
            opportunities.
          </span>
        </label>
      </fieldset>

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="w-full rounded-full bg-brown text-cream shadow-soft transition hover:bg-brown-soft"
      >
        {submitting ? "Submitting..." : "Submit Partnership Interest"}
      </Button>

      <div className="border-t border-border/60 pt-8">
        <h3 className="font-display text-xl text-brown">
          Join the {STATS.bakeries} bakeries already on board
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {BAKERIES.map((b) => (
            <li key={b.name} className="flex items-start gap-2 text-sm">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brown-soft" />
              <span>
                <span className="font-medium text-brown">{b.name}</span>
                <span className="block text-muted-foreground">{b.address}</span>
              </span>
            </li>
          ))}
          <li className="text-sm italic text-muted-foreground">
            and {MORE_BAKERIES} more across the community
          </li>
        </ul>
      </div>
    </form>
  );
}

function InKindPanel() {
  const items = [
    {
      Icon: Package,
      title: "Packaging",
      body: "Boxes, bags, and labels that keep rescued food safe and organized.",
    },
    {
      Icon: Truck,
      title: "Transportation",
      body: "Vehicles and drivers to move food from bakeries to distribution partners.",
    },
    {
      Icon: Clock,
      title: "Volunteer hours",
      body: "Your team's time, from pickup shifts to packaging events.",
    },
  ];
  const subject = encodeURIComponent("In-kind donation to " + ORG.name);
  return (
    <div className="space-y-8">
      <p className="text-muted-foreground">
        Donate packaging, transportation, or volunteer hours to keep us moving. Tell us what you can
        offer and we'll follow up to make it work.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map(({ Icon, title, body }) => (
          <div key={title} className="rounded-2xl bg-cream-deep p-6">
            <Icon className="h-7 w-7 text-orange-pastel" />
            <h3 className="mt-3 font-display text-lg text-brown">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
      <a href={`mailto:${ORG.email}?subject=${subject}`}>
        <Button
          size="lg"
          className="rounded-full bg-brown text-cream shadow-soft transition hover:bg-brown-soft"
        >
          <Mail className="mr-2 h-4 w-4" /> Email us about in-kind giving
        </Button>
      </a>
    </div>
  );
}

function GetInvolvedPage() {
  const { tab = "volunteer" } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const triggerClass =
    "rounded-full py-2 data-[state=active]:bg-cream data-[state=active]:text-brown data-[state=active]:shadow-soft";
  const panelClass =
    "mt-10 rounded-[2rem] border border-border/60 bg-card p-6 shadow-soft sm:p-8 md:p-12";

  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Join the movement"
        lede="Volunteer your time, partner your bakery, or give in kind — every contribution rescues pastries and feeds neighbors."
      />

      <section className="mx-auto max-w-4xl px-6 pb-20 pt-12 md:pb-24 md:pt-16">
        <Tabs
          value={tab}
          onValueChange={(v) => navigate({ search: { tab: v as Tab }, replace: true })}
          className="w-full"
        >
          <TabsList className="mx-auto grid h-auto w-full max-w-xl grid-cols-3 rounded-full bg-cream-deep p-1.5">
            <TabsTrigger value="volunteer" className={triggerClass}>
              Volunteer
            </TabsTrigger>
            <TabsTrigger value="bakery" className={triggerClass}>
              Bakery Partner
            </TabsTrigger>
            <TabsTrigger value="in-kind" className={triggerClass}>
              In-kind
            </TabsTrigger>
          </TabsList>
          <TabsContent value="volunteer" className={panelClass}>
            <VolunteerForm />
          </TabsContent>
          <TabsContent value="bakery" className={panelClass}>
            <PartnerForm />
          </TabsContent>
          <TabsContent value="in-kind" className={panelClass}>
            <InKindPanel />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
