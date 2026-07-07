"use client";

import { useEffect, useId, useRef, type CSSProperties } from "react";
import {
  HOUR_HAND_PATH,
  MINUTE_HAND_PATH,
  NUMERAL_BARS,
  NUMERAL_STROKE,
  NUMERAL_Y_IN,
  NUMERAL_Y_OUT,
  TAIL_STEM_PATH,
} from "./clockGeometry";

type Variant = "heritage" | "minimal" | "midnight" | "skeleton";

const ROMANS = ["XII", "I", "II", "III", "IIII", "V", "VI", "VII", "VIII", "IX", "X", "XI"];

const PALETTES: Record<
  Exclude<Variant, "skeleton">,
  { dial: string; numeral: string; tick: string; hand: string; second: string; bezel: boolean }
> = {
  heritage: {
    dial: "#fcfaf4",
    numeral: "#1a2238",
    tick: "#97742f",
    hand: "#1a2238",
    second: "#b08d44",
    bezel: true,
  },
  minimal: {
    dial: "#fcfaf4",
    numeral: "#1a2238",
    tick: "#1a2238",
    hand: "#1a2238",
    second: "#b35c38",
    bezel: false,
  },
  midnight: {
    dial: "#1a2238",
    numeral: "#f7f2e7",
    tick: "#c9a45c",
    hand: "#f7f2e7",
    second: "#c9a45c",
    bezel: true,
  },
};

/* ── Skeleton variant: precision vector of Blazon's open-work indigo dial ──
   Every measurement (ring radii, rail/slot structure, numeral letterforms,
   hand profiles) is traced from the product photograph — see clockGeometry.ts. */

const METAL = "#2e3875";
const DISC = "#3a4280";

/**
 * A live analog clock rendered as pure SVG. Before hydration it shows the
 * classic 10:09:30; on mount the hands sync to the visitor's real time and
 * sweep via CSS animations with negative delays — no per-frame JavaScript.
 */
export default function ClockFace({
  variant = "heritage",
  showSeconds = true,
  decorative = false,
  className = "",
}: {
  variant?: Variant;
  showSeconds?: boolean;
  /** Hides the clock from assistive tech (for repeated/ornamental instances). */
  decorative?: boolean;
  className?: string;
}) {
  const id = useId();
  const handsRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const el = handsRef.current;
    if (!el) return;
    const now = new Date();
    const s = now.getSeconds() + now.getMilliseconds() / 1000;
    const m = now.getMinutes() * 60 + s;
    const h = (now.getHours() % 12) * 3600 + m;
    el.style.setProperty("--delay-s", `${-s}s`);
    el.style.setProperty("--delay-m", `${-m}s`);
    el.style.setProperty("--delay-h", `${-h}s`);
    el.classList.add("clock-running");
  }, []);

  const a11y = decorative
    ? ({ "aria-hidden": true } as const)
    : ({ role: "img", "aria-label": "Analog clock showing the current time" } as const);

  if (variant === "skeleton") {
    return (
      <svg viewBox="0 0 200 200" className={className} {...a11y}>
        <defs>
          <linearGradient id={`gd-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#d9c08a" />
            <stop offset="0.55" stopColor="#c2a05c" />
            <stop offset="1" stopColor="#9a7a38" />
          </linearGradient>
          {/* shiny counterweight: lit from the upper left */}
          <radialGradient id={`gc-${id}`} cx="0.35" cy="0.3" r="0.9">
            <stop offset="0" stopColor="#f0e0b4" />
            <stop offset="0.45" stopColor="#cfae6b" />
            <stop offset="1" stopColor="#8d6f2e" />
          </radialGradient>
        </defs>

        {/* Outer rim — 0.937R..1.0R */}
        <circle cx="100" cy="100" r="93.94" fill="none" stroke={METAL} strokeWidth="6.11" />

        {/* Cut-metal roman numerals, letterforms traced from the photo */}
        <g stroke={METAL} strokeWidth={NUMERAL_STROKE}>
          {NUMERAL_BARS.map((bars, hour) => (
            <g key={hour} transform={`rotate(${hour * 30} 100 100)`}>
              {bars.map(([xIn, xOut], j) => (
                <line key={j} x1={xIn} y1={NUMERAL_Y_IN} x2={xOut} y2={NUMERAL_Y_OUT} />
              ))}
            </g>
          ))}
        </g>

        {/* Chapter band: two rails with a long slot per segment, bridged at the numerals */}
        <circle cx="100" cy="100" r="57.09" fill="none" stroke={METAL} strokeWidth="2.04" />
        <circle cx="100" cy="100" r="61.65" fill="none" stroke={METAL} strokeWidth="2.13" />
        <circle
          cx="100"
          cy="100"
          r="59.39"
          fill="none"
          stroke={METAL}
          strokeWidth="6.66"
          strokeDasharray="15.545 15.545"
          strokeDashoffset="7.77"
        />

        {/* Crosshair frame and movement tab at 12 */}
        <line x1="100" y1="41.9" x2="100" y2="158.1" stroke={METAL} strokeWidth="2.99" />
        <line x1="41.9" y1="100" x2="158.1" y2="100" stroke={METAL} strokeWidth="2.99" />
        <rect x="97.2" y="43.4" width="5.6" height="5.5" fill={METAL} />

        {/* Branded centre disc */}
        <circle cx="100" cy="100" r="14.9" fill={DISC} />
        <text
          x="99.8"
          y="94.8"
          textAnchor="middle"
          fontSize="3.7"
          letterSpacing="0.5"
          fill="#ece9f2"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          BLAZON<tspan dy="-1.2" fontSize="1.8">®</tspan>
        </text>

        <g ref={handsRef}>
          {/* Static pre-hydration pose: the classic 10:09:30 */}
          <g className="clock-hand hand-hour" style={{ "--initial": "304.75deg" } as CSSProperties}>
            <path d={HOUR_HAND_PATH} fill={`url(#gd-${id})`} />
          </g>
          <g className="clock-hand hand-minute" style={{ "--initial": "57deg" } as CSSProperties}>
            <path d={MINUTE_HAND_PATH} fill={`url(#gd-${id})`} />
            {/* tapered tail with shiny counterweight disc */}
            <g transform="rotate(180 100 100)">
              <path d={TAIL_STEM_PATH} fill={`url(#gd-${id})`} />
            </g>
            <circle cx="100" cy="115.6" r="3.0" fill={`url(#gc-${id})`} />
          </g>
          {showSeconds && (
            <g className="clock-hand hand-second" style={{ "--initial": "180deg" } as CSSProperties}>
              <line
                x1="100"
                y1="108"
                x2="100"
                y2="37"
                stroke="#c2a05c"
                strokeWidth="0.9"
                strokeLinecap="round"
                opacity="0.95"
              />
            </g>
          )}
        </g>

        {/* Centre cap with screw glint */}
        <circle cx="100" cy="100" r="2.9" fill={`url(#gd-${id})`} />
        <circle cx="100" cy="100" r="0.55" fill="#f3e9cf" />
      </svg>
    );
  }

  const p = PALETTES[variant];
  const minimal = variant === "minimal";

  const ticks = [];
  for (let i = 0; i < 60; i++) {
    const major = i % 5 === 0;
    if (minimal && !major) continue;
    const angle = (i * Math.PI) / 30;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    const r1 = major ? 79 : 82;
    const r2 = 85;
    ticks.push(
      <line
        key={i}
        x1={100 + r1 * sin}
        y1={100 - r1 * cos}
        x2={100 + r2 * sin}
        y2={100 - r2 * cos}
        stroke={p.tick}
        strokeWidth={major ? 2 : 0.75}
        strokeLinecap="round"
        opacity={major ? 1 : 0.55}
      />,
    );
  }

  const numerals = minimal
    ? null
    : ROMANS.map((n, i) => {
        const angle = (i * Math.PI) / 6;
        return (
          <text
            key={n}
            x={100 + 66 * Math.sin(angle)}
            y={100 - 66 * Math.cos(angle)}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={n.length > 2 ? 11 : 13}
            fill={p.numeral}
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            {n}
          </text>
        );
      });

  return (
    <svg viewBox="0 0 200 200" className={className} {...a11y}>
      <defs>
        <linearGradient id={`bz-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d9bc7e" />
          <stop offset="0.5" stopColor="#b08d44" />
          <stop offset="1" stopColor="#7a5c23" />
        </linearGradient>
        <radialGradient id={`sh-${id}`} cx="0.5" cy="0.42" r="0.65">
          <stop offset="0.75" stopColor="#1a2238" stopOpacity="0" />
          <stop offset="1" stopColor="#1a2238" stopOpacity="0.08" />
        </radialGradient>
      </defs>

      {p.bezel ? (
        <>
          <circle cx="100" cy="100" r="99" fill={`url(#bz-${id})`} />
          <circle cx="100" cy="100" r="93" fill={p.dial} />
        </>
      ) : (
        <circle cx="100" cy="100" r="98" fill={p.dial} stroke={p.numeral} strokeWidth="1.5" />
      )}
      <circle cx="100" cy="100" r="93" fill={`url(#sh-${id})`} />

      {ticks}
      {numerals}

      {!minimal && (
        <text
          x="100"
          y="138"
          textAnchor="middle"
          fontSize="7.5"
          letterSpacing="2.5"
          fill={p.tick}
          style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
        >
          BLAZON
        </text>
      )}

      <g ref={handsRef}>
        {/* Static pre-hydration pose: the classic 10:09:30 */}
        <g className="clock-hand hand-hour" style={{ "--initial": "304.75deg" } as CSSProperties}>
          <line x1="100" y1="100" x2="100" y2="52" stroke={p.hand} strokeWidth="5.5" strokeLinecap="round" />
        </g>
        <g className="clock-hand hand-minute" style={{ "--initial": "57deg" } as CSSProperties}>
          <line x1="100" y1="100" x2="100" y2="32" stroke={p.hand} strokeWidth="3.5" strokeLinecap="round" />
        </g>
        {showSeconds && (
          <g className="clock-hand hand-second" style={{ "--initial": "180deg" } as CSSProperties}>
            <line x1="100" y1="112" x2="100" y2="26" stroke={p.second} strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="100" cy="112" r="3.5" fill={p.second} />
          </g>
        )}
      </g>

      <circle cx="100" cy="100" r="4.5" fill={p.hand} />
      <circle cx="100" cy="100" r="1.8" fill={p.second} />
    </svg>
  );
}
