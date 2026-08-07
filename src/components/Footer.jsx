import React from "react";
import { Link } from "react-router-dom";
import { WHATSAPP, INSTAGRAM } from "./Nav.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-10">
        <div className="flex items-center gap-2.5">
          <img src="/vasukii-logo.png" alt="Vasukii logo" className="h-7 w-auto" />
          <span className="font-serif text-base font-semibold text-stone-50">Vasukii</span>
        </div>

        <div className="flex flex-wrap gap-12">
          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-widest text-stone-400">Reach us</h4>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mb-2 block text-sm text-stone-100 hover:text-emerald-300">
              Instagram
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block text-sm text-stone-100 hover:text-emerald-300">
              WhatsApp
            </a>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-widest text-stone-400">Explore</h4>
            <Link to="/story" className="mb-2 block text-sm text-stone-100 hover:text-emerald-300">Our story</Link>
            <Link to="/what-we-do" className="mb-2 block text-sm text-stone-100 hover:text-emerald-300">What we do</Link>
            <Link to="/shop" className="mb-2 block text-sm text-stone-100 hover:text-emerald-300">Shop</Link>
            <Link to="/plant-walls" className="mb-2 block text-sm text-stone-100 hover:text-emerald-300">Plant walls</Link>
            <Link to="/blog" className="block text-sm text-stone-100 hover:text-emerald-300">Blog</Link>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-widest text-stone-400">Based in</h4>
            <span className="block text-sm text-stone-100">Lucknow, India</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-between gap-2 border-t border-white/10 pt-6 text-xs text-stone-400">
        <span>© 2026 Vasukii. Rooted in Lucknow.</span>
        <span>Plants · Gardening services · Garden design</span>
      </div>
    </footer>
  );
}
