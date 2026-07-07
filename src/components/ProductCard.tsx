import Image from "next/image";
import Link from "next/link";
import { formatINR, getCollection, type Product } from "@/lib/products";

export default function ProductCard({
  product,
  preload = false,
  sizes = "(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw",
}: {
  product: Product;
  preload?: boolean;
  /** Pass a context-correct sizes string matching the grid this card sits in. */
  sizes?: string;
}) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="card-tilt relative aspect-[4/5] overflow-hidden rounded-sm bg-ivory-100">
        <Image
          src={product.image}
          alt={`${product.name} wall clock — ${product.dial}`}
          fill
          preload={preload}
          placeholder="blur"
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {product.bestseller && (
          <span className="absolute top-3 left-3 rounded-full bg-brass-500 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-ink-950 uppercase">
            Bestseller
          </span>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold tracking-[0.24em] text-brass-700 uppercase">
            {getCollection(product.collection)?.short}
          </p>
          <h3 className="mt-1 font-display text-xl leading-snug text-ink-900 transition-colors group-hover:text-brass-700">
            {product.name}
          </h3>
          <p className="mt-0.5 text-xs text-ink-500">{product.diameter}</p>
        </div>
        <p className="pt-4 text-sm font-bold whitespace-nowrap text-ink-900">
          {formatINR(product.price)}
        </p>
      </div>
    </Link>
  );
}
