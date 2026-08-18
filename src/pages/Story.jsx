import React from "react";
import { Eyebrow, Reveal, VineDivider } from "../components/UI.jsx";
import { WHATSAPP } from "../components/Nav.jsx";
import SEO from "../components/SEO.jsx";

const ROADMAP = [
  {
    t: "Start where trust is easiest to earn",
    d: "Lucknow first. Real conversations on Instagram and WhatsApp, real deliveries, real feedback — before a single line of app code.",
  },
  {
    t: "Bring growers and gardeners on properly",
    d: "Once we know what this city actually wants, we formalize partnerships with the nurseries, potters and gardeners who prove they can deliver on it.",
  },
  {
    t: "Build the platform the demand earned",
    d: "A proper storefront and booking system — sized to match real order volume, not built ahead of it and left half-used.",
  },
  {
    t: "Take on the bigger projects",
    d: "Custom garden design and vertical plant walls for homes and offices, once the everyday plumbing — products and service — is running smoothly.",
  },
  {
    t: "Do it again, somewhere else",
    d: "Once Lucknow works end to end, the same model — not a bigger guess — is what we take to the next city.",
  },
];

export default function Story() {
  return (
    <>
      <SEO
        title="Our Story"
        description="Named after Vasuki, king of serpents from the Samudra Manthan — the story of why Vasukii exists and the roadmap from Lucknow to beyond."
        path="/story"
      />
      <header className="relative overflow-hidden px-6 pb-20 pt-20 sm:pt-24">
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,137,31,0.16) 0%, rgba(232,137,31,0) 70%)" }}
        ></div>
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow>Our story</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-2xl font-serif text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl">
            The serpent that churned the ocean — and what we're churning next.
          </h1>
        </div>
      </header>

      <VineDivider />

      <section className="px-6 py-10">
        <div className="mx-auto max-w-2xl space-y-6 text-[17px] leading-relaxed text-stone-300">
          <Reveal>
            <p>
              In Hindu mythology, when the gods and demons wanted to draw the nectar of immortality
              from the cosmic ocean, they needed something strong enough to serve as a churning rope.{" "}
              <strong className="font-semibold text-stone-50">Vasuki</strong>, the king of serpents, offered
              himself — coiling around Mount Mandara while both sides pulled at either end.
            </p>
          </Reveal>
          <Reveal>
            <p>
              It wasn't a quick process. The churning went on for a long time, and plenty of things
              rose from the ocean before the good stuff finally surfaced — poison before nectar,
              chaos before renewal. Vasuki held on through all of it, because he was the connective
              thread the entire process depended on.
            </p>
          </Reveal>
          <Reveal>
            <p>
              That's the part of the story we kept. Not the mythology as decoration, but the role:{" "}
              <em>the coil that connects</em>. A city has plant growers who need customers. It has
              skilled gardeners who need steady work. It has designers who need real projects. None
              of that is missing — it's just scattered. Vasukii is what pulls those threads into one
              place.
            </p>
          </Reveal>
        </div>
      </section>

      <VineDivider flip />

      <section className="border-y border-white/10 bg-emerald-950/60 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal className="mb-10 text-center">
            <Eyebrow>What we're going to do</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-lg font-serif text-3xl font-semibold text-stone-50 sm:text-4xl">
              Right now, we're proving it — one city, one order at a time.
            </h2>
          </Reveal>

          <div className="space-y-5">
            {ROADMAP.map((item, i) => (
              <Reveal key={item.t}>
                <div className="flex gap-5 rounded-xl border border-white/10 bg-emerald-900/30 p-6">
                  <span className="font-serif text-lg italic text-amber-400">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="mb-1.5 text-base font-semibold text-stone-50">{item.t}</h3>
                    <p className="text-[15px] leading-relaxed text-stone-300">{item.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <Reveal>
          <p className="mx-auto max-w-md text-base leading-relaxed text-stone-300">
            If you're a grower, gardener or designer in Lucknow reading this — we'd genuinely like
            to hear from you.
          </p>
        </Reveal>
        <Reveal className="mt-7 flex justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-emerald-950 transition-transform hover:-translate-y-0.5"
          >
            Say hello on WhatsApp →
          </a>
        </Reveal>
      </section>
    </>
  );
}
