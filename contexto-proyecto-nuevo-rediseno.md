=======================================================================
  IMEX - IMPOR EXPOR PERU S.A.C.
  DOCUMENTO DE CONTEXTO PARA REDISEÑO EN NEXT.JS
=======================================================================

0. DECISIONES TÉCNICAS (confirmadas)
  Stack:       Next.js 14, App Router, TypeScript, Tailwind CSS
  Data:        JSON estático en /data/products.ts y /data/categories.ts
               (CMS headless queda como opción futura si el cliente necesita editar)
  Deploy:      Vercel — dominio: imporexporperu.com
  Contacto:    Solo WhatsApp — sin backend de email ni formulario con envío
  Logo:        Placeholder de texto "IMEX" en color PRIMARY hasta recibir archivo real
               Ruta futura: /public/images/logo.svg
  Imágenes:    Migrar desde URLs WordPress → /public/images/products/[slug]-[n].jpg
               Usar next/image con width y height explícitos en todos los casos

1. META / INFORMACIÓN GENERAL
  Nombre: IMPOR EXPOR PERU S.A.C.
  Marca: IMEX Internacional
  URL: https://imporexporperu.com
  Tel/WA: +51 994 938 229
  Logo: https://imporexporperu.com/wp-content/uploads/2019/05/logo-imex-razon-social-telefono-5.png
  Plataforma actual: WordPress + Divi + WooCommerce -> Next.js

2. MENÚ DE NAVEGACIÓN
  Inicio -> /
  Nosotros -> /nosotros/
  Productos -> /productos/
    Ganchos y/o Colgadores -> # (agrupador)
    Infantil -> /infantil/
    Junior -> /junior/
    Adulto -> /adulto/
    Interior Femenina -> /interior-femenina/
    Interior Masculina -> /interior-masculina/
    Multiusos -> /multiusos/
    Lavanderia -> /lavanderia/
    MUEBLES -> /categoria-producto/muebles/
  Servicios -> /servicios/
    Serigrafia -> /serigrafia/
  Contactenos -> /contactenos/
  Header icons: WhatsApp | Facebook | YouTube | Email

3. PÁGINAS Y COPY

--- HOMEPAGE ---
Sliders de imagen (sin texto HTML):
  banner-header-imex, slider2-container-imex, slider3-ganchos-corregido
Propuesta hero Next.js:
  H1: "Ganchos y colgadores de alta calidad para tu negocio"
  Sub: "Importacion y exportacion de productos para la industria textil y el comercio en Peru"
  CTA1: "Ver Catalogo" -> /productos/
  CTA2: "Contactenos" -> /contactenos/

--- NOSOTROS ---
Intro: "Bienvenidos a nuestro portal web de IMPOR EXPOR PERU S.A.C.
Somos una empresa peruana cuyo objetivo es brindarle el mejor servicio con valor agregado."

Vision: "Llegar a ser una de las empresas mas reconocidas a nivel
nacional e internacional, brindando productos y servicios de alta calidad."

Mision: "Ser los primeros en atender a nuestros clientes y proveedores
con fines de cooperacion mutua para alcanzar los objetivos de negocios."

Descripcion: "IMPOR EXPOR PERU S.A.C. es una empresa dedicada a la importacion
y exportacion, a la diversificacion e integracion de diferentes productos
y servicios para la industria y el comercio."

--- PRODUCTOS ---
Categorias: Infantil(19) | Junior | Adulto | Interior Femenina | Interior Masculina | Multiusos | Lavanderia | Muebles

1. 05BREF | Multiusos
   Desc: "Manija ideal para exhibir toda clase de medias con la ayuda de un soporte de carton."
   Img1: https://imporexporperu.com/wp-content/uploads/2019/03/Ref_05B.jpg
   Img2: https://imporexporperu.com/wp-content/uploads/2019/03/ref05b_2.jpg
   URL: /producto/05bref/

2. 12-10REF | Infantil
   Desc: "Ideal para exhibir conjuntos. Medidas ideales que permiten un modelado perfecto de las prendas exhibidas."
   Img1: https://imporexporperu.com/wp-content/uploads/2019/03/Ref_12_10_1-1.jpg
   Img2: https://imporexporperu.com/wp-content/uploads/2019/03/Ref_10_33.jpg
   Img3: https://imporexporperu.com/wp-content/uploads/2019/03/ref12_10_T.jpg
   URL: /producto/12-10ref/

3. 12CREF | Infantil
   Desc: "Ideal para exhibir prendas superiores como camisetas, camisas, enterizos y busos."
   Img1: https://imporexporperu.com/wp-content/uploads/2019/03/Ref_12C_1.jpg
   Img2: https://imporexporperu.com/wp-content/uploads/2019/03/Ref_12_30.jpg
   Img3: https://imporexporperu.com/wp-content/uploads/2019/03/Sin_titulo_1.png
   URL: /producto/12cref/

4. 12REF | Infantil
   Desc: "Ideal para exhibir prendas superiores como camisetas, camisas, enterizos y busos."
   Img1: https://imporexporperu.com/wp-content/uploads/2019/03/Ref_12_1.jpg
   Img2: https://imporexporperu.com/wp-content/uploads/2019/03/Ref_12_3.jpg
   Img3: https://imporexporperu.com/wp-content/uploads/2019/03/Ref3.png
   URL: /producto/12ref/

5. 13AREF | Infantil
   Desc: "Ideal para exhibir conjuntos. Medidas ideales que permiten un modelado perfecto de las prendas exhibidas."
   Img1: https://imporexporperu.com/wp-content/uploads/2019/03/Ref_13A_1.jpg
   Img2: https://imporexporperu.com/wp-content/uploads/2019/03/Ref_11_34.jpg
   Img3: https://imporexporperu.com/wp-content/uploads/2019/03/Ref11.png
   URL: /producto/13aref/

6. 13REF | Infantil
   Desc: "Ideal para exhibir conjuntos. Medidas ideales que permiten un modelado perfecto de las prendas exhibidas."
   Img1: https://imporexporperu.com/wp-content/uploads/2019/03/Ref_13_1.jpg
   Img2: https://imporexporperu.com/wp-content/uploads/2019/03/Ref_11_33.jpg
   Img3: https://imporexporperu.com/wp-content/uploads/2019/03/ref13_T.jpg
   URL: /producto/13ref/

7. REF 24A Cabeza metalica | Infantil
   Desc: "CABEZA METALICA - Ideal para exhibir toda clase de prendas inferiores como pantalones, sudaderas, pantalonetas, shorts y faldas."
   Img1: https://imporexporperu.com/wp-content/uploads/2019/03/Ref_24A_Cabeza_Metalica_1.png
   Img2: https://imporexporperu.com/wp-content/uploads/2019/03/Ref13.png
   URL: /producto/ref-24a-cabeza-metalica/

8. REF 30A Cabeza Metalica | Adulto
   Desc: "Ideal para exhibir prendas inferiores de ropa exterior masculina y femenina como pantalones, pantalonetas, sudaderas, faldas y shorts."
   Img1: https://imporexporperu.com/wp-content/uploads/2019/03/Ref_30A_Cabeza_Metalica_1.jpg
   Img2: https://imporexporperu.com/wp-content/uploads/2019/03/Ref_30A_Cabeza_Metalica_2.jpg
   URL: /producto/ref-30a-cabeza-metalica/

9. REF 35 A Cabeza Metalica | Adulto
   Desc: "CABEZA METALICA - Ideal para exhibir prendas inferiores de ropa exterior masculina y femenina como pantalones, pantalonetas, sudaderas, faldas y shorts."
   Img1: https://imporexporperu.com/wp-content/uploads/2019/03/Ref_35A_Cabeza_Metalica.png
   Img2: https://imporexporperu.com/wp-content/uploads/2019/03/Ref_35A_Cabeza_Metalica_2.jpg
   URL: /producto/ref-35-a-cabeza-metalica/

10. REF Rectangular box | Multiusos
    Desc: "Ideal para exhibir toda clase de prendas medianas y pequenas, en una o varias unidades. Ideal para utilizar con la manija07L."
    Img1: https://imporexporperu.com/wp-content/uploads/2019/03/Caja_rectangular.jpg
    Img2: https://imporexporperu.com/wp-content/uploads/2019/03/cajaRectangular_2.jpg
    URL: /producto/ref-rectangular-box/

11. REF-LV1 | Lavanderia
    Desc: "Gancho de lavandería — descripción pendiente. Revisar con cliente."
    Img1: https://imporexporperu.com/wp-content/uploads/2019/03/REF-LV1.jpg.jpeg
    URL: /producto/ref-lv1/

12. REF-LV5 | Lavanderia | SKU: REF-LV5
    Desc: "Gancho de lavandería — descripción pendiente. Revisar con cliente."
    Img1: https://imporexporperu.com/wp-content/uploads/2019/03/REF-LV5.jpg.jpeg
    URL: /producto/ref-lv5/

NOTA GENERAL PRODUCTOS: Confirmar con cliente — dimensiones, material (plástico/metal),
colores disponibles y cantidad mínima de pedido por referencia.

--- SERVICIOS ---
H1: "Nuestros Servicios"
Hero bg: imagen barco carguero contenedores
Servicio: "Serigrafia e impresion para ganchos"
  Desc: "En Impor Expor Peru hacemos el trabajo de serigrafia, el grabado
  de tu marca o logo personalizado con las ultimas tecnicas en serigrafia,
  ofrecemos un buen acabado junto con un gran detalle."
  Feature Durabilidad: "Los insumos y maquinarias usadas en nuestros proyectos
  le dan a nuestros productos resistencia y durabilidad."

--- CONTACTENOS ---
H1: "Contactenos"
Form: Nombre | Email | Telefono | Mensaje | CAPTCHA matematico | Boton: "Enviar"
Mapa: Google My Maps - Santa Anita, Lima, Peru (Av. Marco Puente Llanos)

--- FOOTER ---
Bg: #222222 (o DARK BG #1A1A2E de la nueva paleta)
Col 1: Logo placeholder "IMEX" + "Importación y exportación de productos
        para la industria textil y el comercio en Perú."
Col 2: Links — Inicio | Nosotros | Productos | Servicios | Contáctenos
Col 3: Tel: +51 994 938 229
        Email: (pendiente — confirmar con cliente)
        Redes: WhatsApp | Facebook | YouTube
Copyright: "© 2024 IMPOR EXPOR PERU S.A.C. — Todos los derechos reservados."

4. COLORES ACTUALES (extraidos del DOM)
  body bg:      #000000
  header bg:    #FFFFFF
  footer bg:    #222222
  texto body:   #666666
  h2:           #FFFFFF
  nav link:     #0C71C3 (azul)
  nav activo:   #E02B20 (rojo)
  links:        #2EA3F2 (azul claro)
  botones:      #E02218 (rojo)
  font:         "Open Sans", Arial, sans-serif | 16px body | 26px h2 | 15px nav

5. NUEVA PALETA PROPUESTA PARA NEXT.JS
  PRIMARY    #1B3A6B  azul marino profundo (confianza, B2B, importacion)
  SECONDARY  #E8401C  rojo-naranja vibante (CTAs, herencia marca IMEX)
  ACCENT     #00A8CC  celeste moderno (tecnologia, frescura)
  DARK BG    #1A1A2E  fondo oscuro suave (reemplaza negro puro)
  MID GRAY   #4A4A6A  texto secundario
  LIGHT BG   #F4F6F9  secciones claras (alternancia de fondo)
  WHITE      #FFFFFF  texto sobre oscuro, tarjetas
  SUCCESS    #27AE60  verde disponibilidad
  FONT H     Inter 700 o Poppins 700 (headings)
  FONT B     Inter 400 o Plus Jakarta Sans 400 (body)

6. SITEMAP COMPLETO
  /                            Homepage
  /nosotros/                   About
  /productos/                  Catalogo general
  /infantil/                   Cat. Infantil (19 items, paginado)
  /junior/                     Cat. Junior
  /adulto/                     Cat. Adulto
  /interior-femenina/          Cat. Interior Femenina
  /interior-masculina/         Cat. Interior Masculina
  /multiusos/                  Cat. Multiusos
  /lavanderia/                 Cat. Lavanderia
  /categoria-producto/muebles/ Cat. Muebles
  /servicios/                  Servicios
  /serigrafia/                 Serigrafia
  /contactenos/                Contacto
  /producto/[slug]/            Producto individual

7. SUGERENCIAS LAYOUT NEXT.JS
  HOMEPAGE (orden de secciones):
    1. Navbar sticky: logo + menu + WhatsApp CTA
    2. Hero: gradiente azul marino + headline + CTA primario/secundario
    3. Stats bar: "+10 años en el mercado | +500 clientes satisfechos | 8 categorías de producto"
               (Confirmar cifras reales con el cliente antes de publicar)
    4. Categorias Grid: 8 tarjetas con imagen/icono + nombre
    5. Productos Destacados: grid 4-6 con imagen + nombre + "Ver detalle"
    6. Seccion Serigrafia: imagen mockup + copy + CTA
    7. Vision/Mision: 2 columnas con iconografia
    8. CTA Final: "Listo para cotizar?" + boton WhatsApp directo
    9. Footer: 3 columnas + copyright line

  PRODUCTO INDIVIDUAL:
    - Galeria imagenes (2-3 img por producto)
    - Nombre + categoria + descripcion
    - Boton "Solicitar cotizacion" -> WhatsApp con texto pre-llenado
    - Grid productos relacionados (misma categoria)

8. ARQUITECTURA DE COMPONENTES (Next.js)
  Componentes globales (en /components/):
    <Navbar />            sticky, logo placeholder + menu + icono WhatsApp
    <Footer />            3 columnas: logo+desc | links | contacto+redes
    <WhatsAppCTA />       botón flotante fijo + versión inline para CTAs
    <SEOHead />           meta title + description + og:image por página

  Componentes de sección (homepage):
    <HeroSection />       gradiente azul marino + headline + 2 CTAs
    <StatsBar />          3 números con animación de conteo al hacer scroll
    <CategoryGrid />      8 tarjetas con imagen/icono + nombre + link
    <FeaturedProducts />  grid 4-6 <ProductCard /> destacados
    <ServigrafiaBanner /> imagen mockup + copy + CTA
    <MissionVision />     2 columnas con iconografía
    <FinalCTA />          "¿Listo para cotizar?" + botón WhatsApp directo

  Componentes de catálogo:
    <ProductCard />       imagen + nombre + categoría + "Ver detalle"
    <CategoryBanner />    hero de cada página de categoría
    <ProductGallery />    lightbox con 2-3 imágenes por producto
    <RelatedProducts />   grid de productos de la misma categoría

  Componentes de página:
    <ContactSection />    botón WhatsApp grande + mapa Google My Maps
    <AboutSection />      misión, visión, descripción empresa

9. SEO — META TAGS POR PÁGINA
  /                   title: "IMEX Internacional | Ganchos y Colgadores para la Industria Textil en Perú"
                      desc:  "Importación y exportación de ganchos y colgadores para la industria textil. Calidad y variedad para tu negocio."
  /productos/         title: "Catálogo de Productos | IMEX Internacional"
                      desc:  "Explora nuestras categorías: infantil, junior, adulto, interior femenina, masculina, multiusos, lavandería y muebles."
  /nosotros/          title: "Sobre Nosotros | IMEX Internacional"
                      desc:  "Somos IMPOR EXPOR PERU S.A.C., empresa peruana dedicada a la importación y exportación de productos para el comercio textil."
  /servicios/         title: "Servicios de Serigrafía | IMEX Internacional"
                      desc:  "Grabado de marca y logo personalizado en ganchos con las últimas técnicas de serigrafía."
  /contactenos/       title: "Contáctenos | IMEX Internacional"
                      desc:  "Comunícate con nosotros por WhatsApp o visítanos en Santa Anita, Lima, Perú."
  /producto/[slug]/   title: "[Nombre producto] | IMEX Internacional"
                      desc:  "[Descripción del producto]"
  og:image default:   /public/images/og-default.jpg (crear imagen 1200x630 con logo+slogan)

10. ESTRATEGIA DE IMÁGENES
  Origen:        URLs actuales apuntan a WordPress — deben migrarse antes del lanzamiento
  Destino local: /public/images/products/[slug]-1.jpg, [slug]-2.jpg, [slug]-3.jpg
  Logo:          /public/images/logo-placeholder.svg (texto "IMEX" hasta recibir archivo)
                 /public/images/logo.svg (versión final cuando el cliente la envíe)
  Hero:          Gradiente CSS (#1B3A6B → #00A8CC) — no imagen, mejor rendimiento
  OG image:      /public/images/og-default.jpg (1200×630)
  Herramienta:   Usar siempre <Image> de next/image con width y height explícitos
  Formato:       Preferir .webp para imágenes migradas (mejor compresión)

11. WHATSAPP — MENSAJES PRE-LLENADOS
  Número:          +51994938229
  URL base:        https://wa.me/51994938229
  Msg cotización:  "Hola, me interesa cotizar el producto [NOMBRE DEL PRODUCTO]. ¿Me pueden dar más información?"
                   URL: https://wa.me/51994938229?text=Hola%2C+me+interesa+cotizar+el+producto+[SLUG]
  Msg general:     "Hola, quisiera más información sobre sus productos."
                   URL: https://wa.me/51994938229?text=Hola%2C+quisiera+m%C3%A1s+informaci%C3%B3n+sobre+sus+productos.
  Botón flotante:  Visible en todas las páginas, esquina inferior derecha
  Icono header:    Link a WhatsApp general (msg general)

=======================================================================
  FIN - IMEX IMPOR EXPOR PERU S.A.C.
=======================================================================