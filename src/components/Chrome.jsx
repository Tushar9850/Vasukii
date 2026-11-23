import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useT } from "../i18n.jsx";
import { WHATSAPP } from "./Nav.jsx";

export function TrustStrip() {
  const { t } = useT();
  return (
    <div className="bg-emerald-900 px-4 py-1.5 text-center text-[11px] leading-snug text-stone-200 sm:text-xs">{t("trust")}</div>
  );
}

const readCount = () => {
  try { return (JSON.parse(localStorage.getItem("vasukii-cart-v1")) || []).reduce((s, i) => s + i.qty, 0); } catch { return 0; }
};

export function BottomBar() {
  const { t } = useT();
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [count, setCount] = useState(readCount);
  useEffect(() => {
    const on = (e) => setCount(e.detail);
    window.addEventListener("vasukii:cart-count", on);
    return () => window.removeEventListener("vasukii:cart-count", on);
  }, []);
  const openBasket = () => (pathname === "/shop" ? window.dispatchEvent(new Event("vasukii:open-basket")) : nav("/shop?basket=1"));
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-stone-900/10 bg-emerald-950 p-2.5 md:hidden"
         style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}>
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
         className="flex min-h-12 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">{t("whatsapp")}</a>
      <button onClick={openBasket}
         className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-emerald-600 text-sm font-semibold text-emerald-700">
        {t("basket")} <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-xs text-white">{count}</span>
      </button>
    </div>
  );
}
