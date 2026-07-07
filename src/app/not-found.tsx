import Link from "next/link";
import ClockFace from "@/components/ClockFace";

export default function NotFound() {
  return (
    <section className="grain relative flex flex-col items-center px-5 py-24 text-center sm:py-32">
      <div className="w-40 opacity-90">
        <ClockFace variant="minimal" decorative className="h-auto w-full" />
      </div>
      <h1 className="mt-10 font-display text-4xl text-ink-900 sm:text-5xl">
        This hour doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-ink-500">
        The page you&apos;re after has wandered off the dial. The clocks,
        however, are exactly where they should be.
      </p>
      <Link
        href="/"
        className="mt-9 rounded-full bg-ink-900 px-8 py-3.5 text-sm font-bold tracking-[0.16em] text-ivory-50 uppercase transition-colors hover:bg-brass-600"
      >
        Back to Blazon
      </Link>
    </section>
  );
}
