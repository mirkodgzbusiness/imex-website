import Link from "next/link";
import Image from "next/image";
import { formatProductRef, type Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-52 bg-light-bg">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-dark-bg font-semibold uppercase tracking-wide mb-1">
          {formatProductRef(product.ref)}
        </p>
        <h3 className="font-heading font-semibold text-dark-bg text-base leading-snug mb-3">
          {product.name}
        </h3>
        <span className="inline-block text-sm font-semibold text-primary border border-primary rounded-full px-4 py-2 group-hover:bg-secondary group-hover:border-secondary group-hover:text-white transition-colors">
          Ver detalle
        </span>
      </div>
    </Link>
  );
}
