import type { Metadata } from "next";
import { Suspense } from "react";
import ShopGrid from "./ShopGrid";
import ShopGridStatic from "./ShopGridStatic";

export const metadata: Metadata = {
  title: "Shop wall clocks",
  description:
    "Browse the full Blazon collection — heritage, minimal, vintage and studio wall clocks, handcrafted in Jaipur with silent sweep movements.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <>
      <header className="grain relative border-b border-ivory-200 bg-ivory-100/60">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <p className="eyebrow">The full collection</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink-900 sm:text-6xl">
            Every Blazon, on one wall
          </h1>
          <p className="mt-5 max-w-lg leading-relaxed text-ink-500">
            Eighteen clocks, four collections, one standard of craft. Every
            piece ships free across India with a 2-year warranty.
          </p>
        </div>
      </header>
      <Suspense fallback={<ShopGridStatic />}>
        <ShopGrid />
      </Suspense>
    </>
  );
}
