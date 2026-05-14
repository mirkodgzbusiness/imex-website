import type { Metadata } from "next";
import { WA_GENERAL } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Servicios de Serigrafía | IMEX Internacional",
  description:
    "Grabado de marca y logo personalizado en ganchos con las últimas técnicas de serigrafía.",
};

export default function ServiciosPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-white/70 text-lg">
            Soluciones de personalización para tu marca.
          </p>
        </div>
      </section>

      {/* SERIGRAFÍA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Servicio Principal
              </p>
              <h2 className="font-heading font-bold text-3xl text-dark-bg mb-6">
                Serigrafía e impresión para ganchos
              </h2>
              <p className="text-mid-gray leading-relaxed mb-6">
                En Impor Expor Perú realizamos el trabajo de serigrafía, el grabado de
                tu marca o logo personalizado con las últimas técnicas en serigrafía,
                ofrecemos un buen acabado junto con un gran detalle.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-lg">💪</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-dark-bg mb-1">
                      Durabilidad garantizada
                    </h4>
                    <p className="text-mid-gray text-sm leading-relaxed">
                      Los insumos y maquinarias usadas en nuestros proyectos le dan a
                      nuestros productos resistencia y durabilidad.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-lg">🎨</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-dark-bg mb-1">
                      Personalización completa
                    </h4>
                    <p className="text-mid-gray text-sm leading-relaxed">
                      Tu marca o logo sobre el gancho, en los colores y acabados que
                      necesites.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Solicitar cotización
              </a>
            </div>

            {/* Placeholder visual */}
            <div className="bg-light-bg rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center text-mid-gray">
                <span className="text-6xl block mb-3">🖨️</span>
                <p className="text-sm">Imagen de servicio (pendiente)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
