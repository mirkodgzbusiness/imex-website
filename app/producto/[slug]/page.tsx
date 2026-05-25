import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getRelatedProducts, products, formatProductRef, getProductLabel } from "@/data/products";
import { waProduct } from "@/lib/whatsapp";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  const pageTitle = `${product.name} (${formatProductRef(product.ref)}) | IMEX Internacional`;
  return {
    title: pageTitle,
    description: product.description,
    openGraph: {
      title: pageTitle,
      description: product.description,
      images: product.images[0] ? [{ url: product.images[0], alt: product.name }] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: product.description,
    },
  };
}

export default function ProductoPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  if (params.slug !== product.slug) {
    redirect(`/producto/${product.slug}`);
  }

  const related = getRelatedProducts(product.slug, product.category);
  const waUrl = waProduct(getProductLabel(product));

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    sku: formatProductRef(product.ref),
    brand: { "@type": "Brand", name: "IMEX Internacional" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "PEN",
      seller: { "@type": "Organization", name: "IMEX Internacional" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-mid-gray mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-primary">Inicio</Link>
          <span>/</span>
          <Link href="/productos" className="hover:text-primary">Productos</Link>
          <span>/</span>
          <span className="text-dark-bg font-medium">{formatProductRef(product.ref)}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Galería */}
          <ProductGallery images={product.images} productName={product.name} thumbnailLabels={product.thumbnailLabels} />

          {/* Info */}
          <div>
            <p className="text-dark-bg text-sm font-semibold uppercase tracking-wide mb-2">
              {formatProductRef(product.ref)}
            </p>
            <h1 className="font-heading font-bold text-3xl text-dark-bg mb-4">
              {product.name}
            </h1>
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full capitalize mb-6">
              {product.category.replace("-", " ")}
            </span>
            <p className="text-mid-gray leading-relaxed mb-8">{product.description}</p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-secondary text-white font-bold px-8 py-4 rounded-full transition-colors text-lg shadow-md"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar cotización
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTOS RELACIONADOS */}
      {related.length > 0 && (
        <section className="bg-light-bg py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl text-dark-bg mb-8">
              Productos relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
