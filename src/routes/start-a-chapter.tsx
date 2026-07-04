import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Users, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/start-a-chapter")({
  head: () => ({
    meta: [
      { title: "Start a Chapter — Zero Crumbs Initiative" },
      { name: "description", content: "Bring Zero Crumbs Initiative to your school or city and start rescuing surplus pastries for your community." },
    ],
  }),
  component: StartChapterPage,
});

// TODO: replace with your real Formspree endpoint from https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgyaqel";

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
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown-soft">Start a chapter</p>
          <h1 className="mt-4 font-display text-5xl text-brown md:text-6xl">Bring Zero Crumbs to your city</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            If you care about food waste and hunger in your community, we'll help you launch a chapter of your own — from your first bakery partner to your first delivery.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={(i * 100) as 0 | 100 | 200}>
              <div className="rounded-[2rem] bg-cream-deep p-8 shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-pastel text-brown">
                  <p.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-brown">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-24">
        <Reveal variant="zoom">
          <div className="rounded-[2rem] bg-brown p-10 md:p-12">
            <h2 className="font-display text-3xl text-cream md:text-4xl">Apply to start a chapter</h2>
            <p className="mt-3 text-cream/80">
              Fill this out and our team will reach out with next steps.
            </p>

            {status === "success" ? (
              <p className="mt-8 rounded-2xl bg-cream/10 p-6 text-cream">
                Thanks for applying! We'll be in touch soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm text-cream/80">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-xl border-0 bg-cream/10 px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-orange-pastel"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-cream/80">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl border-0 bg-cream/10 px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-orange-pastel"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="text-sm text-cream/80">School / city</label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    className="mt-1 w-full rounded-xl border-0 bg-cream/10 px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-orange-pastel"
                    placeholder="Where would your chapter be based?"
                  />
                </div>
                <div>
                  <label htmlFor="grade" className="text-sm text-cream/80">Grade level</label>
                  <input
                    id="grade"
                    name="grade"
                    type="text"
                    required
                    className="mt-1 w-full rounded-xl border-0 bg-cream/10 px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-orange-pastel"
                    placeholder="e.g. 10th grade"
                  />
                </div>
                <div>
                  <label htmlFor="reason" className="text-sm text-cream/80">Why do you want to start a chapter?</label>
                  <textarea
                    id="reason"
                    name="reason"
                    required
                    rows={4}
                    className="mt-1 w-full rounded-xl border-0 bg-cream/10 px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-orange-pastel"
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
                  className="w-full rounded-full bg-orange-pastel text-brown hover:bg-orange-pastel/90"
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
