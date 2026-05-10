import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/bakeries")({
  head: () => ({
    meta: [
      { title: "Partner Bakeries — Page Order" },
      { name: "description", content: "Meet the bakeries that make our work possible." },
    ],
  }),
  component: BakeriesPage,
});

const bakeries = [
  { name: "Goody's Donuts", quote: "Partnering with Page Order means our daily surplus becomes a daily gift to the community." },
  { name: "K&T Donuts", quote: "It's incredible knowing our pastries reach families instead of the trash." },
  { name: "Yum Yum Donuts", quote: "A simple, organized program that genuinely makes a difference." },
  { name: "Fresh Bagel and Cafe", quote: "Reducing waste while supporting neighbors — it's a win for everyone." },
];

function BakeriesPage() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-brown-soft">Partner bakeries</p>
          <h1 className="animate-fade-up-delay-1 mt-4 font-display text-5xl text-brown md:text-6xl">The heart of our mission</h1>
          <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            These local bakeries make our work possible by sharing their surplus instead of throwing it away.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {bakeries.map((b, i) => (
            <Reveal key={b.name} delay={(Math.min(i, 3) * 100) as 0 | 100 | 200 | 300}>
              <div className="rounded-[2rem] bg-cream-deep p-10 shadow-soft">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-pastel font-display text-3xl text-brown">
                  {b.name.charAt(0)}
                </div>
                <h3 className="mt-6 font-display text-2xl text-brown">{b.name}</h3>
                <p className="mt-4 text-muted-foreground">"{b.quote}"</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <Reveal variant="zoom">
          <div className="rounded-[2rem] bg-brown p-12 text-center text-cream">
            <h2 className="font-display text-3xl md:text-4xl">Run a bakery? Partner with us.</h2>
            <p
