import React from "react";
import { Link } from "react-router-dom";
import { Eyebrow, Reveal, VineDivider, AnimatedPlant } from "../components/UI.jsx";
import { PILLARS } from "../data.js";
import { WHATSAPP, INSTAGRAM } from "../components/Nav.jsx";
import SEO, { SITE_URL } from "../components/SEO.jsx";

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "GardenStore",
  name: "Vasukii",
  description:
    "Vasukii brings local plants, pots, on-demand gardening, and custom plant wall design onto one platform — starting in Lucknow.",
  url: SITE_URL,
  image: `${SITE_URL}/vasukii-logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: "Lucknow, Uttar Pradesh",
  priceRange: "₹₹",
};

export default function Home() {
  return (
    <>
      <SEO
        title="Plants, Pots & Garden Care in Lucknow"
        description="Vasukii brings local plants, pots, on-demand gardening, and custom plant wall design onto one platform — starting in Lucknow."
        path="/"
        jsonLd={LOCAL_BUSINESS_JSON_LD}
      />
      <header className="relative overflow-hidden px-6 pb-28 pt-20 sm:pt-24">
        <div
          className="pointer-events-none absolute -right-40 -top-52 h-[640px] w-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(63,174,107,0.28) 0%, rgba(63,174,107,0) 70%)" }}
        ></div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 sm:grid-cols-[1.15fr_0.85fr]">
          <div className="relative">
            <Eyebrow>Now validating in Lucknow</Eyebrow>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-stone-50 sm:text-6xl lg:text-7xl">
              Plants, pots &amp;
              <br />
              garden care —
              <br />
              <em className="not-italic italic font-medium text-emerald-300">one green address.</em>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-300">
              Vasukii brings local growers, gardeners and designers onto one platform, so your
              space gets exactly what it needs — starting right here in Lucknow.
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-emerald-950 transition-transform hover:-translate-y-0.5"
              >
                Message us on WhatsApp →
              </a>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-stone-50 transition hover:bg-white/5"
              >
                Browse the shop
              </Link>
            </div>
          </div>

          <div className="relative flex aspect-square w-full max-w-[440px] items-center justify-center justify-self-center">
            <div className="absolute aspect-square w-full max-w-[380px] rounded-full border border-emerald-300/20"></div>
            <div className="absolute aspect-square w-full max-w-[460px] rounded-full border border-dashed border-emerald-300/10"></div>
            <AnimatedPlant />
          </div>
        </div>
      </header>

      <VineDivider />

      <section className="px-6 py-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 sm:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Eyebrow>Where the name comes from</Eyebrow>
            <h2 className="mt-5 max-w-md font-serif text-3xl font-semibold text-stone-50 sm:text-4xl">
              Named after the serpent who held up the earth.
            </h2>
          </Reveal>
          <Reveal className="space-y-5">
            <p className="text-[16.5px] leading-relaxed text-stone-300">
              In the story of the Samudra Manthan, <strong className="font-semibold text-stone-50">Vasuki</strong> — king
              of serpents — coiled himself around Mount Mandara and became the rope the gods and demons
              pulled to churn the ocean. What rose out of that churning was renewal itself.
            </p>
            <p className="text-[16.5px] leading-relaxed text-stone-300">
              We borrowed the name because it's the same idea, at a smaller scale — a bare balcony
              turned green again.
            </p>
            <Link to="/story" className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300 hover:text-emerald-200">
              Read our full story →
            </Link>
          </Reveal>
        </div>
      </section>

      <VineDivider flip />

      <section className="border-y border-white/10 bg-emerald-950/60 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-xl">
            <Eyebrow>What lives under one roof</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-stone-50 sm:text-4xl">
              Three ways Vasukii shows up in your space.
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-stone-300">
              Whichever one you need today, the other two are already here for whenever you need them next.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PILLARS.map((p) => (
              <Reveal key={p.title}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-emerald-900/40 p-8 transition-all hover:-translate-y-1 hover:border-emerald-400/50">
                  <span className="mb-5 block font-serif text-sm italic text-emerald-300">{p.tag}</span>
                  <h3 className="mb-3 text-xl font-semibold text-stone-50">{p.title}</h3>
                  <p className="mb-6 flex-1 text-[15px] leading-relaxed text-stone-300">{p.body}</p>
                  <Link to={p.link} className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300 hover:text-emerald-200">
                    {p.linkLabel} →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-xl">
          <Eyebrow>City-first, by design</Eyebrow>
          <Reveal>
            <h2 className="mx-auto mt-5 max-w-lg font-serif text-3xl font-semibold text-stone-50 sm:text-4xl">
              We're proving this in Lucknow before anywhere else.
            </h2>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-stone-300">
              No app yet, no big warehouse — just real orders, real gardeners, and real feedback
              from this city first. If it works here, it's built to travel.
            </p>
          </Reveal>
          <Reveal className="mt-8 flex justify-center">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-emerald-950 transition-transform hover:-translate-y-0.5"
            >
              See what we're growing on Instagram →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
