import Image from "next/image";
import Link from "next/link";
import ClockFace from "@/components/ClockFace";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { Diamond, TickRing } from "@/components/Ornaments";
import { BESTSELLERS, COLLECTIONS, PRODUCTS } from "@/lib/products";
import type { StaticImageData } from "next/image";
import collectionHeritage from "@/images/lifestyle/collection-heritage.jpg";
import collectionMinimal from "@/images/lifestyle/collection-minimal.jpg";
import collectionVintage from "@/images/lifestyle/collection-vintage.jpg";
import collectionStudio from "@/images/lifestyle/collection-studio.jpg";
import craftImage from "@/images/lifestyle/craft.jpg";

const MARQUEE_ITEMS = [
  "Silent sweep movement",
  "Hand-finished in Vadodara",
  "Free shipping across India",
  "2-year warranty",
  "Since 2008",
];

const COLLECTION_CARDS: { slug: string; image: StaticImageData; span: string }[] = [
  { slug: "heritage", image: collectionHeritage, span: "md:col-span-7" },
  { slug: "minimal", image: collectionMinimal, span: "md:col-span-5" },
  { slug: "vintage", image: collectionVintage, span: "md:col-span-5" },
  { slug: "studio", image: collectionStudio, span: "md:col-span-7" },
];

const TESTIMONIALS = [
  {
    quote:
      "The first thing guests notice. The second thing they ask is where it's from.",
    name: "Meera Krishnan",
    city: "Bengaluru",
  },
  {
    quote:
      "I bought one for the living room and came back for three more. The silence is real — you forget it's a machine.",
    name: "Arjun Mehta",
    city: "Mumbai",
  },
  {
    quote:
      "It arrived packed like jewellery. Five years from now I expect it to look even better than it does today.",
    name: "Sahana Rao",
    city: "Hyderabad",
  },
];

function Marquee() {
  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-6 text-xs font-bold tracking-[0.28em] whitespace-nowrap text-ink-700 uppercase">
            {item}
          </span>
          <Diamond className="h-2 w-2 text-brass-500" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee-strip overflow-hidden border-y border-ivory-200 bg-ivory-100 py-3.5">
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden sm:min-h-screen">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text legibility */}
        <div aria-hidden="true" className="absolute inset-0 bg-ink-950/55" />

        {/* Soft blur-mist at the hero's bottom edge so the video melts into
            the marquee below — a pale ivory fog with a progressive blur that
            dissolves toward the centre. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ivory-100/60 via-ivory-100/20 to-transparent backdrop-blur-lg"
          style={{
            maskImage: "linear-gradient(to top, black 25%, transparent)",
            WebkitMaskImage: "linear-gradient(to top, black 25%, transparent)",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 py-28 text-center sm:px-8 lg:py-36">
          <div className="rise">
            <p className="text-[11px] font-bold tracking-[0.32em] text-brass-300 uppercase">
              Since 2008 · Vadodara, India
            </p>
          </div>
          <div className="rise" style={{ animationDelay: "100ms" }}>
            <h1 className="mt-6 font-display text-[2.9rem] leading-[1.04] font-medium text-ivory-50 sm:text-6xl lg:text-7xl">
              Crafting{" "}
              <em className="font-light text-brass-300">Timeless</em>
              <br />
              Elegance
            </h1>
          </div>
          <div className="rise" style={{ animationDelay: "200ms" }}>
            <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-ivory-200/80 sm:text-lg">
              Premium designer wooden wall clocks manufactured with Italian
              Membrane process techniques for better finishing and long life.
            </p>
          </div>
          <div className="rise" style={{ animationDelay: "300ms" }}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/shop"
                className="rounded-full bg-ivory-50 px-8 py-3.5 text-sm font-bold tracking-[0.16em] text-ink-900 uppercase transition-colors hover:bg-brass-300"
              >
                Explore Collection
              </Link>
              <Link
                href="/contact"
                className="text-sm font-bold tracking-[0.16em] text-ivory-100 uppercase underline decoration-brass-400 decoration-2 underline-offset-8 transition-colors hover:text-brass-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ── Collections ──────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">The collections</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
                Four moods of time
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-sm font-bold tracking-[0.16em] text-brass-700 uppercase underline decoration-2 underline-offset-8 hover:text-brass-600"
            >
              View all {PRODUCTS.length} clocks →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-12">
          {COLLECTION_CARDS.map(({ slug, image, span }, i) => {
            const collection = COLLECTIONS.find((c) => c.slug === slug)!;
            const count = PRODUCTS.filter((p) => p.collection === slug).length;
            return (
              <Reveal key={slug} delay={i * 80} className={span}>
                <Link
                  href={`/shop?collection=${slug}`}
                  className="group relative block h-72 overflow-hidden rounded-sm sm:h-80"
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/10 to-transparent" />
                  <div className="absolute right-6 bottom-6 left-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.26em] text-brass-300 uppercase">
                        {count} pieces
                      </p>
                      <h3 className="mt-1.5 font-display text-2xl text-ivory-50 sm:text-3xl">
                        {collection.name}
                      </h3>
                    </div>
                    <span className="pb-1 text-2xl text-ivory-50 transition-transform duration-500 group-hover:translate-x-1.5">
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── Bestsellers ──────────────────────────────────────── */}
      <section className="border-y border-ivory-200 bg-ivory-100/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal>
            <p className="eyebrow">Bestsellers</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
              Loved by ten thousand walls
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
            {BESTSELLERS.map((product, i) => (
              <Reveal key={product.slug} delay={i * 80}>
                <ProductCard product={product} sizes="(max-width: 1024px) 50vw, 25vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Craft ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={craftImage}
                alt="A Blazon wall clock styled in a warm Indian home"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 -z-10 h-full w-full rounded-sm border border-brass-400/50"
            />
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">The Blazon craft</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
                Thirty-nine years of making time quiet
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-ink-500">
                Every Blazon clock leaves Jaipur the same way: cast, turned,
                finished and tuned by hands that have done it for decades. No
                ticking — our sweep movements glide. No shortcuts — brass is
                polished until it answers light.
              </p>
            </Reveal>

            <div className="mt-10 space-y-7">
              {[
                {
                  n: "01",
                  title: "Silent sweep movement",
                  text: "German-engineered quartz that glides instead of ticks. Bedrooms stay silent.",
                },
                {
                  n: "02",
                  title: "Honest materials",
                  text: "Solid brass, seasoned hardwoods and enamel dials that age with grace.",
                },
                {
                  n: "03",
                  title: "Tuned and tested",
                  text: "Every piece runs for 72 hours in the atelier before it's allowed to leave.",
                },
              ].map(({ n, title, text }, i) => (
                <Reveal key={n} delay={i * 90}>
                  <div className="flex gap-6">
                    <span className="font-display text-2xl text-brass-600">{n}</span>
                    <div>
                      <h3 className="font-bold tracking-wide text-ink-900">{title}</h3>
                      <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-500">{text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={250}>
              <div className="mt-11 flex flex-wrap gap-x-12 gap-y-6 border-t border-ivory-200 pt-8">
                {[
                  ["1987", "Founded in Jaipur"],
                  ["40,000+", "Homes across India"],
                  ["2 years", "Warranty, no fine print"],
                ].map(([stat, label]) => (
                  <div key={label}>
                    <p className="font-display text-3xl text-ink-900">{stat}</p>
                    <p className="mt-1 text-xs font-bold tracking-[0.18em] text-ink-500 uppercase">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="border-t border-ivory-200 bg-ivory-100/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal>
            <p className="eyebrow">From our walls</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
              What forty thousand homes say
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map(({ quote, name, city }, i) => (
              <Reveal key={name} delay={i * 90}>
                <figure className="flex h-full flex-col justify-between rounded-sm border border-ivory-200 bg-ivory-50 p-8">
                  <blockquote className="font-display text-xl leading-relaxed text-ink-700 italic">
                    “{quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3">
                    <Diamond className="h-2 w-2 text-brass-500" />
                    <span className="text-sm font-bold text-ink-900">{name}</span>
                    <span className="text-sm text-ink-500">{city}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="grain relative overflow-hidden bg-ink-950">
        <TickRing className="pointer-events-none absolute -bottom-52 -left-52 w-[36rem] text-brass-400 opacity-[0.1]" />
        <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-24 text-center sm:px-8 lg:py-32">
          <Reveal>
            <div className="mx-auto w-24">
              <ClockFace variant="midnight" showSeconds={false} decorative className="h-auto w-full" />
            </div>
            <h2 className="mx-auto mt-9 max-w-2xl font-display text-4xl leading-tight text-ivory-100 sm:text-5xl">
              Find the clock your wall is{" "}
              <em className="font-light text-brass-300">waiting</em> for.
            </h2>
            <p className="mx-auto mt-5 max-w-md leading-relaxed text-ivory-200/60">
              Tell us about your room and we&apos;ll help you choose — or browse
              the full collection and trust your eye.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/shop"
                className="rounded-full bg-brass-500 px-8 py-3.5 text-sm font-bold tracking-[0.16em] text-ink-950 uppercase transition-colors hover:bg-brass-400"
              >
                Browse the collection
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-ivory-200/40 px-8 py-3.5 text-sm font-bold tracking-[0.16em] text-ivory-100 uppercase transition-colors hover:border-brass-400 hover:text-brass-300"
              >
                Make an enquiry
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
