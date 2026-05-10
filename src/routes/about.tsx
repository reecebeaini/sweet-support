import { createFileRoute } from "@tanstack/react-router";
import donutsBox from "@/assets/donuts-box.jpg";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Page Order" },
      { name: "description", content: "Our story, leadership, goals and values behind Page Order." },
    ],
  }),
  component: AboutPage,
});

const goals = [
  "Reduce unnecessary food waste in local communities",
  "Expand partnerships with bakeries and community organizations",
  "Increase access to food support for individuals and families in need",
  "Create volunteer opportunities for students and community members",
  "Build a more sustainable and connected community through food redistribution",
];

const values = [
  { title: "Community", body: "Strong communities are built when people support one another through meaningful action." },
  { title: "Sustainability", body: "We give surplus food a second purpose instead of allowing it to be discarded." },
  { title: "Compassion", body: "Every donation represents care, dignity, and support for people facing food insecurity." },
  { title: "Collaboration", body: "Bakeries, shelters, churches, and volunteers create a greater collective impact." },
  { title: "Responsibility", body: "We operate transparently, professionally, and with a genuine commitment to helping others." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown-soft">About us</p>
          <h1 className="mt-4 font-display text-5xl text-brown md:text-6xl">Our story</h1>
        </div>
      </section>

     <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-5">
        <Reveal variant="left" className="md:col-span-3 space-y-6 text-lg text-muted-foreground">
          <p>Our organization started with a simple realization: thousands of perfectly good donuts and pastries are thrown away every day while many people in local communities continue to face food insecurity.</p>
          <p>What began as a small effort to connect surplus bakery items with people in need quickly grew into a larger mission centered around reducing food waste and strengthening community support.</p>
          <p>By partnering with local bakeries, shelters, churches, and food assistance organizations, we help redirect unsold food that would otherwise go to waste.</p>
          <p>We believe small actions can create meaningful change. Every donated pastry represents compassion, sustainability, and community connection.</p>
       </Reveal>
        <Reveal variant="right" delay={100} className="md:col-span-2">
          className="aspect-[3/4] w-full rounded-[2rem] object-cover shadow-soft" />
        </Reveal>
      </section>

      {/* Leadership */}
      <Reveal as="section" className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="font-display text-3xl text-brown md:text-4xl">Leadership</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-cream-deep p-8 shadow-soft">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-pastel font-display text-2xl text-brown">RB</div>
            <h3 className="mt-4 font-display text-2xl text-brown">Reece Beaini</h3>
            <p className="text-sm text-muted-foreground">Executive President</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Goals */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal><h2 className="font-display text-3xl text-brown md:text-4xl">Our Goals</h2></Reveal>
        <ul className="mt-8 space-y-3">
          {goals.map((g, i) => (
            <Reveal key={g} delay={(Math.min(i, 4) * 100) as 0 | 100 | 200 | 300 | 400}>
            <li className="flex items-start gap-4 rounded-2xl bg-cream-deep p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brown font-display text-sm text-cream">{i + 1}</span>
              <span className="text-foreground">{g}</span>
            </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal><h2 className="font-display text-3xl text-brown md:text-4xl">Our Values</h2></Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(Math.min(i, 4) * 100) as 0 | 100 | 200 | 300 | 400}>
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <h3 className="font-display text-xl text-brown">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
