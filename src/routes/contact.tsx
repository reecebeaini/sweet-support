import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, Instagram, HandHeart, Store, Flag } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Zero Crumbs Initiative" },
      { name: "description", content: "Get in touch with Zero Crumbs Initiative." },
    ],
  }),
  component: ContactPage,
});

const items = [
  {
    Icon: Mail,
    label: "Email",
    value: "zerocrumbsiniative@gmail.com",
    href: "mailto:zerocrumbsiniative@gmail.com",
    note: "Best for partnerships and press",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "(562) 235-5520",
    href: "tel:5622355520",
    note: "Weekdays, 9am – 6pm PT",
  },
  {
    Icon: Instagram,
    label: "Instagram",
    value: "@zerocrumbinitiative",
    href: "https://instagram.com/zerocrumbinitiative",
    note: "Pickup days, events, and updates",
  },
];

const routes = [
  {
    Icon: HandHeart,
    title: "I want to volunteer",
    body: "Fill out the volunteer application — community service hours available.",
    to: "/get-involved" as const,
    cta: "Volunteer application",
  },
  {
    Icon: Store,
    title: "I run a bakery",
    body: "Tell us about your surplus and we'll set up a pickup schedule that fits.",
    to: "/get-involved" as const,
    cta: "Partner with us",
  },
  {
    Icon: Flag,
    title: "I want a chapter in my city",
    body: "Apply to launch a chapter and we'll walk you through every step.",
    to: "/start-a-chapter" as const,
    cta: "Start a chapter",
  },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's connect"
        lede="Whether you're a bakery, a community organization, or a future volunteer — we'd love to hear from you."
      />

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pb-24 md:pt-20">
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={(i * 100) as 0 | 100 | 200} className="h-full">
              <a
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="hover-lift group flex h-full flex-col items-center rounded-[1.75rem] bg-cream-deep p-8 text-center shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-pastel text-brown transition group-hover:scale-110">
                  <it.Icon className="h-5 w-5" />
                </span>
                <span className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">
                  {it.label}
                </span>
                <span className="mt-1.5 break-all font-semibold text-brown">{it.value}</span>
                <span className="mt-3 text-xs text-muted-foreground">{it.note}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <Reveal className="text-center">
            <p className="eyebrow">Point me in the right direction</p>
            <h2 className="mt-4 font-display text-3xl text-brown md:text-4xl">
              What brings you here?
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {routes.map((r, i) => (
              <Reveal key={r.title} delay={(i * 100) as 0 | 100 | 200} className="h-full">
                <Link
                  to={r.to}
                  className="hover-lift flex h-full flex-col rounded-[1.75rem] bg-cream p-8 shadow-soft"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-pastel text-brown">
                    <r.Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-brown">{r.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {r.body}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-brown">{r.cta} →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
