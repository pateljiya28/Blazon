/** Decorative tick ring — an abstracted clock dial used as background texture. */
export function TickRing({ className = "" }: { className?: string }) {
  const ticks = [];
  for (let i = 0; i < 60; i++) {
    const major = i % 5 === 0;
    const angle = (i * Math.PI) / 30;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    const r1 = major ? 88 : 93;
    ticks.push(
      <line
        key={i}
        x1={100 + r1 * sin}
        y1={100 - r1 * cos}
        x2={100 + 98 * sin}
        y2={100 - 98 * cos}
        stroke="currentColor"
        strokeWidth={major ? 1.6 : 0.6}
      />,
    );
  }
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      {ticks}
      <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

/** Small diamond separator used in marquees and lists. */
export function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 10" className={className} aria-hidden="true">
      <rect x="2.2" y="2.2" width="5.6" height="5.6" fill="currentColor" transform="rotate(45 5 5)" />
    </svg>
  );
}
