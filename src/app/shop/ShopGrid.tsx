"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { COLLECTIONS, PRODUCTS, type CollectionSlug } from "@/lib/products";

type Filter = CollectionSlug | "all";
type Sort = "featured" | "asc" | "desc";

const isCollection = (v: string | null): v is CollectionSlug =>
  COLLECTIONS.some((c) => c.slug === v);

export default function ShopGrid() {
  // The URL is the single source of truth for the active collection, so the
  // grid stays in sync with any navigation (footer links, back/forward, pills).
  const searchParams = useSearchParams();
  const param = searchParams.get("collection");
  const filter: Filter = isCollection(param) ? param : "all";
  const [sort, setSort] = useState<Sort>("featured");

  const products = useMemo(() => {
    const list = PRODUCTS.filter((p) => filter === "all" || p.collection === filter);
    if (sort === "asc") return [...list].sort((a, b) => a.price - b.price);
    if (sort === "desc") return [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [filter, sort]);

  const select = (next: Filter) => {
    const url = next === "all" ? "/shop" : `/shop?collection=${next}`;
    window.history.replaceState(null, "", url);
  };

  const active = COLLECTIONS.find((c) => c.slug === filter);

  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
      <h2 className="sr-only">All clocks</h2>
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
        <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter by collection">
          {([["all", "All clocks"], ...COLLECTIONS.map((c) => [c.slug, c.short])] as [Filter, string][]).map(
            ([slug, label]) => (
              <button
                key={slug}
                type="button"
                onClick={() => select(slug)}
                aria-pressed={filter === slug}
                className={`rounded-full border px-5 py-2 text-xs font-bold tracking-[0.14em] uppercase transition-colors ${
                  filter === slug
                    ? "border-ink-900 bg-ink-900 text-ivory-50"
                    : "border-ivory-300 text-ink-700 hover:border-brass-500 hover:text-brass-700"
                }`}
              >
                {label}
              </button>
            ),
          )}
        </div>

        <label className="flex items-center gap-3 text-xs font-bold tracking-[0.14em] text-ink-500 uppercase">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-sm border border-ivory-300 bg-ivory-50 px-3 py-2 text-xs font-bold tracking-wider text-ink-900 uppercase focus:border-brass-500 focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="asc">Price: low to high</option>
            <option value="desc">Price: high to low</option>
          </select>
        </label>
      </div>

      {active && (
        <p className="mt-7 max-w-xl border-l-2 border-brass-400 pl-4 text-sm leading-relaxed text-ink-500 italic">
          {active.description}
        </p>
      )}

      <p aria-live="polite" className="mt-7 text-xs font-bold tracking-[0.18em] text-ink-500 uppercase">
        {products.length} {products.length === 1 ? "clock" : "clocks"}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 xl:grid-cols-4">
        {products.map((product, i) => (
          <ProductCard key={product.slug} product={product} preload={i < 4} />
        ))}
      </div>
    </section>
  );
}
