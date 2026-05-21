# SEO Roadmap — IMEX Internacional

## Estado actual (Mayo 2026)

### ✅ Implementado

| Elemento | Archivo | Detalle |
|---|---|---|
| Sitemap XML | `app/sitemap.ts` | Auto-generado: homepage, categorías, productos, páginas estáticas |
| robots.txt | `app/robots.ts` | `Allow: /` + referencia al sitemap |
| Metadata root | `app/layout.tsx` | Title, description, OG básico, Twitter card |
| Metadata por página | `app/{page}/page.tsx` | Productos, nosotros, servicios, contactenos |
| Metadata dinámica | `app/producto/[slug]/page.tsx` | `generateMetadata()` por producto |
| Metadata categorías | `app/[categoria]/page.tsx` | `generateMetadata()` por categoría |
| JSON-LD Organization | `app/layout.tsx` | Schema de organización en todas las páginas |
| JSON-LD Product | `app/producto/[slug]/page.tsx` | Schema de producto con SKU, imagen, marca, offers |
| Open Graph imágenes | `app/producto/[slug]/page.tsx` | OG image por producto |
| Twitter Cards | `app/layout.tsx` | `summary_large_image` global |
| URLs limpias | `app/[categoria]/page.tsx` | `/adulto`, `/infantil`, etc. en lugar de query params |
| `generateStaticParams` | productos y categorías | Pre-render estático → crawleable sin JS |
| lang="es" | `app/layout.tsx` | Idioma correcto para Google |

---

## 🔴 Pendiente — Prioridad Alta

### 1. Dominio real en metadata
**Problema:** El sitemap y JSON-LD usan `https://imexinternacional.com` hardcodeado pero el dominio real aún no está confirmado.  
**Acción:** Cuando se defina el dominio, actualizar `BASE_URL` en:
- `app/sitemap.ts`
- `app/robots.ts`
- `app/layout.tsx` (organizationSchema + openGraph.url)
- `app/producto/[slug]/page.tsx` (openGraph)

### 2. Open Graph image global (og:image)
**Problema:** No hay imagen OG para homepage ni páginas estáticas (nosotros, servicios, etc.). Sin `og:image`, los links compartidos en redes sociales no tienen preview.  
**Acción:** Crear `/public/og-image.jpg` (1200×630px) con el logo IMEX y agregarla en `app/layout.tsx`:
```ts
openGraph: {
  images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "IMEX Internacional" }]
}
```

### 3. Google Search Console
**Acción:**
1. Verificar propiedad en [search.google.com/search-console](https://search.google.com/search-console)
2. Subir sitemap: `https://imexinternacional.com/sitemap.xml`
3. Solicitar indexación de las URLs principales

---

## 🟡 Pendiente — Prioridad Media

### 4. JSON-LD BreadcrumbList en páginas de producto
Agrega migas de pan como rich result en Google:
```json
{ "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "/" },
  { "@type": "ListItem", "position": 2, "name": "Productos", "item": "/productos" },
  { "@type": "ListItem", "position": 3, "name": "Gancho Infantil 12", "item": "/producto/12ref" }
]}
```
**Archivo:** `app/producto/[slug]/page.tsx`

### 5. JSON-LD LocalBusiness en Contáctenos
Dirección, teléfono y horario estructurados para Google Maps / búsquedas locales:
```json
{ "@type": "LocalBusiness",
  "name": "IMEX Internacional",
  "address": { "@type": "PostalAddress",
    "streetAddress": "Calle Miami Mz B Lt 23, Urb. Las Garzas de Ate",
    "addressLocality": "Lima", "addressCountry": "PE" },
  "telephone": "+51994938229"
}
```
**Archivo:** `app/contactenos/page.tsx`

### 6. Metadata canónica explícita
Next.js auto-canonicaliza, pero es buena práctica ser explícito:
```ts
alternates: { canonical: "https://imexinternacional.com/producto/12ref" }
```
**Archivos:** `app/producto/[slug]/page.tsx`, `app/[categoria]/page.tsx`

### 7. Descripciones de producto más ricas para SEO
Los productos de lavandería tienen descripción genérica:  
_"Gancho de lavandería resistente — descripción pendiente."_  
Actualizar `data/products.ts` con textos únicos y keywords reales para cada producto.

---

## 🟢 Pendiente — Prioridad Baja

### 8. Sitemap de imágenes
Google tiene un sitemap especial para imágenes de productos.  
Extender `app/sitemap.ts` para incluir `<image:image>` tags.

### 9. Performance / Core Web Vitals
- El video del hero (HLS) puede impactar LCP. Considerar poster frame estático como fallback.
- Las imágenes de productos vienen de un dominio externo (`imporexporperu.com`). Migrarlas a `/public` o Cloudflare Images mejoraría el LCP.
- Revisar con Lighthouse: `npm run build && npx lighthouse http://localhost:3001`

### 10. Structured data para Preguntas Frecuentes
Si se agrega una sección FAQ en `/servicios` o `/nosotros`, agregar JSON-LD `FAQPage` para aparecer en featured snippets de Google.

### 11. hreflang (si hay versión en inglés en el futuro)
Por ahora el sitio es solo español (`lang="es"`). Si se agrega inglés, agregar `hreflang` tags.

---

## Herramientas para verificar

| Herramienta | URL | Qué verifica |
|---|---|---|
| Google Rich Results Test | [search.google.com/test/rich-results](https://search.google.com/test/rich-results) | JSON-LD válido |
| Google Search Console | [search.google.com/search-console](https://search.google.com/search-console) | Indexación, errores |
| Lighthouse | DevTools → Lighthouse | Performance, SEO score |
| Open Graph Debugger | [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug) | OG preview en Facebook |
| Twitter Card Validator | [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator) | Preview en Twitter |
| XML Sitemap validator | [www.xml-sitemaps.com/validate-xml-sitemap.html](https://www.xml-sitemaps.com/validate-xml-sitemap.html) | Sitemap correcto |

---

## Notas técnicas

- **Framework:** Next.js 14 App Router — usa la Metadata API nativa (no `next-seo`)
- **Sitemap:** auto-generado en `/sitemap.xml` vía `app/sitemap.ts`
- **robots.txt:** auto-generado en `/robots.txt` vía `app/robots.ts`
- **JSON-LD:** inyectado como `<script type="application/ld+json">` en el `<body>`
- **`generateStaticParams`:** activo en productos y categorías → pre-render en build time
