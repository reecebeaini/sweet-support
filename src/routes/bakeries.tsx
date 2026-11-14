import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/bakeries")({
  head: () => ({
    meta: [
      { title: "Partner Bakeries — Zero Crumbs Initiative" },
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
      <PageHero
        eyebrow="Partner bakeries"
        title="The heart of our mission"
        lede="These local bakeries make our work possible by sharing their surplus instead of throwing it away."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-24 md:pt-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bakeries.map((b, i) => (
            <Reveal
              key={b.name}
              delay={(Math.min(i, 3) * 100) as 0 | 100 | 200 | 300}
              className="h-full"
            >
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${b.name}, ${b.address}`)}`}
                target="_blank"
                rel="noreferrer"
                className="hover-lift flex h-full items-start gap-4 rounded-[1.5rem] bg-cream-deep p-6 shadow-soft"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-pastel font-display text-lg text-brown">
                  {b.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-lg text-brown">{b.name}</span>
                  <span className="mt-1.5 flex items-start gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    {b.address}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}

          <Reveal delay={300} className="h-full">
            <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-brown/25 p-6 text-center">
              <span className="font-display text-3xl text-brown">+82</span>
              <span className="mt-1 text-sm text-muted-foreground">
                more bakery partners across the community
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <Reveal variant="zoom">
          <div className="rounded-[2rem] bg-brown px-8 py-14 text-center text-cream md:px-16">
            <h2 className="font-display text-3xl md:text-4xl">Run a bakery? Partner with us.</h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/80">
              Turn end-of-day surplus into community impact. We make the process simple, organized,
              and rewarding.
            </p>
            <Link to="/get-involved" className="mt-8 inline-block">
              <Button
                size="lg"
                className="rounded-full bg-orange-pastel text-brown hover:bg-orange-pastel/90"
              >
                Become a partner
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
