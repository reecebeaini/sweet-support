import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Zero Crumbs Initiative" },
      { name: "description", content: "Get in touch with Page Order." },
    ],
  }),
  component: ContactPage,
});

const items = [
  { Icon: Mail, label: "Email", value: "zerocrumbsiniative@gmail.com", href: "mailto:zerocrumbsiniative@gmail.com" },
  { Icon: Phone, label: "Phone", value: "(562) 235-5520", href: "tel:5622355520" },
  { Icon: Instagram, label: "Instagram", value: "@zerocrumbinitiative", href: "https://instagram.com/zerocrumbinitiative" },
];

function ContactPage() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown-soft">Contact</p>
          <h1 className="mt-4 font-display text-5xl text-brown md:text-6xl">Let's connect</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Whether you're a bakery, a community organization, or a future volunteer — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group rounded-[2rem] bg-cream-deep p-8 text-center shadow-soft transition hover:shadow-warm"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-pastel text-brown transition group-hover:scale-110">
                <it.Icon className="h-6 w-6" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">{it.label}</div>
              <div className="mt-1 font-display text-lg text-brown">{it.value}</div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
