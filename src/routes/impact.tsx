import { createFileRoute, Link } from "@tanstack/react-router";
import { Store, Building2, ArrowRight, MapPin, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import {
  BAKERIES,
  COMMUNITY_PARTNERS,
  MORE_BAKERIES,
  MORE_COMMUNITY_PARTNERS,
  ORG,
  STATS,
} from "@/lib/org";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Zero Crumbs Initiative" },
      {
        name: "description",
        content: `${STATS.donuts} donuts rescued, ${STATS.pounds} pounds of food saved, and counting.`,
      },
    ],
  }),
  component: ImpactPage,
});

const stats = [
  { num: STATS.donuts, label: "Donuts rescued" },
  { num: STATS.pounds, label: "Pounds of food saved" },
  { num: STATS.bakeries, label: "Bakery partners" },
  { num: STATS.communityPartners, label: "Community partners" },
];

const partnerGroups = [
  {
    Icon: Store,
    title: "Bakery partners",
    blurb: "Local shops that set aside their end-of-day surplus for us.",
    items: BAKERIES.slice(0, 4).map((b) => b.name),
    more: `and ${MORE_BAKERIES} more bakeries across the community`,
  },
  {
    Icon: Building2,
    title: "Community distribution partners",
    blurb: "Organizations that get rescued food directly to neighbors.",
    items: COMMUNITY_PARTNERS,
    more: `and ${MORE_COMMUNITY_PARTNERS} more partners`,
  },
];

function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Our impact"
        title="Numbers worth celebrating"
        lede="Every figure below is a pastry that fed someone instead of filling a dumpster."
      />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:pb-20 md:pt-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={(Math.min(i, 3) * 100) as 0 | 100 | 200 | 300}
              className="h-full"
            >
              <div className="flex h-full flex-col justify-center rounded-[1.75rem] bg-cream-deep p-8 text-center">
                <div className="font-display text-4xl font-semibold leading-none text-brown md:text-5xl">
                  {s.num}
                </div>
                <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {(ORG.statsAsOf || ORG.countingNote) && (
          <div className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
            {ORG.statsAsOf && <p className="font-medium text-brown">As of {ORG.statsAsOf}</p>}
            {ORG.countingNote && (
              <p className="mt-1">
                <span className="font-medium text-brown">How we count: </span>
                {ORG.countingNote}
              </p>
            )}
          </div>
        )}
      </section>

      <section className="bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal className="text-center">
            <p className="eyebrow">Who we work with</p>
            <h2 className="mt-4 font-display text-3xl text-brown md:text-4xl">Our partners</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {partnerGroups.map((group, i) => (
              <Reveal
                key={group.title}
                variant={i === 0 ? "left" : "right"}
                delay={(i * 100) as 0 | 100}
                className="h-full"
              >
                <div className="flex h-full flex-col rounded-[1.75rem] bg-cream p-8 shadow-soft md:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-pastel text-brown">
                    <group.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-brown">{group.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{group.blurb}</p>
                  <ul className="mt-6 divide-y divide-border/60 border-t border-border/60">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 py-3 text-foreground">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-pastel" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto pt-4 text-sm italic text-muted-foreground">{group.more}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {ORG.chapters.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal className="text-center">
            <p className="eyebrow">Beyond one city</p>
            <h2 className="mt-4 font-display text-3xl text-brown md:text-4xl">Our chapters</h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ORG.chapters.map((c) => (
              <li
                key={c.name}
                className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-6"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brown-soft" />
                <span>
                  <span className="block font-display text-lg text-brown">{c.name}</span>
                  <span className="text-sm text-muted-foreground">{c.location}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {ORG.partnerQuotes.length > 0 && (
        <section className="bg-cream-deep">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <Reveal className="text-center">
              <p className="eyebrow">In their words</p>
              <h2 className="mt-4 font-display text-3xl text-brown md:text-4xl">
                What partners say
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {ORG.partnerQuotes.map((q) => (
                <figure key={q.name} className="rounded-[1.75rem] bg-cream p-8 shadow-soft">
                  <Quote className="h-6 w-6 text-orange-pastel" />
                  <blockquote className="mt-4 text-lg leading-relaxed text-foreground">
                    {q.quote}
                  </blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-semibold text-brown">{q.name}</span>
                    <span className="text-muted-foreground"> · {q.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal variant="zoom">
          <div className="rounded-[2rem] bg-brown px-8 py-14 text-center text-cream md:px-16">
            <h2 className="font-display text-3xl md:text-4xl">Help us grow these numbers</h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/80">
              Every volunteer shift and every dollar turns more surplus into meals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/get-involved" search={{ tab: "volunteer" }}>
                <Button
                  size="lg"
                  className="rounded-full bg-orange-pastel text-brown hover:bg-orange-pastel/90"
                >
                  Volunteer <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/donate">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-cream/40 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
                >
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
