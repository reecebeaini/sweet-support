import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Leaf, Users, Package, Truck, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import heroImg from "@/assets/hero-donuts.jpg";
import donutImg from "@/assets/donut.png";

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
  { num: "25,000+", label: "Donuts rescued", Icon: Heart },
  { num: "86", label: "Bakery partners", Icon: Leaf },
  { num: "38", label: "Community partners", Icon: Users },
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
    body: "Our trained volunteers run scheduled pickups and keep everything packaged safely in transit.",
  },
  {
    Icon: HandHeart,
    title: "Neighbors get fed",
    body: "Food goes straight to local shelters, churches, and community organizations for distribution.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero bg-dots relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-pink-soft/40 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <Reveal variant="left">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-1.5 text-xs font-medium text-brown shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-pastel" /> A nonprofit initiative
            </span>
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
            <p className="mt-8 text-sm text-muted-foreground">
              <span className="font-semibold text-brown">25,000+</span> pastries rescued with{" "}
              <span className="font-semibold text-brown">86</span> bakery partners.
            </p>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-orange-pastel/30 blur-2xl animate-float" />
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

      {/* Mission */}
      <Reveal as="section" className="mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
        <p className="eyebrow">Our mission</p>
        <h2 className="mt-4 font-display text-3xl text-brown md:text-5xl">
          Reduce food waste. Strengthen communities.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          We partner with local bakeries and community organizations to collect and distribute
          unsold donuts and pastries that would otherwise go to waste — bringing them to those who
          need it most.
        </p>
      </Reveal>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
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
      </section>

      {/* How it works */}
      <section className="bg-cream-deep">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
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

      {/* Story */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
        <Reveal variant="left">
          <img
            src={donutImg}
            alt="A delicious donut"
            loading="lazy"
            width={1400}
            height={1000}
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
          />
        </Reveal>
        <Reveal variant="right" delay={100}>
          <p className="eyebrow">Our story</p>
          <h2 className="mt-4 font-display text-3xl text-brown md:text-5xl">
            Small actions. Meaningful change.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Every donated pastry represents more than food — it represents compassion,
            sustainability, and community connection.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-brown transition-colors hover:text-brown-soft"
          >
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
        <Reveal variant="zoom">
          <div className="relative overflow-hidden rounded-[2rem] bg-brown px-8 py-14 text-center text-cream md:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-orange-pastel/20 blur-2xl"
            />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl">
                Ready to help rescue the next batch?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-cream/80">
                Volunteer a few hours, partner your bakery, or start a chapter in your own city.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/get-involved">
                  <Button
                    size="lg"
                    className="rounded-full bg-orange-pastel text-brown hover:bg-orange-pastel/90"
                  >
                    Volunteer with us
                  </Button>
                </Link>
                <Link to="/start-a-chapter">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-cream/40 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
                  >
                    Start a chapter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
