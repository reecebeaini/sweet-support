import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ArrowRight, Mail, Truck, Package, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { NonprofitBadge } from "@/components/nonprofit-badge";
import donutsBox from "@/assets/donuts-box.jpg";
import { ORG, giveHref } from "@/lib/org";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Zero Crumbs Initiative" },
      {
        name: "description",
        content:
          "Support Zero Crumbs Initiative with a donation. Every dollar helps rescue more pastries and feed more neighbors.",
      },
      { property: "og:title", content: "Donate to Zero Crumbs Initiative" },
      {
        property: "og:description",
        content: "Help us rescue surplus pastries and feed communities in need.",
      },
    ],
  }),
  component: DonatePage,
});

const amounts = [
  { value: 10, label: "Feeds 5 neighbors" },
  { value: 25, label: "Covers a weekly pickup" },
  { value: 50, label: "Stocks a community pantry" },
  { value: 100, label: "Powers a month of routes" },
];

const uses = [
  { Icon: Truck, title: "Pickups", body: "Volunteers collect surplus from partner bakeries." },
  { Icon: Package, title: "Packaging", body: "Food is packaged safely for transit." },
  {
    Icon: HandHeart,
    title: "Deliveries",
    body: "Food reaches shelters, churches, and community organizations.",
  },
];

/** Opens in a new tab only for a real payment page, not a mailto link. */
const external = ORG.donateUrl ? { target: "_blank", rel: "noreferrer" } : {};

function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero bg-dots relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <Reveal variant="left">
            {ORG.taxStatus ? (
              <NonprofitBadge />
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-1.5 text-xs font-medium text-brown shadow-soft">
                <Heart className="h-3.5 w-3.5 text-orange-pastel" /> Support our mission
              </span>
            )}
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-brown md:text-7xl">
              Donate today, <em className="not-italic text-brown-soft">change tomorrow</em>.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Every contribution fuels pickups, packaging, and deliveries — turning surplus pastries
              into smiles across our community.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={giveHref()} {...external}>
                <Button
                  size="lg"
                  className="rounded-full bg-brown text-cream shadow-soft transition hover:bg-brown-soft"
                >
                  Donate now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link to="/get-involved" search={{ tab: "in-kind" }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-brown/30 bg-cream/60 text-brown hover:bg-cream"
                >
                  Give in kind
                </Button>
              </Link>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="relative">
              <div className="absolute -inset-4 animate-float rounded-[2rem] bg-orange-pastel/30 blur-2xl" />
              <img
                src={donutsBox}
                alt="Box of fresh donuts"
                width={1400}
                height={1000}
                className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-warm"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Amounts */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal className="text-center">
          <p className="eyebrow">Choose your impact</p>
          <h2 className="mt-4 font-display text-3xl text-brown md:text-5xl">
            Every dollar travels far
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {amounts.map((a, i) => (
            <Reveal key={a.value} delay={(i * 100) as 0 | 100 | 200 | 300} className="h-full">
              <a
                href={giveHref(a.value)}
                {...external}
                className="hover-lift flex h-full flex-col rounded-[1.75rem] bg-cream-deep p-8 text-center shadow-soft"
              >
                <div className="font-display text-5xl font-semibold text-brown">${a.value}</div>
                <div className="mt-3 flex-1 text-sm text-muted-foreground">{a.label}</div>
                <div className="mt-6 inline-flex items-center justify-center gap-1 text-sm font-semibold text-brown">
                  Give ${a.value} <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Where it goes */}
      <section className="bg-cream-deep">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <Reveal className="text-center">
            <p className="eyebrow">How it's used</p>
            <h2 className="mt-4 font-display text-3xl text-brown md:text-5xl">
              Where your gift goes
            </h2>
          </Reveal>

          {ORG.fundsBreakdown.length > 0 ? (
            <ul className="mx-auto mt-12 max-w-2xl space-y-5">
              {ORG.fundsBreakdown.map((f) => (
                <li key={f.label}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-medium text-brown">{f.label}</span>
                    <span className="text-muted-foreground">{f.percent}%</span>
                  </div>
                  <div
                    className="mt-2 h-2.5 overflow-hidden rounded-full bg-cream"
                    role="img"
                    aria-label={`${f.label}: ${f.percent}%`}
                  >
                    <div
                      className="h-full rounded-full bg-orange-pastel"
                      style={{ width: `${f.percent}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {uses.map(({ Icon, title, body }, i) => (
                <Reveal key={title} delay={(i * 100) as 0 | 100 | 200} className="h-full">
                  <div className="h-full rounded-[1.75rem] bg-cream p-8 shadow-soft">
                    <Icon className="h-8 w-8 text-orange-pastel" />
                    <h3 className="mt-4 font-display text-2xl text-brown">{title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {ORG.taxStatus && (
            <p className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border/60 bg-cream p-6 text-center text-sm leading-relaxed text-muted-foreground">
              {ORG.name} is a {ORG.taxStatus}
              {ORG.ein ? <> (EIN {ORG.ein})</> : null}. Contributions may be tax-deductible to the
              extent permitted by law.
            </p>
          )}
        </div>
      </section>

      {/* Questions */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center md:py-24">
        <Reveal variant="zoom">
          <h2 className="font-display text-3xl text-brown md:text-5xl">Questions about giving?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Reach out and we'll help with employer matching, in-kind donations, or partnership
            opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${ORG.email}`}>
              <Button
                size="lg"
                className="rounded-full bg-brown text-cream shadow-soft transition hover:bg-brown-soft"
              >
                <Mail className="mr-2 h-4 w-4" /> Email us
              </Button>
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
