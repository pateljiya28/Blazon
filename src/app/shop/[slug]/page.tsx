import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { Diamond } from "@/components/Ornaments";
import {
  PRODUCTS,
  formatINR,
  getCollection,
  getProduct,
  getRelated,
} from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.tagline}`,
    description: `${product.description} ${product.diameter}, ${formatINR(product.price)}. Free shipping across India.`,
    openGraph: {
      title: `${product.name} — Blazon Clocks`,
      description: product.tagline,
      images: [{ url: product.image.src, width: product.image.width, height: product.image.height }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const collection = getCollection(product.collection)!;
  const related = getRelated(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} — Blazon Clocks`,
    image: [product.image.src],
    description: product.description,
    brand: { "@type": "Brand", name: "Blazon Clocks" },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <article className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-xs tracking-wide text-ink-500">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="transition-colors hover:text-brass-600">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/shop" className="transition-colors hover:text-brass-600">
              Shop
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-bold text-ink-700">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ── Imagery ─────────────────────────────────────────── */}
        <div className="rise relative self-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ivory-100">
            <Image
              src={product.image}
              alt={`${product.name} wall clock — ${product.dial}`}
              fill
              preload
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {product.bestseller && (
              <span className="absolute top-4 left-4 rounded-full bg-brass-500 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.18em] text-ink-950 uppercase">
                Bestseller
              </span>
            )}
          </div>
          <div
            aria-hidden="true"
            className="absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-sm border border-brass-400/50"
          />
        </div>

        {/* ── Details ─────────────────────────────────────────── */}
        <div>
          <p className="eyebrow">{collection.name}</p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-3 font-display text-lg text-brass-700 italic">
            {product.tagline}
          </p>

          <p className="mt-6 font-display text-3xl text-ink-900">
            {formatINR(product.price)}
            <span className="ml-3 align-middle text-xs font-bold tracking-[0.16em] text-ink-500 uppercase">
              Free shipping · All taxes included
            </span>
          </p>

          <div className="rule-brass mt-8" />

          <p className="mt-8 max-w-lg leading-relaxed text-ink-500">
            {product.description}
          </p>

          <dl className="mt-9 grid max-w-lg grid-cols-1 gap-px overflow-hidden rounded-sm border border-ivory-200 bg-ivory-200 text-sm sm:grid-cols-2">
            {[
              ["Diameter", product.diameter],
              ["Dial", product.dial],
              ["Material", product.material],
              ["Movement", "Silent sweep quartz"],
              ["Power", "Single AA cell (included)"],
              ["Warranty", "2 years, doorstep service"],
            ].map(([term, detail]) => (
              <div key={term} className="bg-ivory-50 px-5 py-4">
                <dt className="text-[10px] font-bold tracking-[0.2em] text-brass-700 uppercase">
                  {term}
                </dt>
                <dd className="mt-1 font-medium text-ink-900">{detail}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={`/contact?clock=${product.slug}`}
              className="rounded-full bg-ink-900 px-8 py-3.5 text-sm font-bold tracking-[0.16em] text-ivory-50 uppercase transition-colors hover:bg-brass-600"
            >
              Enquire about this clock
            </Link>
            <a
              href={`https://wa.me/911412345678?text=${encodeURIComponent(
                `Namaste! I'm interested in ${product.name} (${formatINR(product.price)}).`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brass-500 px-8 py-3.5 text-sm font-bold tracking-[0.16em] text-brass-700 uppercase transition-colors hover:bg-brass-500 hover:text-ivory-50"
            >
              WhatsApp us
            </a>
          </div>

          <ul className="mt-9 space-y-2.5 text-sm text-ink-500">
            {[
              "Ships in 3–5 working days, insured and gift-ready",
              "Tested for 72 hours in our Jaipur atelier before dispatch",
              "Mounting kit and spirit-level card included",
            ].map((line) => (
              <li key={line} className="flex items-center gap-3">
                <Diamond className="h-1.5 w-1.5 shrink-0 text-brass-500" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Related ───────────────────────────────────────────── */}
      <section className="mt-24">
        <Reveal>
          <p className="eyebrow">Pairs well with</p>
          <h2 className="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">
            Other walls, other hours
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProductCard product={p} sizes="(max-width: 1024px) 50vw, 33vw" />
            </Reveal>
          ))}
        </div>
      </section>
    </article>
  );
}
