import React from "react";
import { Eyebrow, Reveal, VineDivider } from "../components/UI.jsx";
import { PILLARS, STEPS } from "../data.js";
import { WHATSAPP } from "../components/Nav.jsx";
import SEO from "../components/SEO.jsx";

export default function WhatWeDo() {
  return (
    <>
      <SEO
        title="What We Do"
        description="Plants and pots, on-demand gardening, and custom plant wall design — three ways Vasukii shows up for your space in Lucknow."
        path="/what-we-do"
      />
      <header className="relative overflow-hidden px-6 pb-16 pt-20 sm:pt-24">
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow>What we do</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-2xl font-serif text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl">
            One platform, three ways it shows up for you.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-stone-300">
            You don't have to know which one you need — describe your space, and we'll point you to
            the right one.
          </p>
        </div>
      </header>

      <VineDivider />

      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title}>
              <div className="grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-emerald-900/40 p-8 sm:grid-cols-[auto_1fr] sm:items-start sm:p-10">
                <span className="font-serif text-4xl italic text-amber-400/80">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <span className="mb-2 block font-serif text-sm italic text-emerald-300">{p.tag}</span>
                  <h3 className="mb-3 text-2xl font-semibold text-stone-50">{p.title}</h3>
                  <p className="mb-4 max-w-2xl text-[15.5px] leading-relaxed text-stone-300">{p.detail}</p>
                  <a href={p.link} className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300 hover:text-emerald-200">
                    {p.linkLabel} →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <VineDivider flip />

      <section className="border-y border-white/10 bg-emerald-950/60 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal className="mb-12 text-center">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-md font-serif text-3xl font-semibold text-stone-50 sm:text-4xl">
              Three steps, start to finish.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {STEPS.map((s) => (
              <Reveal key={s.n}>
                <div className="h-full rounded-2xl border border-white/10 bg-emerald-900/30 p-7">
                  <span className="mb-4 block font-serif text-2xl italic text-amber-400">{s.n}</span>
                  <h3 className="mb-2 text-lg font-semibold text-stone-50">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-stone-300">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-md font-serif text-2xl font-semibold text-stone-50 sm:text-3xl">
            Not sure which one fits your space?
          </h2>
        </Reveal>
        <Reveal className="mt-7 flex justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-emerald-950 transition-transform hover:-translate-y-0.5"
          >
            Just ask us on WhatsApp →
          </a>
        </Reveal>
      </section>
    </>
  );
}
