import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import { Diamond } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Contact & enquiry",
  description:
    "Ask about any Blazon wall clock, get help choosing for your room, or visit our Jaipur atelier. We reply within one working day.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
      <p className="eyebrow">Contact &amp; enquiry</p>
      <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink-900 sm:text-6xl">
        Tell us about your wall
      </h1>
      <p className="mt-5 max-w-lg leading-relaxed text-ink-500">
        Which room, what light, how big — or just which clock caught your eye.
        A real person from the atelier replies within one working day.
      </p>

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <EnquiryForm />

        <aside className="space-y-9 lg:border-l lg:border-ivory-200 lg:pl-12">
          <div>
            <p className="eyebrow">The atelier</p>
            <address className="mt-4 text-sm leading-relaxed text-ink-500 not-italic">
              Blazon Clocks Pvt. Ltd.
              <br />
              14, Johari Bazaar Road
              <br />
              Jaipur, Rajasthan 302003
            </address>
          </div>

          <div>
            <p className="eyebrow">Reach us</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-500">
              <li>
                <a href="tel:+911412345678" className="transition-colors hover:text-brass-600">
                  +91 141 234 5678
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/911412345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brass-600"
                >
                  WhatsApp the atelier
                </a>
              </li>
              <li>
                <a
                  href="mailto:namaste@blazonclocks.in"
                  className="transition-colors hover:text-brass-600"
                >
                  namaste@blazonclocks.in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Hours</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-500">
              Monday to Saturday, 10am – 7pm IST
              <br />
              Atelier visits by appointment — chai is on us.
            </p>
          </div>

          <ul className="space-y-2.5 border-t border-ivory-200 pt-8 text-sm text-ink-500">
            {[
              "Replies within one working day",
              "Free shipping across India",
              "2-year warranty on every clock",
            ].map((line) => (
              <li key={line} className="flex items-center gap-3">
                <Diamond className="h-1.5 w-1.5 shrink-0 text-brass-500" />
                {line}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
