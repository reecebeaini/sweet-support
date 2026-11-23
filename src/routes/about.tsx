import { createFileRoute } from "@tanstack/react-router";
import donutsBox from "@/assets/donuts-box.jpg";
import reece from "@/assets/reece.png";
import melody from "@/assets/melody.png";
import senuka from "@/assets/senuka.jpg";
import faizula from "@/assets/faizula.png";
import alexa from "@/assets/alexa.png";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Zero Crumbs Initiative" },
      { name: "description", content: "Our story, leadership, goals and values." },
    ],
  }),
  component: AboutPage,
});

const leaders = [
  { name: "Reece Beaini", title: "Executive President", img: reece, initials: "RB" },
  { name: "Melody Hsiue", title: "Executive Vice President", img: melody, initials: "MH" },
  { name: "Senuka Jayasinghe", title: "Director of Outreach", img: senuka, initials: "SJ" },
  { name: "Faizula Abrar", title: "Director of Publicity", img: faizula, initials: "FA" },
  { name: "Alexa Nohai", title: "Director of Publicity", img: alexa, initials: "AN" },
];

const goals = [
  "Reduce unnecessary food waste in local communities",
  "Expand partnerships with bakeries and community organizations",
  "Increase access to food support for individuals and families in need",
  "Create volunteer opportunities for students and community members",
  "Build a more sustainable and connected community through food redistribution",
];

const values = [
  {
    title: "Community",
    body: "Strong communities are built when people support one another through meaningful action.",
  },
  {
    title: "Sustainability",
    body: "We give surplus food a second purpose instead of allowing it to be discarded.",
  },
  {
    title: "Compassion",
    body: "Every donation represents care, dignity, and support for people facing food insecurity.",
  },
  {
    title: "Collaboration",
    body: "Bakeries, shelters, churches, and volunteers create a greater collective impact.",
  },
  {
    title: "Responsibility",
    body: "We operate transparently, professionally, and with a genuine commitment to helping others.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Our story"
        lede="We're a student-led nonprofit getting perfectly good pastries to people instead of the trash."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-5 md:pb-24 md:pt-20">
        <Reveal variant="left" className="md:col-span-3 space-y-6 text-lg text-muted-foreground">
          <p>
            Our organization started with a simple realization: thousands of perfectly good donuts
            and pastries are thrown away every day while many people in local communities continue
            to face food insecurity.
          </p>
          <p>
            What began as a small effort to connect surplus bakery items with people in need quickly
            grew into a larger mission centered around reducing food waste and strengthening
            community support.
          </p>
          <p>
            By partnering with local bakeries, shelters, churches, and food assistance
            organizations, we help redirect unsold food that would otherwise go to waste.
          </p>
          <p>
            We believe small actions can create meaningful change. Every donated pastry represents
            compassion, sustainability, and community connection.
          </p>
        </Reveal>
        <Reveal variant="right" delay={100} className="md:col-span-2">
          <img
            src={donutsBox}
            alt="Box of pastries"
            loading="lazy"
            width={1200}
            height={900}
            className="aspect-[3/4] w-full rounded-[2rem] object-cover shadow-soft"
          />
        </Reveal>
      </section>

      <section className="bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <Reveal className="text-center">
            <p className="eyebrow">The team</p>
            <h2 className="mt-4 font-display text-3xl text-brown md:text-4xl">Leadership</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((person, i) => (
              <Reveal
                key={person.name}
                delay={(Math.min(i, 4) * 100) as 0 | 100 | 200 | 300 | 400}
                className="h-full"
              >
                <div className="hover-lift flex h-full flex-col items-center rounded-[1.75rem] bg-cream p-8 text-center shadow-soft">
                  {person.img ? (
                    <img
                      src={person.img}
                      alt={person.name}
                      loading="lazy"
                      className="h-32 w-32 rounded-full object-cover object-top ring-4 ring-orange-pastel/30"
                    />
                  ) : (
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-orange-pastel font-display text-3xl text-brown">
                      {person.initials}
                    </div>
                  )}
                  <h3 className="mt-5 font-display text-xl text-brown">{person.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{person.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <Reveal className="text-center">
          <p className="eyebrow">What we're working toward</p>
          <h2 className="mt-4 font-display text-3xl text-brown md:text-4xl">Our goals</h2>
        </Reveal>
        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {goals.map((g, i) => (
            <Reveal
              key={g}
              delay={(Math.min(i, 4) * 100) as 0 | 100 | 200 | 300 | 400}
              className="h-full"
            >
              <li className="flex h-full items-start gap-4 rounded-2xl border border-border/60 bg-card p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brown font-display text-sm text-cream">
                  {i + 1}
                </span>
                <span className="text-foreground">{g}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <Reveal className="text-center">
            <p className="eyebrow">What guides us</p>
            <h2 className="mt-4 font-display text-3xl text-brown md:text-4xl">Our values</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={(Math.min(i, 4) * 100) as 0 | 100 | 200 | 300 | 400}
                className="h-full"
              >
                <div className="hover-lift h-full rounded-2xl bg-cream p-7 shadow-soft">
                  <h3 className="font-display text-xl text-brown">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
