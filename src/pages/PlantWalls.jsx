import React from "react";
import { Eyebrow, Reveal, VineDivider } from "../components/UI.jsx";
import { PLANT_WALL_PACKAGES, PLANT_WALL_PROCESS } from "../data.js";
import { WHATSAPP } from "../components/Nav.jsx";

const GALLERY_TINTS = ["#2E7D4F", "#C4703C", "#3FAE6B", "#9CA39B", "#4CA35A", "#E8891F"];

export default function PlantWalls() {
  return (
    <>
      <header className="relative overflow-hidden px-6 pb-16 pt-20 sm:pt-24">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(63,174,107,0.24) 0%, rgba(63,174,107,0) 70%)" }}
        ></div>
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow>Design &amp; installation</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-2xl font-serif text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl">
            Custom gardens &amp; vertical plant walls, done properly.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-stone-300">
            For homes and offices ready to go beyond a few pots — a full living wall or garden,
            planned end to end by one team.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-emerald-950 transition-transform hover:-translate-y-0.5"
            >
              Book a free consultation →
            </a>
          </div>
        </div>
      </header>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY_TINTS.map((tint, i) => (
            <Reveal key={i}>
              <div
                className="flex aspect-[4/3] items-center justify-center rounded-xl border border-white/10"
                style={{ backgroundColor: tint + "26" }}
              >
                <span className="text-xs font-medium uppercase tracking-widest text-stone-400">Project preview</span>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-5xl text-center text-xs text-stone-500">
          Real project photos go here as our first Lucknow installations are completed.
        </p>
      </section>

      <VineDivider />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-xl">
            <Eyebrow>Packages</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-stone-50 sm:text-4xl">
              Three ways to start, priced honestly.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PLANT_WALL_PACKAGES.map((pkg) => (
              <Reveal key={pkg.name}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-emerald-900/40 p-8">
                  <h3 className="mb-1.5 text-xl font-semibold text-stone-50">{pkg.name}</h3>
                  <span className="mb-4 font-serif text-lg italic text-amber-400">{pkg.price}</span>
                  <p className="mb-5 text-sm leading-relaxed text-stone-300">{pkg.body}</p>
                  <ul className="mt-auto space-y-2.5">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-stone-300">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VineDivider flip />

      <section className="border-y border-white/10 bg-emerald-950/60 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal className="mb-12 text-center">
            <Eyebrow>How a project runs</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-md font-serif text-3xl font-semibold text-stone-50 sm:text-4xl">
              Inquiry to handover, five steps.
            </h2>
          </Reveal>
          <div className="space-y-4">
            {PLANT_WALL_PROCESS.map((s) => (
              <Reveal key={s.n}>
                <div className="flex gap-5 rounded-xl border border-white/10 bg-emerald-900/30 p-6">
                  <span className="font-serif text-lg italic text-amber-400">{s.n}</span>
                  <div>
                    <h3 className="mb-1.5 text-base font-semibold text-stone-50">{s.title}</h3>
                    <p className="text-[15px] leading-relaxed text-stone-300">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-md font-serif text-2xl font-semibold text-stone-50 sm:text-3xl">
            Have a wall, balcony, or lobby in mind?
          </h2>
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone-300">
            Send us a photo of the space over WhatsApp — that's usually enough for us to give you a
            rough sense of what's possible.
          </p>
        </Reveal>
        <Reveal className="mt-7 flex justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-emerald-950 transition-transform hover:-translate-y-0.5"
          >
            Start on WhatsApp →
          </a>
        </Reveal>
      </section>
    </>
  );
}
