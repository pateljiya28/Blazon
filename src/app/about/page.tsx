import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { TickRing } from "@/components/Ornaments";
import aboutHero from "@/images/lifestyle/about-hero.jpg";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "Blazon Clocks began in 1987 at a single workbench in Jaipur's Johari Bazaar. Today our wall clocks keep quiet time in 40,000 Indian homes.",
};

const TIMELINE = [
  {
    year: "1987",
    title: "A workbench in Johari Bazaar",
    text: "Harilal Saini, a third-generation brass worker, repairs a broken English station clock and decides India deserves better than imported time. Blazon is born with one lathe and two apprentices.",
  },
  {
    year: "1994",
    title: "The first silent movement",
    text: "After seven years of ticking, we fit our first sweep movement. Customers write letters about finally sleeping through the night. We never make a ticking clock again.",
  },
  {
    year: "2008",
    title: "The atelier grows",
    text: "Twelve artisans, one rule: no piece leaves without 72 hours on the test wall. The Jaipur workshop moves to its present home near Hawa Mahal.",
  },
  {
    year: "2019",
    title: "Direct to your wall",
    text: "We stop wholesaling and begin shipping straight from the atelier to homes across India — better prices, and every clock still touched by the same hands.",
  },
  {
    year: "2026",
    title: "Forty thousand walls",
    text: "From Srinagar to Kanyakumari, Blazon clocks keep time in 40,000 homes. The lathe from 1987 still runs every morning.",
  },
];

const PROCESS = [
  ["Cast", "Brass bezels are cast and rested for a fortnight before they're worked."],
  ["Turn", "Each ring is turned on the lathe until it sits flush to a tenth of a millimetre."],
  ["Finish", "Dials are enamelled, numerals set by hand, brass polished until it answers light."],
  ["Tune", "Movements are fitted, weighted and watched on the test wall for 72 hours."],
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="grain relative overflow-hidden border-b border-ivory-200 bg-ivory-100/60">
        <TickRing className="pointer-events-none absolute -right-40 -bottom-56 w-[34rem] text-brass-600 opacity-[0.07]" />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] text-ink-900 sm:text-6xl">
              Nineteen eighty-seven. One workbench, two apprentices, and a
              <em className="font-light text-brass-600"> stubborn idea</em>.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500">
              That a wall clock should be silent, honest about its materials,
              and beautiful enough to be the last thing you switch off your
              lamp to look at.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Image + intro ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative order-last lg:order-first">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={aboutHero}
                alt="A Blazon clock hanging in a styled interior"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -top-5 -right-5 -z-10 h-full w-full rounded-sm border border-brass-400/50"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">Why clocks</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 sm:text-5xl">
                Everything else on your wall stands still
              </h2>
              <div className="mt-7 max-w-lg space-y-5 leading-relaxed text-ink-500">
                <p>
                  A painting doesn&apos;t change. A photograph is the past. A
                  clock is the only thing on your wall that is alive — moving,
                  faithful, present. We think that deserves better than plastic.
                </p>
                <p>
                  So we build clocks the way Jaipur builds jewellery: cast
                  brass, seasoned wood, enamel dials, and the patience to finish
                  what no one will ever inspect. The back of a Blazon is as
                  tidy as the front. You&apos;ll know, even if no one else does.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────── */}
      <section className="border-y border-ivory-200 bg-ivory-100/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal>
            <p className="eyebrow">Since 1987</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 sm:text-5xl">
              Five chapters, one workshop
            </h2>
          </Reveal>
          <ol className="mt-14 space-y-0">
            {TIMELINE.map(({ year, title, text }, i) => (
              <li key={year}>
                <Reveal delay={i * 60}>
                  <div className="grid gap-3 border-l border-brass-400/40 py-7 pl-8 sm:grid-cols-[7rem_1fr] sm:gap-10">
                    <p className="font-display text-3xl text-brass-600">{year}</p>
                    <div>
                      <h3 className="font-bold tracking-wide text-ink-900">{title}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-500">{text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">The making</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 sm:text-5xl">
            Cast. Turn. Finish. Tune.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map(([title, text], i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="h-full rounded-sm border border-ivory-200 bg-ivory-50 p-7">
                <p className="font-display text-4xl text-brass-600">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 font-display text-2xl text-ink-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="border-t border-ivory-200">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8">
          <Reveal>
            <h2 className="mx-auto max-w-xl font-display text-3xl leading-tight text-ink-900 sm:text-4xl">
              Thirty-nine years in, we&apos;re still making time
              <em className="font-light text-brass-600"> quietly</em>.
            </h2>
            <Link
              href="/shop"
              className="mt-9 inline-block rounded-full bg-ink-900 px-8 py-3.5 text-sm font-bold tracking-[0.16em] text-ivory-50 uppercase transition-colors hover:bg-brass-600"
            >
              See what we make
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
