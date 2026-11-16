import React, { useEffect, useMemo, useState } from "react";
import { Eyebrow, Reveal } from "../components/UI.jsx";
import { PRODUCTS, SHOP_CATEGORIES, SHOP_TRUST, SHOP_INFO, SHOP_FAQ } from "../data.js";
import { WHATSAPP } from "../components/Nav.jsx";
import SEO, { SITE_URL } from "../components/SEO.jsx";

const priceNum = (p) => Number((p || "").replace(/[^\d]/g, "")) || 0;
const inr = (n) => "₹" + n.toLocaleString("en-IN");
const FREE_DELIVERY_ABOVE = 399;
const DELIVERY_FEE = 75;
const CART_KEY = "vasukii-cart-v1";

const SHOP_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Vasukii Plant & Pot Shop",
  itemListElement: PRODUCTS.map((p, i) => ({
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
        price: String(priceNum(p.price)),
        availability: "https://schema.org/InStock",
        areaServed: "Lucknow",
      },
    },
  })),
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SHOP_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function Chip({ children, tone = "default" }) {
  const tones = {
    default: "bg-white/5 text-stone-300",
    good: "bg-emerald-400/15 text-emerald-200",
    warn: "bg-amber-500/15 text-amber-300",
  };
  return (
    <span className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}

function ProductCard({ product, onAdd, qty }) {
  const message = encodeURIComponent(`Hi Vasukii! I'd like to know more about: ${product.name} (${product.price}).`);
  return (
    <Reveal>
      <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-emerald-900/40 transition-all hover:-translate-y-1 hover:border-emerald-400/50">
        <div className="relative h-48 w-full overflow-hidden" style={{ backgroundColor: product.tint + "22" }}>
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="h-16 w-16 rounded-full" style={{ backgroundColor: product.tint }}></div>
            </div>
          )}
          {product.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-[11px] font-semibold text-emerald-950">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className="mb-2 inline-block w-fit rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-stone-300">
            {product.category}
          </span>
          <h3 className="mb-1.5 text-lg font-semibold text-stone-50">{product.name}</h3>
          <p className="mb-3 text-sm leading-relaxed text-stone-300">{product.blurb}</p>

          {(product.light || product.water || product.size || product.drainage || product.level) && (
            <div className="mb-4 flex flex-wrap gap-1.5">
              {product.level && <Chip>{product.level}</Chip>}
              {product.light && <Chip>☀ {product.light}</Chip>}
              {product.water && <Chip>💧 {product.water}</Chip>}
              {product.size && <Chip>Size: {product.size}</Chip>}
              {product.drainage && <Chip>{product.drainage}</Chip>}
              {product.petSafe === true && <Chip tone="good">Pet-safe</Chip>}
              {product.petSafe === false && <Chip tone="warn">Toxic to pets</Chip>}
            </div>
          )}

          <div className="mt-auto">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-serif text-lg font-semibold text-emerald-300">{product.price}</span>
              <span className="text-[11px] text-emerald-300/80">● In stock · Lucknow</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onAdd(product)}
                className="flex-1 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-emerald-950 transition-transform hover:-translate-y-0.5"
              >
                {qty > 0 ? `Add another (${qty} in basket)` : "Add to basket"}
              </button>
              <a
                href={`${WHATSAPP}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-stone-200 transition-colors hover:border-white/40"
              >
                Ask
              </a>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Basket({ items, onClose, onQty, onRemove, onClear }) {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [note, setNote] = useState("");

  const subtotal = items.reduce((t, i) => t + priceNum(i.price) * i.qty, 0);
  const deliveryFee = subtotal >= FREE_DELIVERY_ABOVE || subtotal === 0 ? 0 : DELIVERY_FEE;
  const delivery = deliveryFee === 0 ? "Free" : inr(deliveryFee);
  const total = subtotal + deliveryFee;

  const orderText = encodeURIComponent(
    `Hi Vasukii! I'd like to place an order:\n\n` +
      items.map((i) => `• ${i.name} × ${i.qty} — ${inr(priceNum(i.price) * i.qty)}`).join("\n") +
      `\n\nSubtotal: ${inr(subtotal)}\nDelivery: ${delivery}\nTotal: ${inr(total)}` +
      `\n\nName: ${name || "—"}\nDelivery area (Lucknow): ${area || "—"}` +
      (note ? `\nNote: ${note}` : "")
  );

  const input =
    "w-full rounded-lg border border-white/15 bg-emerald-950/60 px-3 py-2 text-sm text-stone-50 placeholder-stone-500 focus:border-emerald-400 focus:outline-none";

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60" onClick={onClose}>
      <aside
        className="flex h-full w-full max-w-md flex-col border-l border-white/10 bg-emerald-950 p-6"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Your basket"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-semibold text-stone-50">Your basket</h2>
          <button onClick={onClose} aria-label="Close basket" className="text-2xl text-stone-300 hover:text-stone-50">×</button>
        </div>

        {items.length === 0 ? (
          <p className="text-sm text-stone-300">Your basket is empty. Add a few plants to get started.</p>
        ) : (
          <>
            <ul className="-mr-2 flex-1 space-y-3 overflow-y-auto pr-2">
              {items.map((i) => (
                <li key={i.name} className="rounded-xl border border-white/10 bg-emerald-900/40 p-3">
                  <div className="flex justify-between gap-3">
                    <p className="text-sm font-medium text-stone-50">{i.name}</p>
                    <span className="text-sm text-emerald-300">{inr(priceNum(i.price) * i.qty)}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button onClick={() => onQty(i.name, i.qty - 1)} className="h-7 w-7 rounded-full border border-white/20 text-stone-100" aria-label="Decrease quantity">−</button>
                      <span className="w-5 text-center text-sm text-stone-50">{i.qty}</span>
                      <button onClick={() => onQty(i.name, i.qty + 1)} className="h-7 w-7 rounded-full border border-white/20 text-stone-100" aria-label="Increase quantity">+</button>
                    </div>
                    <button onClick={() => onRemove(i.name)} className="text-xs text-stone-400 hover:text-amber-300">Remove</button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
              <input className={input} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              <input className={input} placeholder="Delivery area in Lucknow (e.g. Gomti Nagar)" value={area} onChange={(e) => setArea(e.target.value)} />
              <input className={input} placeholder="Note (optional)" value={note} onChange={(e) => setNote(e.target.value)} />
            </div>

            <div className="mt-4 space-y-1 text-sm">
              <div className="flex justify-between text-stone-300"><span>Subtotal</span><span>{inr(subtotal)}</span></div>
              <div className="flex justify-between text-stone-300"><span>Delivery (Lucknow)</span><span>{delivery}</span></div>
              <div className="flex justify-between font-semibold text-stone-50"><span>Total</span><span>{inr(total)}</span></div>
              <p className="pt-1 text-xs text-stone-400">
                Delivery {inr(DELIVERY_FEE)}, free on orders of {inr(FREE_DELIVERY_ABOVE)}+. No payment now — we confirm availability and the final amount on WhatsApp first.
              </p>
            </div>

            <a
              href={`${WHATSAPP}?text=${orderText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block rounded-full bg-emerald-500 px-6 py-3.5 text-center text-sm font-semibold text-emerald-950"
            >
              Send order on WhatsApp →
            </a>
            <button onClick={onClear} className="mt-2 text-xs text-stone-400 hover:text-stone-200">Clear basket</button>
          </>
        )}
      </aside>
    </div>
  );
}

export default function Shop() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState("any");
  const [petSafeOnly, setPetSafeOnly] = useState(false);
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
      return [];
    }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {
      /* storage unavailable — basket just won't persist */
    }
  }, [cart]);

  const addToCart = (p) => {
    setCart((c) => {
      const found = c.find((i) => i.name === p.name);
      return found
        ? c.map((i) => (i.name === p.name ? { ...i, qty: i.qty + 1 } : i))
        : [...c, { name: p.name, price: p.price, qty: 1 }];
    });
    setOpen(true);
  };
  const setQty = (name, qty) =>
    setCart((c) => (qty <= 0 ? c.filter((i) => i.name !== name) : c.map((i) => (i.name === name ? { ...i, qty } : i))));
  const removeItem = (name) => setCart((c) => c.filter((i) => i.name !== name));

  const count = cart.reduce((t, i) => t + i.qty, 0);
  const qtyOf = (name) => cart.find((i) => i.name === name)?.qty || 0;

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = PRODUCTS.filter((p) => {
      if (active !== "All" && p.category !== active) return false;
      if (q && !(`${p.name} ${p.blurb} ${p.category}`.toLowerCase().includes(q))) return false;
      if (maxPrice !== "any" && priceNum(p.price) > Number(maxPrice)) return false;
      if (petSafeOnly && p.petSafe !== true) return false;
      return true;
    });
    if (sort === "low") list = [...list].sort((a, b) => priceNum(a.price) - priceNum(b.price));
    if (sort === "high") list = [...list].sort((a, b) => priceNum(b.price) - priceNum(a.price));
    if (sort === "az") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [active, query, sort, maxPrice, petSafeOnly]);

  const select =
    "rounded-full border border-white/15 bg-emerald-950 px-4 py-2 text-xs font-medium text-stone-200 focus:border-emerald-400 focus:outline-none";

  return (
    <>
      <SEO
        title="Shop Plants, Pots, Soil & Garden Tools Online"
        description="Fragrant, lucky & Vastu, medicinal, indoor air-purifying, flowering, fruit and bonsai plants — plus pots, soil, fertilizers, seeds, tools and combos, delivered in Lucknow."
        path="/shop"
        jsonLd={[SHOP_JSON_LD, FAQ_JSON_LD]}
      />

      <header className="relative overflow-hidden px-6 pb-10 pt-20 sm:pt-24">
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow>Plants &amp; pots</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-2xl font-serif text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl">
            A small, honest catalog — growing as demand proves itself.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-stone-300">
            Fill your basket and send it to us on WhatsApp — there's no online payment yet. Every
            order is confirmed by a real person before it's sourced.
          </p>
        </div>
      </header>

      <section className="px-6 pb-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 lg:grid-cols-4">
          {SHOP_TRUST.map((t) => (
            <div key={t.title} className="rounded-xl border border-white/10 bg-emerald-900/30 p-4">
              <p className="text-sm font-semibold text-emerald-200">{t.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-stone-300">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-4">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search plants, pots, tools…"
            aria-label="Search the shop"
            className="w-full max-w-xs rounded-full border border-white/15 bg-emerald-950 px-4 py-2 text-sm text-stone-50 placeholder-stone-500 focus:border-emerald-400 focus:outline-none"
          />
          <select value={sort} onChange={(e) => setSort(e.target.value)} className={select} aria-label="Sort products">
            <option value="featured">Sort: Featured</option>
            <option value="low">Price: Low to high</option>
            <option value="high">Price: High to low</option>
            <option value="az">Name: A to Z</option>
          </select>
          <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className={select} aria-label="Maximum price">
            <option value="any">Any price</option>
            <option value="200">Under ₹200</option>
            <option value="500">Under ₹500</option>
            <option value="1000">Under ₹1,000</option>
          </select>
          <label className="flex cursor-pointer items-center gap-2 text-xs text-stone-300">
            <input type="checkbox" checked={petSafeOnly} onChange={(e) => setPetSafeOnly(e.target.checked)} className="accent-emerald-500" />
            Pet-safe only
          </label>
        </div>
      </section>

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
        <p className="mt-4 text-center text-xs text-stone-400">
          Showing {visible.length} of {PRODUCTS.length} products
        </p>
      </section>

      <section className="px-6 pb-24">
        {visible.length === 0 ? (
          <div className="mx-auto max-w-md text-center">
            <p className="text-stone-300">No products match your filters.</p>
            <button
              onClick={() => { setActive("All"); setQuery(""); setMaxPrice("any"); setPetSafeOnly(false); }}
              className="mt-4 rounded-full border border-white/20 px-5 py-2 text-xs font-semibold text-stone-200"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((product) => (
              <ProductCard key={product.name} product={product} onAdd={addToCart} qty={qtyOf(product.name)} />
            ))}
          </div>
        )}
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {SHOP_INFO.map((i) => (
            <Reveal key={i.title}>
              <div className="h-full rounded-2xl border border-white/10 bg-emerald-900/30 p-6">
                <h3 className="font-serif text-lg font-semibold text-stone-50">{i.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-300">{i.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center font-serif text-2xl font-semibold text-stone-50 sm:text-3xl">
            Shop questions, answered
          </h2>
          <div className="space-y-3">
            {SHOP_FAQ.map((f) => (
              <details key={f.q} className="group rounded-xl border border-white/10 bg-emerald-900/30 p-4">
                <summary className="cursor-pointer text-sm font-medium text-stone-50">{f.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-stone-300">{f.a}</p>
              </details>
            ))}
          </div>
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

      {/* floating basket button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-5 z-40 flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-emerald-950 shadow-lg"
        aria-label="Open basket"
      >
        Basket
        <span className="rounded-full bg-emerald-950 px-2 py-0.5 text-xs text-amber-300">{count}</span>
      </button>

      {open && (
        <Basket items={cart} onClose={() => setOpen(false)} onQty={setQty} onRemove={removeItem} onClear={() => setCart([])} />
      )}
    </>
  );
}
