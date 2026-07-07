import Link from "next/link";
import ClockFace from "@/components/ClockFace";
import { COLLECTIONS } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-ink-950 text-ivory-200">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-sm">
            <p className="font-display text-3xl font-semibold tracking-[0.08em] text-ivory-100">
              BLAZON
            </p>
            <p className="mt-4 font-display text-xl text-ivory-200/80 italic">
              Time, beautifully crafted.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ivory-200/60">
              Hand-finished wall clocks from our Jaipur atelier, keeping quiet,
              faithful time in homes across India since 1987.
            </p>
            <div className="mt-8 w-24">
              <ClockFace variant="midnight" showSeconds={false} decorative className="h-auto w-full" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            <nav aria-label="Collections">
              <p className="eyebrow !text-brass-400">Collections</p>
              <ul className="mt-5 space-y-3 text-sm">
                {COLLECTIONS.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/shop?collection=${c.slug}`}
                      className="text-ivory-200/70 transition-colors hover:text-brass-300"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Company">
              <p className="eyebrow !text-brass-400">Company</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link href="/shop" className="text-ivory-200/70 transition-colors hover:text-brass-300">
                    All clocks
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-ivory-200/70 transition-colors hover:text-brass-300">
                    Our story
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-ivory-200/70 transition-colors hover:text-brass-300">
                    Contact &amp; enquiry
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <p className="eyebrow !text-brass-400">Atelier</p>
              <ul className="mt-5 space-y-3 text-sm text-ivory-200/70">
                <li>
                  14, Johari Bazaar Road
                  <br />
                  Jaipur, Rajasthan 302003
                </li>
                <li>
                  <a href="tel:+911412345678" className="transition-colors hover:text-brass-300">
                    +91 141 234 5678
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:namaste@blazonclocks.in"
                    className="transition-colors hover:text-brass-300"
                  >
                    namaste@blazonclocks.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory-200/15 pt-6 text-xs tracking-wide text-ivory-200/65 sm:flex sm:items-center sm:justify-between">
          <p>© 2026 Blazon Clocks Pvt. Ltd. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Proudly crafted in India&ensp;·&ensp;Silent sweep movements&ensp;·&ensp;2-year warranty
          </p>
        </div>
      </div>
    </footer>
  );
}
