import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const WHATSAPP = "https://wa.me/917905611170";
const INSTAGRAM = "https://instagram.com/vasukii_officials";

const ITEMS = [
  { to: "/", label: "Home" },
  { to: "/story", label: "Our Story" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/shop", label: "Shop" },
  { to: "/plant-walls", label: "Plant Walls" },
  { to: "/blog", label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-emerald-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/vasukii-logo.png" alt="Vasukii logo" className="h-8 w-auto" />
          <span className="font-serif text-lg font-semibold tracking-tight text-stone-50">Vasukii</span>
        </Link>

        <div className="hidden gap-7 text-sm text-stone-300 lg:flex">
          {ITEMS.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.to === "/"}
              className={({ isActive }) =>
                "transition-colors hover:text-stone-50 " + (isActive ? "text-stone-50" : "text-stone-300")
              }
            >
              {it.label}
            </NavLink>
          ))}
        </div>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-emerald-950 lg:inline-block"
        >
          Message us
        </a>

        <button onClick={() => setOpen(!open)} className="text-stone-200 lg:hidden" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6l-12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-white/10 bg-emerald-950 px-6 py-4 lg:hidden">
          {ITEMS.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.to === "/"}
              onClick={() => setOpen(false)}
              className="py-2 text-left text-sm text-stone-200"
            >
              {it.label}
            </NavLink>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-emerald-500 px-4 py-2 text-center text-xs font-semibold text-emerald-950"
          >
            Message us
          </a>
        </div>
      )}
    </nav>
  );
}

export { WHATSAPP, INSTAGRAM };
