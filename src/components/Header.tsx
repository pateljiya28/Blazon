"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu whenever the route changes (covers back/forward too).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <p className="bg-ink-950 px-4 py-1.5 text-center text-[11px] font-bold tracking-[0.22em] text-ivory-200 uppercase">
        Handcrafted in Vadodara
        <span className="hidden sm:inline">&ensp;·&ensp;Free shipping across India</span>
      </p>

      <div className="border-b border-ivory-200 bg-ivory-50/95">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8"
          aria-label="Main"
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex items-baseline gap-2"
          >
            <span className="font-display text-[1.65rem] leading-none font-semibold tracking-[0.08em] text-ink-900">
              BLAZON
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-brass-700 uppercase">
              Clocks
            </span>
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {LINKS.map(({ href, label }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href + "/"));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-bold tracking-[0.14em] uppercase transition-colors ${
                    active ? "text-brass-700" : "text-ink-700 hover:text-brass-700"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="rounded-full border border-brass-500 px-5 py-2 text-sm font-bold tracking-[0.14em] text-brass-700 uppercase transition-colors hover:bg-brass-500 hover:text-ivory-50"
            >
              Enquire
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`h-px w-6 bg-ink-900 transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 bg-ink-900 transition-transform duration-300 ${open ? "-translate-y-[2.5px] -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="grain absolute inset-x-0 top-full h-[calc(100vh-100%)] overflow-y-auto bg-ivory-50 md:hidden"
        >
          <div className="flex flex-col gap-2 px-8 pt-12">
            {LINKS.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-ivory-200 py-5 font-display text-4xl text-ink-900"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {label}
              </Link>
            ))}
            <p className="eyebrow mt-10">Blazon Clocks · Jaipur · Since 1987</p>
          </div>
        </div>
      )}
    </header>
  );
}
