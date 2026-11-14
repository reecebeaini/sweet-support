import { createFileRoute, Link } from "@tanstack/react-router";
import { Package, Truck, HandHeart, Store, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Zero Crumbs Initiative" },
      {
        name: "description",
        content: "25,000+ donuts rescued, 5,400 pounds of food saved, and counting.",
      },
    ],
  }),
  component: ImpactPage,
});

const stats = [
  { num: "25,000+", label: "Donuts rescued" },
  { num: "5,400", label: "Pounds of food saved" },
  { num: "86", label: "Bakery partners" },
  { num: "38", label: "Community partners" },
];

const partnerGroups = [
  {
    Icon: Store,
    title: "Bakery partners",
    blurb: "Local shops that set aside their end-of-day surplus for us.",
    items: ["Goody's Donuts", "K&T Donuts", "Yum Yum Donuts", "Fresh Bagel and Cafe"],
    more: "and 82 more bakeries across the community",
  },
  {
    Icon: Building2,
    title: "Community distribution partners",
    blurb: "Organizations that get rescued food directly to neighbors.",
    items: ["Hawaiian Gardens Food Bank", "New Life Community Church", "Project Coffee Cup"],
    more: "and 35 more partners",
  },
];

const steps = [
  {
    Icon: Package,
    title: "Bakeries set aside surplus food",
    body: "At the end of the day, participating bakeries set aside unsold donuts and pastries that would otherwise go to waste.",
  },
  {
    Icon: Truck,
    title: "Volunteers collect donations",
    body: "Our trained volunteers follow scheduled pickups to collect packaged food from bakery partners safely and efficiently.",
  },
  {
    Icon: HandHeart,
    title: "Food is delivered to the community",
    body: "Donations are quickly delivered to local shelters, churches, and community organizations for distribution.",
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

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pb-24 md:pt-20">
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
      </section>

      <section className="bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
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

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <Reveal className="text-center">
          <p className="eyebrow">The process</p>
          <h2 className="mt-4 font-display text-3xl text-brown md:text-5xl">How it works</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={(i * 100) as 0 | 100 | 200} className="h-full">
              <div className="relative flex h-full flex-col rounded-[1.75rem] border border-border/60 bg-card p-8 pt-10">
                <span className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-brown font-display text-lg text-cream shadow-soft">
                  {i + 1}
                </span>
                <s.Icon className="h-8 w-8 text-orange-pastel" />
                <h3 className="mt-4 font-display text-xl text-brown">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
        <Reveal variant="zoom">
          <div className="rounded-[2rem] bg-brown px-8 py-14 text-center text-cream md:px-16">
            <h2 className="font-display text-3xl md:text-4xl">Help us grow these numbers</h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/80">
              Every volunteer shift and every dollar turns more surplus into meals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/get-involved">
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
