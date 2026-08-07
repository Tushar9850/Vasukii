import React, { useEffect, useRef, useState } from "react";

export function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-widest text-emerald-200">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 ring-4 ring-amber-500/25"></span>
      {children}
    </span>
  );
}

export function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${inView ? "in-view" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function VineDivider({ flip }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const d = flip
    ? "M0,60 C 160,120 300,10 480,60 S 780,120 940,50 S 1060,10 1120,70"
    : "M0,70 C 180,10 260,130 440,70 S 760,10 900,70 S 1040,130 1120,60";

  return (
    <div ref={ref} className={`vine-divider mx-auto h-24 max-w-5xl px-8 sm:h-32 ${inView ? "in-view" : ""}`}>
      <svg viewBox="0 0 1120 140" preserveAspectRatio="none" className="h-full w-full overflow-visible">
        <path d={d} className="vine-path" />
      </svg>
    </div>
  );
}

export function AnimatedPlant() {
  const dustMotes = [
    { left: "20%", delay: "0.2s", duration: "6.5s", size: 5 },
    { left: "42%", delay: "1.6s", duration: "7.2s", size: 4 },
    { left: "62%", delay: "0.8s", duration: "6s", size: 6 },
    { left: "30%", delay: "2.8s", duration: "7.8s", size: 4 },
    { left: "54%", delay: "3.6s", duration: "6.8s", size: 5 },
    { left: "74%", delay: "2.1s", duration: "7.4s", size: 4 },
    { left: "84%", delay: "1.1s", duration: "7s", size: 3 },
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {dustMotes.map((s, i) => (
        <span
          key={i}
          className="vas-spore absolute bottom-16 rounded-full bg-emerald-300"
          style={{
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}

      <div
        className="absolute h-full w-full max-w-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(63,174,107,0.16) 0%, rgba(63,174,107,0) 68%)",
        }}
      ></div>

      <svg viewBox="0 0 300 320" className="relative z-10 h-full w-full max-w-[300px]">
        <ellipse cx="150" cy="284" rx="66" ry="10" fill="#0A1C13" opacity="0.5" />

        <path d="M96,208 L204,208 L190,282 C190,288 180,292 150,292 C120,292 110,288 110,282 Z" fill="#C4703C" />
        <path d="M96,208 L204,208 L198,224 L102,224 Z" fill="#DE9760" />
        <ellipse cx="150" cy="208" rx="54" ry="9" fill="#8A4A28" />
        <ellipse cx="150" cy="205" rx="46" ry="7" fill="#3B2A1E" />

        <g className="vas-plant-sway" style={{ transformOrigin: "150px 206px" }}>
          <path
            className="vas-stem"
            d="M150,206 C 146,170 158,148 148,116 C 140,90 156,72 150,42"
            fill="none"
            stroke="#3FAE6B"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <g transform="translate(147,168) rotate(-24)">
            <g className="vas-leaf-p" style={{ transformOrigin: "0px 0px", animationDelay: "0.9s, 1.7s" }}>
              <path d="M0,0 C16,-13 36,-9 40,6 C24,15 6,11 0,0 Z" fill="#8FD4A8" />
            </g>
          </g>
          <g transform="translate(150,132) rotate(20) scale(-1,1)">
            <g className="vas-leaf-p" style={{ transformOrigin: "0px 0px", animationDelay: "1.3s, 2.1s" }}>
              <path d="M0,0 C15,-12 34,-8 38,5 C23,14 6,10 0,0 Z" fill="#3FAE6B" />
            </g>
          </g>
          <g transform="translate(144,96) rotate(-26)">
            <g className="vas-leaf-p" style={{ transformOrigin: "0px 0px", animationDelay: "1.7s, 2.5s" }}>
              <path d="M0,0 C13,-11 29,-7 32,5 C20,13 5,9 0,0 Z" fill="#8FD4A8" />
            </g>
          </g>
          <g transform="translate(153,64) rotate(22) scale(-1,1)">
            <g className="vas-leaf-p" style={{ transformOrigin: "0px 0px", animationDelay: "2.1s, 2.9s" }}>
              <path d="M0,0 C12,-10 26,-6 29,5 C18,12 5,8 0,0 Z" fill="#3FAE6B" />
            </g>
          </g>

          <g transform="translate(150,40)">
            <g className="vas-flower" style={{ transformOrigin: "0px 0px" }}>
              <g transform="rotate(0)"><ellipse cx="0" cy="-9" rx="5" ry="9" fill="#F3EEE0" /></g>
              <g transform="rotate(72)"><ellipse cx="0" cy="-9" rx="5" ry="9" fill="#F3EEE0" /></g>
              <g transform="rotate(144)"><ellipse cx="0" cy="-9" rx="5" ry="9" fill="#F3EEE0" /></g>
              <g transform="rotate(216)"><ellipse cx="0" cy="-9" rx="5" ry="9" fill="#F3EEE0" /></g>
              <g transform="rotate(288)"><ellipse cx="0" cy="-9" rx="5" ry="9" fill="#F3EEE0" /></g>
              <circle className="vas-flower-core" cx="0" cy="0" r="6" fill="#E8891F" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
