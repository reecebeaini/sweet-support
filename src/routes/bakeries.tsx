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
  { name: "Goody's Donuts", address: "13301 Artesia Blvd, Cerritos, CA 90703" },
  { name: "K&T Donuts", address: "15747 Imperial Hwy., La Mirada, CA 90638" },
  { name: "Yum Yum Donuts", address: "5454 Orangethorpe Ave, La Palma, CA 90623" },
  { name: "Fresh Bagel and Cafe", address: "6011 Lincoln Ave, Buena Park, CA 90620" },
  { name: "DK's Donuts", address: "12549 Alondra Blvd, Norwalk, CA 90650" },
];

function BakeriesPage() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p style={{animation: "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both"}} className="text-sm font-semibold uppercase tracking-[0.2em] text-brown-soft">Partner bakeries</p>
          <h1 style={{animation: "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both"}} className="mt-4 font-display text-5xl text-brown md:text-6xl">The heart of our mission</h1>
          <p style={{animation: "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both"}} className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            These local bakeries make our work possible by sharing their surplus instead of throwing it away.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {bakeries.map((b, i) => (
            <Reveal key={b.name} delay={(Math.min(i, 3) * 100) as 0 | 100 | 200 | 300}>
              <div className="flex flex-col items-center rounded-2xl bg-cream-deep p-6 text-center shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-pastel font-display text-xl text-brown">
                  {b.name.charAt(0)}
                </div>
                <h3 className="mt-4 font-display text-base text-brown">{b.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{b.address}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <Reveal variant="zoom">
          <div className="rounded-[2rem] bg-brown p-12 text-center text-cream">
            <h2 className="font-display text-3xl md:text-4xl">Run a bakery? Partner with us.</h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/80">
              Turn end-of-day surplus into community impact. We make the process simple, organized, and rewarding.
            </p>
            <Link to="/get-involved" className="mt-6 inline-block">
              <Button size="lg" className="rounded-full bg-orange-pastel text-brown hover:bg-orange-pastel/90">
                Become a Partner
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
