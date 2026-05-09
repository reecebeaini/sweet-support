import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import heroImg from "@/assets/hero-donuts.jpg";
import communityImg from "@/assets/community.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Page Order — Making a difference, one donut at a time" },
      { name: "description", content: "We rescue surplus donuts and pastries from local bakeries and redistribute them to communities in need." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <Reveal variant="left">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-1.5 text-xs font-medium text-brown shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-pastel" /> A nonprofit initiative
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-brown md:text-7xl">
              Making a difference, <em className="not-italic text-brown-soft">one donut</em> at a time.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              We rescue surplus pastries from local bakeries and deliver them to people in need — fighting food waste and feeding communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/donate">
                <Button size="lg" className="rounded-full bg-brown text-cream hover:bg-brown/90">
                  Donate <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button size="lg" variant="outline" className="rounded-full border-brown/30 text-brown hover:bg-cream-deep">
                  Get involved
                </Button>
              </Link>
            </div>
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
      <Reveal as="section" className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown-soft">Our mission</p>
        <h2 className="mt-4 font-display text-3xl text-brown md:text-5xl">
          Reduce food waste. Strengthen communities.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          We partner with local bakeries and community organizations to collect and distribute unsold donuts and pastries that would otherwise go to waste — bringing them to those who need it most.
        </p>
      </Reveal>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 rounded-[2rem] bg-cream-deep p-8 md:grid-cols-3 md:p-14">
          {[
            { num: "18,000+", label: "Donuts Rescued", Icon: Heart },
            { num: "4", label: "Bakery Partners", Icon: Leaf },
            { num: "3", label: "Community Distribution Partners", Icon: Users },
          ].map(({ num, label, Icon }, i) => (
            <Reveal key={label} delay={(i * 100) as 0 | 100 | 200} className="text-center md:text-left">
              <Icon className="mx-auto h-8 w-8 text-orange-pastel md:mx-0" />
              <div className="mt-4 font-display text-6xl font-semibold text-brown md:text-7xl">{num}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 md:grid-cols-2">
        <Reveal variant="left">
          <img
            src={communityImg}
            alt="Volunteers receiving pastries"
            loading="lazy"
            width={1400}
            height={1000}
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
          />
        </Reveal>
        <Reveal variant="right" delay={100}>
          <h2 className="font-display text-3xl text-brown md:text-5xl">Small actions. Meaningful change.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Every donated pastry represents more than food — it represents compassion, sustainability, and community connection.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-brown hover:text-brown-soft">
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
