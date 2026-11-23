import React, { createContext, useContext, useEffect, useState } from "react";

const KEY = "vasukii-lang";
const D = {
  en: {
    shop: "Shop", walls: "Plant Walls", care: "Care tips", about: "About", message: "Message us",
    trust: "Lucknow delivery · ₹75, free above ₹399 · UPI or cash on delivery · Replacement if damaged (photo within 48 hrs)",
    whatsapp: "WhatsApp", basket: "Basket", search: "Search plants, pots, tools…", add: "Add to basket", addMore: "Add another",
    inBasket: "in basket", ask: "Ask", noPhoto: "Photo coming soon",
    sLow: "Low light flat", sPet: "Pet-safe", sGift: "Gifts", sPuja: "Tulsi & puja plants", sVastu: "Lucky & Vastu", sUnder: "Under ₹199",
    shopFor: "Shop by situation",
    yourBasket: "Your basket", empty: "Your basket is empty. Add a few plants to get started.",
    name: "Your name", phone: "Phone number (10 digits)", area: "Delivery area in Lucknow (e.g. Gomti Nagar)",
    landmark: "Landmark (optional)", gift: "Gift message (optional)", note: "Note (optional)",
    subtotal: "Subtotal", delivery: "Delivery (Lucknow)", total: "Total", free: "Free",
    addMoreFree: (n) => `Add ₹${n} more for free delivery`, freeDone: "You get free delivery",
    need: "Add your name, phone and area to continue", send: "Send order on WhatsApp →", clear: "Clear basket", remove: "Remove",
    noPay: "No payment now. We confirm availability and the final amount on WhatsApp first.",
  },
  hi: {
    shop: "दुकान", walls: "प्लांट वॉल", care: "देखभाल टिप्स", about: "हमारे बारे में", message: "WhatsApp करें",
    trust: "लखनऊ में डिलीवरी · ₹75, ₹399 से ऊपर मुफ़्त · UPI या कैश ऑन डिलीवरी · खराब पहुँचे तो बदलाव (48 घंटे में फ़ोटो भेजें)",
    whatsapp: "WhatsApp", basket: "बास्केट", search: "पौधे, गमले, औज़ार खोजें…", add: "बास्केट में डालें", addMore: "एक और जोड़ें",
    inBasket: "बास्केट में", ask: "पूछें", noPhoto: "फ़ोटो जल्द आएगी",
    sLow: "कम रोशनी वाला फ़्लैट", sPet: "पालतू के लिए सुरक्षित", sGift: "उपहार", sPuja: "तुलसी और पूजा के पौधे", sVastu: "लकी और वास्तु", sUnder: "₹199 से कम",
    shopFor: "ज़रूरत के हिसाब से चुनें",
    yourBasket: "आपकी बास्केट", empty: "बास्केट खाली है। शुरू करने के लिए कुछ पौधे जोड़ें।",
    name: "आपका नाम", phone: "फ़ोन नंबर (10 अंक)", area: "लखनऊ में डिलीवरी का इलाका (जैसे गोमती नगर)",
    landmark: "लैंडमार्क (वैकल्पिक)", gift: "उपहार संदेश (वैकल्पिक)", note: "नोट (वैकल्पिक)",
    subtotal: "कुल सामान", delivery: "डिलीवरी (लखनऊ)", total: "कुल", free: "मुफ़्त",
    addMoreFree: (n) => `मुफ़्त डिलीवरी के लिए ₹${n} और जोड़ें`, freeDone: "आपकी डिलीवरी मुफ़्त है",
    need: "आगे बढ़ने के लिए नाम, फ़ोन और इलाका भरें", send: "WhatsApp पर ऑर्डर भेजें →", clear: "बास्केट खाली करें", remove: "हटाएँ",
    noPay: "अभी भुगतान नहीं। उपलब्धता और अंतिम राशि हम पहले WhatsApp पर बताएँगे।",
  },
};

// Hindi / Hinglish search terms -> English words used in product names
const ALIASES = [
  ["तुलसी", "tulsi"], ["तुलसि", "tulsi"], ["मनी प्लांट", "money plant"], ["स्नेक प्लांट", "snake plant"], ["गुलाब", "rose"],
  ["मोगरा", "mogra"], ["चमेली", "jasmine"], ["एलोवेरा", "aloe"], ["एलो", "aloe"], ["नीम", "neem"], ["आम", "mango"],
  ["नींबू", "lemon"], ["गेंदा", "marigold"], ["गुड़हल", "hibiscus"], ["बोनसाई", "bonsai"], ["गमला", "pot"], ["गमले", "pot"],
  ["बीज", "seed"], ["मिट्टी", "soil"], ["खाद", "fertilizer"], ["तुलसी", "basil"], ["gainda", "marigold"], ["gamla", "pot"], ["gulab", "rose"],
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
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
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
