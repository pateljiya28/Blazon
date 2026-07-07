import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ogImage from "@/images/lifestyle/craft.jpg";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

// latin-ext is required for the rupee sign (₹, U+20B9) in prices.
const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blazonclocks.example.com"),
  title: {
    default: "Blazon Clocks — Time, beautifully crafted",
    template: "%s — Blazon Clocks",
  },
  description:
    "Handcrafted wall clocks from Jaipur, India. Silent sweep movements, hand-finished brass and walnut, designed for walls that deserve better. Since 1987.",
  openGraph: {
    title: "Blazon Clocks — Time, beautifully crafted",
    description:
      "Handcrafted wall clocks from Jaipur, India. Silent sweep movements, hand-finished brass and walnut. Since 1987.",
    type: "website",
    locale: "en_IN",
    siteName: "Blazon Clocks",
    images: [{ url: ogImage.src, width: ogImage.width, height: ogImage.height }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${karla.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-ivory-50"
        >
          Skip to content
        </a>
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
