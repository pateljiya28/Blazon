import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { COLLECTIONS, PRODUCTS } from "@/lib/products";

/**
 * Server-rendered fallback for the interactive grid. Because ShopGrid reads
 * search params, it can't prerender — this twin makes sure crawlers and the
 * first paint still get the complete product grid, with collection pills as
 * real links that work before (or without) JavaScript.
 */
export default function ShopGridStatic() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
      <h2 className="sr-only">All clocks</h2>
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
        <div className="flex flex-wrap gap-2.5">
          <span className="rounded-full border border-ink-900 bg-ink-900 px-5 py-2 text-xs font-bold tracking-[0.14em] text-ivory-50 uppercase">
            All clocks
          </span>
          {COLLECTIONS.map((c) => (
            <Link
              key={c.slug}
              href={`/shop?collection=${c.slug}`}
              className="rounded-full border border-ivory-300 px-5 py-2 text-xs font-bold tracking-[0.14em] text-ink-700 uppercase transition-colors hover:border-brass-500 hover:text-brass-700"
            >
              {c.short}
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-7 text-xs font-bold tracking-[0.18em] text-ink-500 uppercase">
        {PRODUCTS.length} clocks
      </p>

      <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 xl:grid-cols-4">
        {PRODUCTS.map((product, i) => (
          <ProductCard key={product.slug} product={product} preload={i < 4} />
        ))}
      </div>
    </section>
  );
}
