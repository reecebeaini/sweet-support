import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, DollarSign, Repeat, Gift, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import donutsBox from "@/assets/donuts-box.jpg";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Page Order" },
      {
        name: "description",
        content:
          "Support Page Order with a one-time or recurring online donation. Every dollar helps rescue more pastries and feed more neighbors.",
      },
      { property: "og:title", content: "Donate to Page Order" },
      {
        property: "og:description",
        content: "Help us rescue surplus pastries and feed communities in need.",
      },
    ],
  }),
  component: DonatePage,
});

// Replace these with your live payment links (Stripe Payment Link, PayPal.me,
// Venmo, GoFundMe, etc.). Until then, the buttons fall back to the contact email.
const DONATE_URL = "mailto:zerocrumbsiniative@gmail.com?subject=I%20want%20to%20donate%20to%20Page%20Order";
const RECURRING_URL = DONATE_URL;

const amounts = [
  { value: 10, label: "Feeds 5 neighbors" },
  { value: 25, label: "Covers a weekly pickup" },
  { value: 50, label: "Stocks a community pantry" },
  { value: 100, label: "Powers a month of routes" },
];

function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <Reveal variant="left">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-1.5 text-xs font-medium text-brown shadow-soft">
              <Heart className="h-3.5 w-3.5 text-orange-pastel" /> Support our mission
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-brown md:text-7xl">
              Donate today, <em className="not-italic text-brown-soft">change tomorrow</em>.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Every contribution fuels pickups, packaging, and deliveries — turning surplus pastries into smiles across our community.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={DONATE_URL} target="_blank" rel="noreferrer">
                <Button size="lg" className="rounded-full bg-brown text-cream hover:bg-brown/90">
                  Donate now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href={RECURRING_URL} target="_blank" rel="noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-brown/30 text-brown hover:bg-cream-deep"
                >
                  Give monthly
                </Button>
              </a>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-orange-pastel/30 blur-2xl animate-float" />
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

      {/* Amount tiles */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown-soft">
            Choose your impact
          </p>
          <h2 className="mt-4 font-display text-3xl text-brown md:text-5xl">
            Every dollar travels far
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {amounts.map((a, i) => (
            <Reveal key={a.value} delay={(i * 100) as 0 | 100 | 200 | 300}>
              <a
                href={`${DONATE_URL}%20-%20$${a.value}`}
                target="_blank"
                rel="noreferrer"
                className="hover-lift block rounded-3xl bg-cream-deep p-8 text-center shadow-soft"
              >
                <div className="font-display text-5xl font-semibold text-brown">${a.value}</div>
                <div className="mt-3 text-sm text-muted-foreground">{a.label}</div>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brown">
                  Give ${a.value} <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ways to give */}
      <section className="bg-cream-deep">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl text-brown md:text-5xl">More ways to give</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                Icon: DollarSign,
                title: "One-time gift",
                body: "Make an immediate impact with a single contribution of any amount.",
              },
              {
                Icon: Repeat,
                title: "Monthly giving",
                body: "Become a sustaining donor and power year-round rescue routes.",
              },
              {
                Icon: Gift,
                title: "In-kind donations",
                body: "Donate packaging, transportation, or volunteer hours to keep us moving.",
              },
            ].map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={(i * 100) as 0 | 100 | 200}>
                <div className="hover-lift h-full rounded-3xl bg-cream p-8 shadow-soft">
                  <Icon className="h-8 w-8 text-orange-pastel" />
                  <h3 className="mt-4 font-display text-2xl text-brown">{title}</h3>
                  <p className="mt-3 text-muted-foreground">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <Reveal variant="zoom">
          <h2 className="font-display text-3xl text-brown md:text-5xl">
            Questions about giving?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Reach out and we'll help with employer matching, in-kind donations, or partnership opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:zerocrumbsiniative@gmail.com">
              <Button size="lg" className="rounded-full bg-brown text-cream hover:bg-brown/90">
                <Mail className="mr-2 h-4 w-4" /> Email us
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-brown/30 text-brown hover:bg-cream-deep"
              >
                Contact page
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}