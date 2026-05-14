import type { Metadata } from "next";
import { WA_GENERAL } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Sobre Nosotros | IMEX Internacional",
  description:
    "Somos IMPOR EXPOR PERU S.A.C., empresa peruana dedicada a la importación y exportación de productos para el comercio textil.",
};

export default function NosotrosPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Nosotros</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Conoce quiénes somos y qué nos mueve a brindar los mejores productos para
            la industria textil en Perú.
          </p>
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Quiénes somos
            </p>
            <h2 className="font-heading font-bold text-3xl text-dark-bg mb-6">
              Bienvenidos a IMPOR EXPOR PERU S.A.C.
            </h2>
            <p className="text-mid-gray leading-relaxed text-lg">
              Somos una empresa peruana dedicada a la importación y exportación, la
              diversificación e integración de diferentes productos y servicios para la
              industria y el comercio. Nuestro objetivo es brindarle el mejor servicio
              con valor agregado a cada uno de nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-dark-bg mb-4">Misión</h3>
              <p className="text-mid-gray leading-relaxed">
                Ser los primeros en atender a nuestros clientes y proveedores con fines
                de cooperación mutua para alcanzar los objetivos de negocios.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌎</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-dark-bg mb-4">Visión</h3>
              <p className="text-mid-gray leading-relaxed">
                Llegar a ser una de las empresas más reconocidas a nivel nacional e
                internacional, brindando productos y servicios de alta calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-heading font-bold text-2xl text-dark-bg mb-4">
            ¿Quieres trabajar con nosotros?
          </h2>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
