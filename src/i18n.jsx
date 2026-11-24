import React, { createContext, useContext, useEffect, useState } from "react";

const KEY = "vasukii-lang";
const D = {
  en: {
    shop: "Shop", walls: "Plant Walls", care: "Care tips", about: "About", message: "Message us",
    search: "Search plants, pots, tools…", add: "Add to basket", addMore: "Add another", inBasket: "in basket", ask: "Ask",
    noPhoto: "Photo coming soon", shopFor: "Shop by situation",
    sLow: "Low light flat", sPet: "Pet-safe", sGift: "Gifts", sPuja: "Tulsi & puja plants", sVastu: "Lucky & Vastu", sUnder: "Under ₹199",
    yourBasket: "Your basket", empty: "Your basket is empty. Add a few plants to get started.",
    name: "Your name", area: "Delivery area in Lucknow (e.g. Gomti Nagar)", gift: "Gift message (optional)", note: "Note (optional)",
    subtotal: "Subtotal", delivery: "Delivery (Lucknow)", total: "Total", free: "Free",
    deliveryNote: (fee, free) => `Delivery ${fee}, free on orders of ${free}+. No payment now — we confirm availability and the final amount on WhatsApp first.`,
    send: "Send order on WhatsApp →", clear: "Clear basket", remove: "Remove",
  },
  hi: {
    shop: "दुकान", walls: "प्लांट वॉल", care: "देखभाल टिप्स", about: "हमारे बारे में", message: "WhatsApp करें",
    search: "पौधे, गमले, औज़ार खोजें…", add: "बास्केट में डालें", addMore: "एक और जोड़ें", inBasket: "बास्केट में", ask: "पूछें",
    noPhoto: "फ़ोटो जल्द आएगी", shopFor: "ज़रूरत के हिसाब से चुनें",
    sLow: "कम रोशनी वाला फ़्लैट", sPet: "पालतू के लिए सुरक्षित", sGift: "उपहार", sPuja: "तुलसी और पूजा के पौधे", sVastu: "लकी और वास्तु", sUnder: "₹199 से कम",
    yourBasket: "आपकी बास्केट", empty: "बास्केट खाली है। शुरू करने के लिए कुछ पौधे जोड़ें।",
    name: "आपका नाम", area: "लखनऊ में डिलीवरी का इलाका (जैसे गोमती नगर)", gift: "उपहार संदेश (वैकल्पिक)", note: "नोट (वैकल्पिक)",
    subtotal: "कुल सामान", delivery: "डिलीवरी (लखनऊ)", total: "कुल", free: "मुफ़्त",
    deliveryNote: (fee, free) => `डिलीवरी ${fee}, ${free} या उससे ऊपर के ऑर्डर पर मुफ़्त। अभी भुगतान नहीं — उपलब्धता और अंतिम राशि हम पहले WhatsApp पर बताएँगे।`,
    send: "WhatsApp पर ऑर्डर भेजें →", clear: "बास्केट खाली करें", remove: "हटाएँ",
  },
};

// Hindi / Hinglish search terms -> English words used in product names
const ALIASES = [
  ["तुलसी", "tulsi basil"], ["मनी प्लांट", "money plant"], ["स्नेक प्लांट", "snake plant"], ["गुलाब", "rose"], ["gulab", "rose"],
  ["मोगरा", "mogra"], ["चमेली", "jasmine"], ["एलोवेरा", "aloe"], ["नीम", "neem"], ["आम", "mango"], ["नींबू", "lemon"],
  ["गेंदा", "marigold"], ["gainda", "marigold"], ["गुड़हल", "hibiscus"], ["बोनसाई", "bonsai"], ["गमला", "pot"], ["गमले", "pot"], ["gamla", "pot"],
  ["बीज", "seed"], ["मिट्टी", "soil"], ["खाद", "fertilizer"],
];
export const expandQuery = (q) => {
  let out = q.toLowerCase();
  ALIASES.forEach(([h, e]) => { if (out.includes(h)) out += " " + e; });
  return out;
};

const Ctx = createContext({ lang: "en", setLang: () => {}, t: (k) => k });
export const useT = () => useContext(Ctx);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem(KEY) === "hi" ? "hi" : "en"; } catch { return "en"; }
  });
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem(KEY, lang); } catch { /* ignore */ }
  }, [lang]);
  const t = (k, ...a) => { const v = D[lang][k] ?? D.en[k] ?? k; return typeof v === "function" ? v(...a) : v; };
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function LangToggle() {
  const { lang, setLang } = useT();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "hi" : "en")}
      className="rounded-full border border-stone-900/20 px-3 py-1.5 text-xs font-medium text-stone-200"
      aria-label="Change language"
    >
      {lang === "en" ? "हिंदी" : "EN"}
    </button>
  );
}
