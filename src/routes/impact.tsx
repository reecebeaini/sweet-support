import { createFileRoute } from "@tanstack/react-router";
import { Package, Truck, HandHeart } from "lucide-react";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Page Order" },
      { name: "description", content: "18,000+ donuts rescued, 3,375 pounds of food saved, and counting." },
    ],
  }),
  component: ImpactPage,
});

const stats = [
  { num: "18,000+", label: "Donuts Rescued" },
  { num: "3,375", label: "Pounds of Food Saved" },
  { num: "4", label: "Bakery Partners" },
  { num: "3", label: "Community Partners" },
];

const bakeries = ["Goody's Donuts", "K&T Donuts", "Yum Yum Donuts", "Fresh Bagel and Cafe"];
const partners = ["Hawaiian Gardens Food Bank", "New Life Community Church", "Project Coffee Cup"];

const steps = [
  { Icon: Package, title: "Bakeries set aside surplus food", body: "At the end of the day, participating bakeries set aside unsold donuts and pastries that would otherwise go to waste." },
  { Icon: Truck, title: "Volunteers collect donations", body: "Our trained volunteers follow scheduled pickups to collect packaged food from bakery partners safely and efficiently." },
  { Icon: HandHeart, title: "Food is delivered to the community", body: "Donations are quickly delivered to local shelters, churches, and community organizations for distribution." },
];

function ImpactPage() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown-soft">Our impact</p>
          <h1 className="mt-4 font-display text-5xl text-brown md:text-6xl">Numbers worth celebrating</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-[2rem] bg-cream-deep p-8 text-center shadow-soft">
              <div className="font-display text-5xl font-semibold text-brown md:text-6xl">{s.num}</div>
              <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2">
        <div className="rounded-[2rem] bg-pink-soft p-10">
          <h2 className="font-display text-3xl text-brown">Bakery Partners</h2>
          <ul className="mt-6 space-y-3">
            {bakeries.map((b) => (
              <li key={b} className="flex items-center gap-3 text-foreground">
                <span className="h-2 w-2 rounded-full bg-brown" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[2rem] bg-orange-pastel/40 p-10">
          <h2 className="font-display text-3xl text-brown">Community Distribution Partners</h2>
          <ul className="mt-6 space-y-3">
            {partners.map((p) => (
              <li key={p} className="flex items-center gap-3 text-foreground">
                <span className="h-2 w-2 rounded-full bg-brown" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center font-display text-3xl text-brown md:text-5xl">How it works</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-[2rem] border border-border/60 bg-card p-8">
              <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-brown font-display text-cream">{i + 1}</div>
              <s.Icon className="mt-2 h-8 w-8 text-orange-pastel" />
              <h3 className="mt-4 font-display text-xl text-brown">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}