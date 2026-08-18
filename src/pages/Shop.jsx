import React, { useState } from "react";
import { Eyebrow, Reveal } from "../components/UI.jsx";
import { PRODUCTS, SHOP_CATEGORIES } from "../data.js";
import { WHATSAPP } from "../components/Nav.jsx";
import SEO, { SITE_URL } from "../components/SEO.jsx";

const SHOP_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Vasukii Plant & Pot Shop",
  itemListElement: PRODUCTS.slice(0, 30).map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      description: p.blurb,
      category: p.category,
      ...(p.image ? { image: `${SITE_URL}${p.image}` } : {}),
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: (p.price || "").replace(/[₹,]/g, ""),
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

function ProductCard({ product }) {
  const message = encodeURIComponent(`Hi Vasukii! I'd like to order: ${product.name} (${product.price}).`);
  return (
    <Reveal>
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-emerald-900/40 transition-all hover:-translate-y-1 hover:border-emerald-400/50">
        
        {/* ================= EDIT LOCATION 1 ================= */}
        {/* Image container: Displays plant image if product.image exists, otherwise uses tint fallback */}
        <div className="relative h-48 w-full overflow-hidden" style={{ backgroundColor: product.tint + "22" }}>
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="h-16 w-16 rounded-full" style={{ backgroundColor: product.tint }}></div>
            </div>
          )}
        </div>
        {/* ==================================================== */}

        <div className="flex flex-1 flex-col p-6">
          <span className="mb-2 inline-block w-fit rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-stone-300">
            {product.category}
          </span>
          <h3 className="mb-1.5 text-lg font-semibold text-stone-50">{product.name}</h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-stone-300">{product.blurb}</p>
          <div className="flex items-center justify-between">
            <span className="font-serif text-lg font-semibold text-emerald-300">{product.price}</span>
            <a
              href={`${WHATSAPP}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-emerald-950 transition-transform hover:-translate-y-0.5"
            >
              Enquire
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Shop() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      <SEO
        title="Shop Plants & Pots Online"
        description="Fragrant, lucky & Vastu, medicinal, indoor air-purifying, flowering, fruit, and bonsai plants — plus pots and combos, delivered in Lucknow."
        path="/shop"
        jsonLd={SHOP_JSON_LD}
      />
      <header className="relative overflow-hidden px-6 pb-14 pt-20 sm:pt-24">
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow>Plants &amp; pots</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-2xl font-serif text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl">
            A small, honest catalog — growing as demand proves itself.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-stone-300">
            We're still in early access, so ordering happens over WhatsApp rather than a checkout
            page — every order is confirmed by a real person before it's sourced.
          </p>
        </div>
      </header>

      <section className="px-6 pb-8">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2.5">
          {SHOP_CATEGORIES.map((c) => (
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
          {visible.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-md font-serif text-2xl font-semibold text-stone-50 sm:text-3xl">
            Looking for something not listed here?
          </h2>
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone-300">
            Tell us what you're after — if there's enough interest, it's how new products end up
            in this catalog.
          </p>
        </Reveal>
        <Reveal className="mt-7 flex justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-emerald-950 transition-transform hover:-translate-y-0.5"
          >
            Request it on WhatsApp →
          </a>
        </Reveal>
      </section>
    </>
  );
}
