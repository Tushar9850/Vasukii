import React, { useState } from "react";
import { Eyebrow, Reveal } from "../components/UI.jsx";
import { BLOG_CATEGORIES, BLOG_POSTS } from "../data.js";
import { WHATSAPP, INSTAGRAM } from "../components/Nav.jsx";
import SEO from "../components/SEO.jsx";

export default function Blog() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === active);

  return (
    <>
      <SEO
        title="Blog — Plant Care & Garden Guides"
        description="Care guides, honest project breakdowns, and the environmental case for going a little greener — from the Vasukii journal."
        path="/blog"
      />
      <header className="relative overflow-hidden px-6 pb-14 pt-20 sm:pt-24">
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow>From the Vasukii journal</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-2xl font-serif text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl">
            Plants, people, and the city we're growing in.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-stone-300">
            Care guides, honest project breakdowns, and the environmental case for going a little
            greener — all in one place.
          </p>
        </div>
      </header>

      <section className="px-6 pb-8">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2.5">
          {BLOG_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={
                "rounded-full border px-4 py-2 text-xs font-medium transition-colors " +
                (active === c
                  ? "border-emerald-400 bg-emerald-400/15 text-emerald-200"
                  : "border-white/15 text-stone-300 hover:border-white/30 hover:text-stone-100")
              }
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <Reveal key={post.title}>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-emerald-900/40 p-7 transition-all hover:-translate-y-1 hover:border-emerald-400/50">
                <span className="mb-4 inline-block w-fit rounded-full bg-amber-500/15 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-amber-400">
                  {post.category}
                </span>
                <h3 className="mb-2.5 text-lg font-semibold leading-snug text-stone-50">{post.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-stone-300">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-stone-400">
                  <span>{post.readTime}</span>
                  <span className="font-medium text-emerald-300">Coming soon</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-10 text-center text-sm text-stone-400">No posts in this category yet — check back soon.</p>
        )}
      </section>

      <section className="border-t border-white/10 px-6 py-20 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-md font-serif text-2xl font-semibold text-stone-50 sm:text-3xl">
            Full posts are launching alongside our Lucknow rollout.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone-300">
            Follow along on Instagram for the first ones — and tell us what you'd want us to write about.
          </p>
        </Reveal>
        <Reveal className="mt-7 flex justify-center">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-emerald-950 transition-transform hover:-translate-y-0.5"
          >
            Follow @vasukii_officials →
          </a>
        </Reveal>
      </section>
    </>
  );
}
