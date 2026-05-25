import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Catálogo de Productos | IMEX Internacional",
  description:
    "Explora nuestras categorías: infantil, junior, adulto, interior femenina, masculina, multiusos, lavandería y muebles.",
};

export default function ProductosPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-3">
            Catálogo de Productos
          </h1>
          <p className="text-white/70 text-lg">
            Ganchos y colgadores para la industria textil en Perú.
          </p>
        </div>
      </section>

      {/* FILTRO POR CATEGORÍA */}
      <section className="bg-light-bg py-6 border-b sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/productos"
              className="text-xs font-semibold px-4 py-2 rounded-full border-2 border-secondary bg-secondary text-white"
            >
              Todos
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.path}
                className="text-xs font-semibold px-4 py-2 rounded-full border-2 border-primary/30 text-primary hover:bg-secondary hover:border-secondary hover:text-white transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GRID DE PRODUCTOS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
