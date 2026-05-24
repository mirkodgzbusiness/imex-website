import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return categories.map((cat) => ({ categoria: cat.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { categoria: string };
}): Metadata {
  const cat = categories.find((c) => c.slug === params.categoria);
  if (!cat) return {};
  return {
    title: `${cat.name} | IMEX Internacional`,
    description: cat.description,
  };
}

export default function CategoriaPage({
  params,
}: {
  params: { categoria: string };
}) {
  const cat = categories.find((c) => c.slug === params.categoria);
  if (!cat) notFound();

  const productos = getProductsByCategory(cat.slug);

  return (
    <>
      {/* HEADER CATEGORÍA */}
      <section
        className="text-white py-20"
        style={{
          background:
            "radial-gradient(ellipse 400% 240% at 50% 140%, #c7c5fd, #c7c5fd 10%, 15%, rgba(154,103,250,.6) 16%, 21%, #0b5cff 28%, 35%, #00031d 45%, #00031d)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-white transition-colors">Productos</Link>
            <span>/</span>
            <span className="text-white">{cat.name}</span>
          </div>
          <p className="text-5xl mb-4">{cat.icon}</p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            {cat.name}
          </h1>
          <p className="text-white/75 text-lg max-w-xl">{cat.description}</p>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {productos.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-mid-gray text-lg mb-6">
                No hay productos disponibles en esta categoría todavía.
              </p>
              <Link
                href="/productos"
                className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                Ver todos los productos
              </Link>
            </div>
          ) : (
            <>
              <p className="text-mid-gray mb-8">
                {productos.length} producto{productos.length !== 1 ? "s" : ""} encontrado{productos.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {productos.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* OTRAS CATEGORÍAS */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-xl text-dark-bg mb-6">
            Otras categorías
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories
              .filter((c) => c.slug !== cat.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={c.path}
                  className="flex items-center gap-2 bg-light-bg hover:bg-primary/10 border border-gray-200 hover:border-primary text-sm font-medium text-dark-bg hover:text-primary px-4 py-2 rounded-full transition-all"
                >
                  <span>{c.icon}</span>
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
