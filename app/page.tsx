import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { categories } from "@/data/categories";
import { WA_GENERAL } from "@/lib/whatsapp";
import ProductCard from "@/components/ProductCard";

const stats = [
  { value: "+10", label: "Años en el mercado" },
  { value: "+500", label: "Clientes satisfechos" },
  { value: "8", label: "Categorías de producto" },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent/70 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              IMEX Internacional
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Ganchos y colgadores de alta calidad para tu negocio
            </h1>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Importación y exportación de productos para la industria textil y el
              comercio en Perú.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/productos"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Ver Catálogo
              </Link>
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Contáctenos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 divide-x divide-white/20">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-4">
                <p className="font-heading font-bold text-3xl md:text-4xl text-accent">
                  {s.value}
                </p>
                <p className="text-sm text-white/70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-dark-bg text-center mb-3">
            Nuestras Categorías
          </h2>
          <p className="text-mid-gray text-center mb-12 max-w-xl mx-auto">
            Ganchos y colgadores especializados para cada segmento de la industria textil.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.path}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
              >
                <span className="text-4xl mb-3 block">{cat.icon}</span>
                <h3 className="font-heading font-semibold text-dark-bg text-sm group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-dark-bg text-center mb-3">
            Productos Destacados
          </h2>
          <p className="text-mid-gray text-center mb-12 max-w-xl mx-auto">
            Una selección de nuestros productos más solicitados por clientes de todo Perú.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/productos"
              className="inline-block border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>

      {/* SERIGRAFÍA BANNER */}
      <section className="bg-dark-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Servicio Especializado
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Serigrafía e impresión en ganchos
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Grabamos tu marca o logo personalizado con las últimas técnicas en
              serigrafía. Insumos y maquinaria de calidad que garantizan resistencia y
              durabilidad en cada pieza.
            </p>
            <Link
              href="/servicios"
              className="inline-block bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Conocer más
            </Link>
          </div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-dark-bg mb-3">Misión</h3>
              <p className="text-mid-gray leading-relaxed">
                Ser los primeros en atender a nuestros clientes y proveedores con fines
                de cooperación mutua para alcanzar los objetivos de negocios.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">🌎</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-dark-bg mb-3">Visión</h3>
              <p className="text-mid-gray leading-relaxed">
                Llegar a ser una de las empresas más reconocidas a nivel nacional e
                internacional, brindando productos y servicios de alta calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            ¿Listo para cotizar?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Escríbenos por WhatsApp y te respondemos de inmediato.
          </p>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-secondary font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors text-lg shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Cotizar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
