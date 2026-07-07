"use client";

import { useState, useSyncExternalStore } from "react";
import { PRODUCTS } from "@/lib/products";

const inputCls =
  "w-full rounded-sm border border-ivory-300 bg-ivory-50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 focus:border-brass-500 focus:outline-none focus:ring-2 focus:ring-brass-400/30 transition-shadow";

// Read /contact?clock=<slug> as an external store (instead of useSearchParams)
// so the whole form stays in the prerendered HTML.
const subscribe = () => () => {};
const getUrlClock = () => new URLSearchParams(window.location.search).get("clock") ?? "";
const getServerClock = () => "";

export default function EnquiryForm() {
  const urlClock = useSyncExternalStore(subscribe, getUrlClock, getServerClock);
  const [chosen, setChosen] = useState<string | null>(null);
  const clock = chosen ?? (PRODUCTS.some((p) => p.slug === urlClock) ? urlClock : "");
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");

  if (submitted) {
    return (
      <div
        role="status"
        className="grain relative rounded-sm border border-brass-400/40 bg-ivory-100 p-10 text-center"
      >
        <p className="font-display text-4xl text-brass-600" aria-hidden="true">
          ✓
        </p>
        <h3 className="mt-4 font-display text-2xl text-ink-900">
          Thank you — we&apos;ve received your enquiry.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-500">
          Our atelier team replies within one working day, usually sooner. Your
          reference is{" "}
          <span className="font-bold text-ink-900">{reference}</span>.
        </p>
        <a
          href="https://wa.me/911412345678"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full border border-brass-500 px-6 py-2.5 text-sm font-bold tracking-[0.12em] text-brass-700 uppercase transition-colors hover:bg-brass-500 hover:text-ivory-50"
        >
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setReference(`BLZ-${Date.now().toString(36).toUpperCase().slice(-6)}`);
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enq-name" className="mb-1.5 block text-xs font-bold tracking-[0.14em] text-ink-700 uppercase">
            Name
          </label>
          <input id="enq-name" name="name" required autoComplete="name" placeholder="Your full name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="enq-phone" className="mb-1.5 block text-xs font-bold tracking-[0.14em] text-ink-700 uppercase">
            Phone
          </label>
          <input
            id="enq-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91 98xxx xxxxx"
            pattern="[+0-9\s\-\(\)]{8,16}"
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enq-email" className="mb-1.5 block text-xs font-bold tracking-[0.14em] text-ink-700 uppercase">
            Email <span className="font-normal text-ink-500 normal-case">(optional)</span>
          </label>
          <input id="enq-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={inputCls} />
        </div>
        <div>
          <label htmlFor="enq-city" className="mb-1.5 block text-xs font-bold tracking-[0.14em] text-ink-700 uppercase">
            City
          </label>
          <input id="enq-city" name="city" required placeholder="Mumbai, Delhi, Bengaluru…" className={inputCls} />
        </div>
      </div>

      <div>
        <label htmlFor="enq-clock" className="mb-1.5 block text-xs font-bold tracking-[0.14em] text-ink-700 uppercase">
          Clock of interest
        </label>
        <select
          id="enq-clock"
          name="clock"
          value={clock}
          onChange={(e) => setChosen(e.target.value)}
          className={inputCls}
        >
          <option value="">Not sure yet — help me choose</option>
          {PRODUCTS.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name} · {p.diameter}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="enq-message" className="mb-1.5 block text-xs font-bold tracking-[0.14em] text-ink-700 uppercase">
          Message <span className="font-normal text-ink-500 normal-case">(optional)</span>
        </label>
        <textarea
          id="enq-message"
          name="message"
          rows={4}
          placeholder="Tell us about your wall, your room, or anything else…"
          className={inputCls}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-ink-900 px-8 py-3.5 text-sm font-bold tracking-[0.16em] text-ivory-50 uppercase transition-colors hover:bg-brass-600 sm:w-auto"
      >
        Send enquiry
      </button>
      <p className="text-xs leading-relaxed text-ink-500">
        We never share your details. Expect a reply within one working day.
      </p>
    </form>
  );
}
