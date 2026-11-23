import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Heart,
  Leaf,
  Users,
  Package,
  Truck,
  HandHeart,
  Store,
  Flag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { NonprofitBadge } from "@/components/nonprofit-badge";
import heroImg from "@/assets/hero-donuts.jpg";
import {
  BAKERIES,
  COMMUNITY_PARTNERS,
  MORE_BAKERIES,
  MORE_COMMUNITY_PARTNERS,
  ORG,
  STATS,
} from "@/lib/org";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zero Crumbs Initiative — Making a difference, one donut at a time" },
      {
        name: "description",
        content:
          "We rescue surplus donuts and pastries from local bakeries and redistribute them to communities in need.",
      },
      {
        property: "og:title",
        content: "Zero Crumbs Initiative — Making a difference, one donut at a time",
      },
      {
        property: "og:description",
        content:
          "We rescue surplus pastries from local bakeries and deliver them to people in need — fighting food waste and feeding communities.",
      },
      { property: "og:image", content: "https://zerocrumbsinitiative.org/og-image.jpeg" },
      { property: "og:url", content: "https://zerocrumbsinitiative.org" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { num: STATS.donuts, label: "Donuts rescued", Icon: Heart },
  { num: STATS.bakeries, label: "Bakery partners", Icon: Leaf },
  { num: STATS.communityPartners, label: "Community partners", Icon: Users },
];

const steps = [
  {
    Icon: Package,
    title: "Bakeries set aside surplus",
    body: "At the end of the day, partner bakeries box up unsold donuts and pastries instead of binning them.",
  },
  {
    Icon: Truck,
    title: "Volunteers collect it",
    body: "Trained volunteers run scheduled pickups and keep everything packaged safely in transit.",
  },
  {
    Icon: HandHeart,
    title: "Neighbors get fed",
    body: "Food goes straight to local shelters, churches, and community organizations for distribution.",
  },
];

function Index() {
  const featuredPartners = [...BAKERIES.slice(0, 4).map((b) => b.name), ...COMMUNITY_PARTNERS];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero bg-dots relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-pink-soft/40 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <Reveal variant="left">
            {ORG.taxStatus ? (
              <NonprofitBadge />
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-1.5 text-xs font-medium text-brown shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-pastel" /> A nonprofit
                initiative
              </span>
            )}
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-brown md:text-7xl">
              Making a difference, <em className="not-italic text-brown-soft">one donut</em> at a
              time.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              We rescue surplus pastries from local bakeries and deliver them to people in need —
              fighting food waste and feeding communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/donate">
                <Button
                  size="lg"
                  className="rounded-full bg-brown text-cream shadow-soft transition hover:bg-brown-soft"
                >
                  Donate <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-brown/30 bg-cream/60 text-brown hover:bg-cream"
                >
                  Get involved
                </Button>
              </Link>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="relative">
              <div className="absolute -inset-4 animate-float rounded-[2rem] bg-orange-pastel/30 blur-2xl" />
              <img
                src={heroImg}
                alt="Fresh donuts on parchment"
                width={1600}
                height={1200}
                className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-warm"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map(({ num, label, Icon }, i) => (
            <Reveal key={label} delay={(i * 100) as 0 | 100 | 200} className="h-full">
              <div className="flex h-full flex-col rounded-[1.75rem] bg-cream-deep p-8 text-center sm:text-left">
                <Icon className="mx-auto h-7 w-7 text-brown-soft sm:mx-0" />
                <div className="mt-5 font-display text-5xl font-semibold leading-none text-brown md:text-6xl">
                  {num}
                </div>
                <div className="mt-3 text-sm uppercase tracking-wider text-muted-foreground">
                  {label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          {ORG.statsAsOf ? `As of ${ORG.statsAsOf}. ` : ""}
          <Link to="/impact" className="underline-offset-4 hover:text-brown hover:underline">
            See the full impact report
          </Link>
        </p>
      </section>

      {/* How it works */}
      <section className="bg-cream-deep">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Reveal className="text-center">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-4 font-display text-3xl text-brown md:text-5xl">
              From the bakery counter to a neighbor's hands
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={(i * 100) as 0 | 100 | 200} className="h-full">
                <div className="relative flex h-full flex-col rounded-[1.75rem] bg-cream p-8 pt-10 shadow-soft">
                  <span className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-brown font-display text-lg text-cream shadow-soft">
                    {i + 1}
                  </span>
                  <Icon className="h-8 w-8 text-orange-pastel" />
                  <h3 className="mt-4 font-display text-xl text-brown">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center md:py-24">
        <Reveal>
          <p className="eyebrow">Our partners</p>
          <h2 className="mt-4 font-display text-3xl text-brown md:text-4xl">
            Working with {STATS.bakeries} bakeries and {STATS.communityPartners} community
            organizations
          </h2>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {featuredPartners.map((name) => (
              <li
                key={name}
                className="rounded-full border border-border/70 bg-card px-5 py-2.5 text-sm text-brown shadow-soft"
              >
                {name}
              </li>
            ))}
            <li className="rounded-full border border-dashed border-brown/25 px-5 py-2.5 text-sm text-muted-foreground">
              +{MORE_BAKERIES + MORE_COMMUNITY_PARTNERS} more
            </li>
          </ul>
        </Reveal>
      </section>

      {/* One door per audience */}
      <section className="bg-cream-deep">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Reveal className="text-center">
            <p className="eyebrow">Join in</p>
            <h2 className="mt-4 font-display text-3xl text-brown md:text-5xl">
              Where would you like to start?
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Heart,
                title: "Donate",
                body: "Fund pickups, packaging, and deliveries.",
                to: "/donate" as const,
                search: undefined,
              },
              {
                Icon: HandHeart,
                title: "Volunteer",
                body: "Pack, drive, or help us spread the word.",
                to: "/get-involved" as const,
                search: { tab: "volunteer" as const },
              },
              {
                Icon: Store,
                title: "Run a bakery?",
                body: "Turn end-of-day surplus into community impact.",
                to: "/get-involved" as const,
                search: { tab: "bakery" as const },
              },
              {
                Icon: Flag,
                title: "Start a chapter",
                body: "Bring Zero Crumbs to your school or city.",
                to: "/start-a-chapter" as const,
                search: undefined,
              },
            ].map(({ Icon, title, body, to, search }, i) => (
              <Reveal
                key={title}
                delay={(Math.min(i, 3) * 100) as 0 | 100 | 200 | 300}
                className="h-full"
              >
                <Link
                  to={to}
                  search={search}
                  className="hover-lift flex h-full flex-col rounded-[1.75rem] bg-cream p-7 shadow-soft"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-pastel text-brown">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-brown">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brown">
                    Go <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
