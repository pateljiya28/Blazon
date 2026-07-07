import type { StaticImageData } from "next/image";

import jaipurRoman from "@/images/products/jaipur-roman.jpg";
import amerCourtyard from "@/images/products/amer-courtyard.jpg";
import marigold from "@/images/products/marigold.jpg";
import darbar from "@/images/products/darbar.jpg";
import ivoryLine from "@/images/products/ivory-line.jpg";
import kanan from "@/images/products/kanan.jpg";
import shore from "@/images/products/shore.jpg";
import galleryWhite from "@/images/products/gallery-white.jpg";
import calcuttaStation from "@/images/products/calcutta-station.jpg";
import haveli from "@/images/products/haveli.jpg";
import bazaar from "@/images/products/bazaar.jpg";
import pankha from "@/images/products/pankha.jpg";
import teaEstate from "@/images/products/tea-estate.jpg";
import midnightAtelier from "@/images/products/midnight-atelier.jpg";
import pressRoom from "@/images/products/press-room.jpg";
import bombayDeco from "@/images/products/bombay-deco.jpg";
import monsoon from "@/images/products/monsoon.jpg";
import udaan from "@/images/products/udaan.jpg";

export type CollectionSlug = "heritage" | "minimal" | "vintage" | "studio";

export interface Collection {
  slug: CollectionSlug;
  name: string;
  short: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  collection: CollectionSlug;
  price: number; // INR
  tagline: string;
  description: string;
  diameter: string;
  material: string;
  dial: string;
  bestseller?: boolean;
  image: StaticImageData;
}

export const COLLECTIONS: Collection[] = [
  {
    slug: "heritage",
    name: "The Heritage Collection",
    short: "Heritage",
    description:
      "Roman dials, hand-polished brass and quiet authority — clocks the way they were always meant to be made.",
  },
  {
    slug: "minimal",
    name: "The Minimal Collection",
    short: "Minimal",
    description:
      "Pared back to the essential: clean dials, slender hands and forms that let your wall breathe.",
  },
  {
    slug: "vintage",
    name: "The Vintage Collection",
    short: "Vintage",
    description:
      "Patina, character and old-world romance — pieces that look inherited, not bought.",
  },
  {
    slug: "studio",
    name: "The Studio Collection",
    short: "Studio",
    description:
      "Bold dials and workshop character, drawn from station halls, ateliers and mid-century studios.",
  },
];

export const PRODUCTS: Product[] = [
  // ── Heritage ──────────────────────────────────────────────────
  {
    slug: "jaipur-roman",
    name: "The Jaipur",
    collection: "heritage",
    price: 6490,
    tagline: "Our founding dial, unchanged since 1987.",
    description:
      "The clock that started Blazon. An open Roman dial in hand-finished metal that presides over consoles and mantels, with a silent sweep movement that keeps the room as calm as it looks.",
    diameter: '14" / 36 cm',
    material: "Hand-finished metal, open dial",
    dial: "Open Roman numerals",
    bestseller: true,
    image: jaipurRoman,
  },
  {
    slug: "amer-courtyard",
    name: "The Amer",
    collection: "heritage",
    price: 7990,
    tagline: "Stately proportions for generous walls.",
    description:
      "Named for Amer Fort's great courtyards, this is our most architectural heritage piece — a deep enamel dial with strong Roman numerals that read clearly across a room.",
    diameter: '16" / 41 cm',
    material: "Powder-black steel rim",
    dial: "Warm enamel, Roman numerals",
    image: amerCourtyard,
  },
  {
    slug: "marigold",
    name: "The Marigold",
    collection: "heritage",
    price: 5490,
    tagline: "A warm classic for everyday rooms.",
    description:
      "A friendly heritage dial sized for bedrooms and studies. The Marigold pairs generous serif numerals with a soft cream face that flatters every wall colour.",
    diameter: '12" / 30 cm',
    material: "Brushed brass, birch frame",
    dial: "Cream, serif numerals",
    image: marigold,
  },
  {
    slug: "darbar",
    name: "The Darbar",
    collection: "heritage",
    price: 9990,
    tagline: "The centrepiece clock.",
    description:
      "Built to preside over living rooms and lobbies, the Darbar is an open-worked brass dial — Roman numerals held in gilded air, casting fine shadows that move with the day.",
    diameter: '18" / 46 cm',
    material: "Open-worked cast brass",
    dial: "Skeleton, gilded Roman numerals",
    image: darbar,
  },
  // ── Minimal ───────────────────────────────────────────────────
  {
    slug: "ivory-line",
    name: "The Ivory Line",
    collection: "minimal",
    price: 3490,
    tagline: "Quiet as the hour it keeps.",
    description:
      "A clean white dial in a slim ink rim, two slender hands, nothing else. The Ivory Line disappears into calm interiors and rewards a second glance.",
    diameter: '12" / 30 cm',
    material: "Powder-coated steel",
    dial: "Soft white, slim ink rim",
    bestseller: true,
    image: ivoryLine,
  },
  {
    slug: "kanan",
    name: "The Kanan",
    collection: "minimal",
    price: 3990,
    tagline: "Scandinavian calm, Indian craft.",
    description:
      "Clean baton markers on a soft white face, framed in a slender ring of pale wood. The Kanan suits studies, studios and anywhere thought needs room.",
    diameter: '12" / 30 cm',
    material: "Pale wood rim",
    dial: "White, baton markers",
    image: kanan,
  },
  {
    slug: "shore",
    name: "The Shore",
    collection: "minimal",
    price: 4490,
    tagline: "Numbers, reduced to whispers.",
    description:
      "Fine numerals set wide on an open white dial give the Shore its airy, architectural feel. Our pick for modern apartments and minimal bedrooms.",
    diameter: '13" / 33 cm',
    material: "Black matte steel rim",
    dial: "Soft white, fine numerals",
    image: shore,
  },
  {
    slug: "gallery-white",
    name: "The Gallery",
    collection: "minimal",
    price: 5290,
    tagline: "For walls that are already art.",
    description:
      "A pure geometric dial with line markers that hangs like a quiet exhibit. The Gallery is the clock we recommend when the wall itself is the statement.",
    diameter: '14" / 36 cm',
    material: "Aluminium, matte finish",
    dial: "Gallery white, line markers",
    image: galleryWhite,
  },
  // ── Vintage ───────────────────────────────────────────────────
  {
    slug: "calcutta-station",
    name: "The Calcutta",
    collection: "vintage",
    price: 7490,
    tagline: "Platform-clock romance for the home.",
    description:
      "Inspired by the great station clocks of the Indian railways — a twin-faced bracket clock that mounts proud of the wall and reads from both ends of the corridor.",
    diameter: '12" / 30 cm, twin dials',
    material: "Cast bracket, aged bronze",
    dial: "Parchment, railway Roman numerals",
    bestseller: true,
    image: calcuttaStation,
  },
  {
    slug: "haveli",
    name: "The Haveli",
    collection: "vintage",
    price: 8990,
    tagline: "Looks inherited, keeps perfect time.",
    description:
      "Aged by hand in our Jaipur atelier, the Haveli is an open-worked Roman dial in raw, patinated brass — the reliability of a brand-new silent movement inside an heirloom's skin.",
    diameter: '16" / 41 cm',
    material: "Aged open-worked brass",
    dial: "Skeleton Roman, raw patina",
    image: haveli,
  },
  {
    slug: "bazaar",
    name: "The Bazaar",
    collection: "vintage",
    price: 6290,
    tagline: "Old-market charm, new-world quiet.",
    description:
      "A character piece drawn from the clock-sellers' lanes of old Jaipur — a sepia dial with hand-lettered numerals, warm tones, worn edges and a face full of stories.",
    diameter: '13" / 33 cm',
    material: "Antiqued metal rim",
    dial: "Sepia, hand-lettered numerals",
    image: bazaar,
  },
  {
    slug: "pankha",
    name: "The Pankha",
    collection: "vintage",
    price: 7990,
    tagline: "A colonial-era silhouette, reborn.",
    description:
      "Carved dark wood, a creamy dial and a gently swinging pendulum — the Pankha revives the verandah clocks of another century for homes of this one.",
    diameter: '14" / 36 cm case',
    material: "Hand-carved dark wood",
    dial: "Aged ivory, brass pendulum",
    image: pankha,
  },
  {
    slug: "tea-estate",
    name: "The Tea Estate",
    collection: "vintage",
    price: 6990,
    tagline: "Slow mornings, faithfully kept.",
    description:
      "A warm wooden face, gentle markers and an unhurried air — the Tea Estate belongs above breakfast tables and verandah doors.",
    diameter: '13" / 33 cm',
    material: "Warm honey-toned wood",
    dial: "Wood grain, slender hands",
    image: teaEstate,
  },
  // ── Studio ────────────────────────────────────────────────────
  {
    slug: "midnight-atelier",
    name: "The Midnight",
    collection: "studio",
    price: 5990,
    tagline: "Ink-dark dial, golden-hour drama.",
    description:
      "Our signature ink-dark dial throws a long, elegant shadow in the evening light. The Midnight anchors modern living rooms with quiet drama.",
    diameter: '14" / 36 cm',
    material: "Black steel, matte enamel",
    dial: "Ink black, fine markers",
    bestseller: true,
    image: midnightAtelier,
  },
  {
    slug: "press-room",
    name: "The Press Room",
    collection: "studio",
    price: 6490,
    tagline: "Deadline energy, drawing-room manners.",
    description:
      "A square industrial station clock re-tailored in better materials — bold, legible and unfussy. Reads instantly from across the largest room in the house.",
    diameter: '12" × 12" / 30 cm',
    material: "Square steel case",
    dial: "White, bold numerals",
    image: pressRoom,
  },
  {
    slug: "bombay-deco",
    name: "The Bombay",
    collection: "studio",
    price: 8490,
    tagline: "Copper lines from Marine Drive.",
    description:
      "An open copper-and-black Roman dial with the geometric confidence of Bombay's deco apartments. A collector's piece for lovers of the city's golden age.",
    diameter: '14" / 36 cm',
    material: "Copper-finish skeleton frame",
    dial: "Open Roman, copper on black",
    image: bombayDeco,
  },
  {
    slug: "monsoon",
    name: "The Monsoon",
    collection: "studio",
    price: 4990,
    tagline: "Storm-blue calm for quiet corners.",
    description:
      "A muted slate-blue dial the colour of a monsoon sky, with soft cream batons. The Monsoon hangs beautifully beside art and brings calm to kitchens, studies and reading nooks.",
    diameter: '12" / 30 cm',
    material: "Powder-coated steel",
    dial: "Storm blue, cream batons",
    image: monsoon,
  },
  {
    slug: "udaan",
    name: "The Udaan",
    collection: "studio",
    price: 5490,
    tagline: "A red second hand, always mid-flight.",
    description:
      "A pale grey dial crossed by a signal-red sweep hand — the designer's clock. The Udaan gives studios and desks a quiet pulse of momentum.",
    diameter: '13" / 33 cm',
    material: "Powder-coated steel",
    dial: "Pale grey, signal-red sweep",
    image: udaan,
  },
];

export const formatINR = (price: number) =>
  "₹" + price.toLocaleString("en-IN");

export const getProduct = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug);

export const getCollection = (slug: string) =>
  COLLECTIONS.find((c) => c.slug === slug);

export const getRelated = (product: Product, count = 3) => {
  const sameCollection = PRODUCTS.filter(
    (p) => p.collection === product.collection && p.slug !== product.slug,
  );
  const others = PRODUCTS.filter(
    (p) => p.collection !== product.collection && p.slug !== product.slug,
  );
  return [...sameCollection, ...others].slice(0, count);
};

export const BESTSELLERS = PRODUCTS.filter((p) => p.bestseller);
