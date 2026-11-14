import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Users, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/start-a-chapter")({
  head: () => ({
    meta: [
      { title: "Start a Chapter — Zero Crumbs Initiative" },
      {
        name: "description",
        content:
          "Bring Zero Crumbs Initiative to your school or city and start rescuing surplus pastries for your community.",
      },
    ],
  }),
  component: StartChapterPage,
});

// TODO: replace with your real Formspree endpoint from https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgyaqel";

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-cream/20 bg-cream/10 px-4 py-3 text-cream transition placeholder:text-cream/55 focus:border-orange-pastel focus:outline-none focus:ring-2 focus:ring-orange-pastel/60";

const perks = [
  {
    Icon: Users,
    title: "Built-in playbook",
    body: "You'll get our chapter host agreement, outreach templates, and onboarding steps so you're not starting from zero.",
  },
  {
    Icon: MapPin,
    title: "Local impact",
    body: "Partner with bakeries in your own city and deliver surplus pastries to shelters and food banks near you.",
  },
  {
    Icon: Heart,
    title: "National support",
    body: "Lean on our core team for guidance as you recruit volunteers and grow your chapter.",
  },
];

function StartChapterPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Start a chapter"
        title="Bring Zero Crumbs to your city"
        lede="If you care about food waste and hunger in your community, we'll help you launch a chapter of your own — from your first bakery partner to your first delivery."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-24 md:pt-20">
        <div className="grid gap-6 md:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={(i * 100) as 0 | 100 | 200} className="h-full">
              <div className="hover-lift flex h-full flex-col rounded-[1.75rem] bg-cream-deep p-8 shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-pastel text-brown">
                  <p.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-brown">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-20 md:pb-24">
        <Reveal variant="zoom">
          <div className="rounded-[2rem] bg-brown p-8 shadow-warm sm:p-10 md:p-12">
            <h2 className="font-display text-3xl text-cream md:text-4xl">
              Apply to start a chapter
            </h2>
            <p className="mt-3 text-cream/80">
              Fill this out and our team will reach out with next steps.
            </p>

            {status === "success" ? (
              <p className="mt-8 rounded-2xl border border-cream/20 bg-cream/10 p-6 text-cream">
                Thanks for applying! We'll be in touch soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-cream/80">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={fieldClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-cream/80">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={fieldClass}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="text-sm font-medium text-cream/80">
                    School / city
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    className={fieldClass}
                    placeholder="Where would your chapter be based?"
                  />
                </div>
                <div>
                  <label htmlFor="grade" className="text-sm font-medium text-cream/80">
                    Grade level
                  </label>
                  <input
                    id="grade"
                    name="grade"
                    type="text"
                    required
                    className={fieldClass}
                    placeholder="e.g. 10th grade"
                  />
                </div>
                <div>
                  <label htmlFor="reason" className="text-sm font-medium text-cream/80">
                    Why do you want to start a chapter?
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    required
                    rows={4}
                    className={fieldClass}
                    placeholder="Tell us a bit about your motivation"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-300">Something went wrong. Please try again.</p>
                )}

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  size="lg"
                  className="mt-2 w-full rounded-full bg-orange-pastel text-brown hover:bg-orange-pastel/90"
                >
                  {status === "submitting" ? "Submitting…" : "Apply to start a chapter"}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}
