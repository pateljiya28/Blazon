import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";

const BASE = "https://blazonclocks.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: BASE, priority: 1, lastModified },
    { url: `${BASE}/shop`, priority: 0.9, lastModified },
    ...PRODUCTS.map((p) => ({
      url: `${BASE}/shop/${p.slug}`,
      priority: 0.7,
      lastModified,
    })),
    { url: `${BASE}/about`, priority: 0.5, lastModified },
    { url: `${BASE}/contact`, priority: 0.5, lastModified },
  ];
}
