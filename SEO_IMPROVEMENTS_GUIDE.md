# 🚀 Guía de Implementación - Mejoras SEO Técnicas

**Fecha**: 2025-11-22
**Sitio**: Espacio PISAMA (www.pisama.uy)
**Total de tareas**: 21

---

## 🔴 PRIORIDAD CRÍTICA - Implementar HOY

### 1. Añadir páginas /soluciones/ al sitemap.ts

**Archivo**: `app/sitemap.ts`
**Líneas**: 32-48

**Código a añadir** en el array `staticRoutes`:

```typescript
const staticRoutes = [
  "/",
  "/consultorios",
  "/precios",
  "/disponibilidad",
  "/app-de-reservas",
  "/guia-de-uso",
  "/guia-de-uso/agendar-primera-reserva",
  "/guia-de-uso/como-reagendar-una-reserva-penalizada",
  "/guia-de-uso/facturacion-y-descuentos",
  "/guia-de-uso/politica-de-cancelacion",
  "/guia-de-uso/tipos-de-reserva",
  "/sobre-nosotros",
  "/contacto",
  "/terminos-y-condiciones",
  "/blog",
  // ✅ AÑADIR ESTAS 4 RUTAS:
  "/soluciones",
  "/soluciones/psicologos",
  "/soluciones/nutricionistas",
  "/soluciones/terapeutas-alternativos",
];
```

---

### 2. Eliminar URLs obsoletas de blog del sitemap.ts

**Archivo**: `app/sitemap.ts`
**Líneas**: 9-24

**Acción**: Eliminar completamente la función `getPublishedBlogArticles()` y su uso.

**Reemplazar líneas 9-24** con:

```typescript
// Las antiguas URLs de blog ahora hacen redirect 301 a /soluciones/
// Por lo tanto, no deben estar en el sitemap
async function getPublishedBlogArticles() {
  // TODO: Cuando tengas artículos de blog educativos nuevos, añádelos aquí
  return [];
}
```

**Alternativa más limpia**: Eliminar la función completa y en la línea 67, reemplazar:

```typescript
// ANTES:
return [...staticUrls, ...articleUrls];

// DESPUÉS:
return staticUrls;
```

---

## 🟠 PRIORIDAD ALTA - Implementar esta semana

### 3-11. Añadir Canonical URLs a todas las páginas principales

**Template para todas las páginas**:

#### 3. `/consultorios/page.tsx`
```typescript
export const metadata: Metadata = {
  title: "Consultorios Premium y Estándar en Parque Rodó | Espacio Pisama",
  description: "...",
  keywords: [...],
  // ✅ AÑADIR:
  alternates: {
    canonical: "/consultorios",
  },
};
```

#### 4. `/precios/page.tsx`
```typescript
alternates: {
  canonical: "/precios",
},
```

#### 5. `/disponibilidad/page.tsx`
```typescript
alternates: {
  canonical: "/disponibilidad",
},
```

#### 6. `/blog/page.tsx`
```typescript
alternates: {
  canonical: "/blog",
},
```

#### 7. `/soluciones/page.tsx`
```typescript
alternates: {
  canonical: "/soluciones",
},
```

#### 8. `/soluciones/psicologos/page.tsx`
```typescript
alternates: {
  canonical: "/soluciones/psicologos",
},
```

#### 9. `/soluciones/nutricionistas/page.tsx`
```typescript
alternates: {
  canonical: "/soluciones/nutricionistas",
},
```

#### 10. `/soluciones/terapeutas-alternativos/page.tsx`
```typescript
alternates: {
  canonical: "/soluciones/terapeutas-alternativos",
},
```

---

### 11-13. Añadir Open Graph específico a páginas de soluciones

**Template Open Graph completo**:

#### 11. `/soluciones/psicologos/page.tsx`

Añadir **después** de `keywords`:

```typescript
export const metadata: Metadata = {
  title: "Alquiler de Consultorios para Psicólogos por Hora en Parque Rodó, Montevideo | PISAMA",
  description: "Consultorio psicológico por hora en Parque Rodó desde $200...",
  keywords: [...],
  alternates: {
    canonical: "/soluciones/psicologos",
  },
  // ✅ AÑADIR ESTO:
  openGraph: {
    title: "Alquiler de Consultorios para Psicólogos en Montevideo | PISAMA",
    description: "Consultorio psicológico por hora con privacidad acústica absoluta en Parque Rodó. Desde $200/hora sin compromiso mensual.",
    url: "https://www.pisama.uy/soluciones/psicologos",
    siteName: "Espacio Pisama",
    locale: "es_UY",
    type: "article",
    images: [
      {
        url: "https://www.pisama.uy/images/consultorio1-1.webp",
        width: 1200,
        height: 630,
        alt: "Consultorio profesional para psicólogos en Parque Rodó, Montevideo",
      },
    ],
  },
};
```

#### 12. `/soluciones/nutricionistas/page.tsx`

```typescript
openGraph: {
  title: "Alquiler de Consultorios para Nutricionistas en Montevideo | PISAMA",
  description: "Consultorio nutricional por hora en Parque Rodó. Ambiente profesional, privacidad total y reservas online desde $200/hora.",
  url: "https://www.pisama.uy/soluciones/nutricionistas",
  siteName: "Espacio Pisama",
  locale: "es_UY",
  type: "article",
  images: [
    {
      url: "https://www.pisama.uy/images/consultorio2-1.webp",
      width: 1200,
      height: 630,
      alt: "Consultorio para nutricionistas en Montevideo con espacio funcional completo",
    },
  ],
},
```

#### 13. `/soluciones/terapeutas-alternativos/page.tsx`

```typescript
openGraph: {
  title: "Alquiler de Consultorios para Terapias Alternativas en Montevideo | PISAMA",
  description: "Consultorio con camilla disponible para terapeutas alternativos en Parque Rodó. Ambiente armónico y reservas online desde $200/hora.",
  url: "https://www.pisama.uy/soluciones/terapeutas-alternativos",
  siteName: "Espacio Pisama",
  locale: "es_UY",
  type: "article",
  images: [
    {
      url: "https://www.pisama.uy/images/consultorio3-1.webp",
      width: 1200,
      height: 630,
      alt: "Consultorio para terapias alternativas con camilla en Montevideo",
    },
  ],
},
```

---

### 14. Añadir Twitter Cards al layout.tsx

**Archivo**: `app/layout.tsx`
**Ubicación**: Después de `openGraph` (línea 38)

```typescript
export const metadata: Metadata = {
  icons: {
    icon: "/EspacioPisama32.png",
  },
  authors: [{ name: "Gastón Campo", url: siteConfig.url }],
  creator: "Gastón Campo",
  openGraph: {
    // ... existing openGraph
  },
  // ✅ AÑADIR ESTO:
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@espacio_pisama", // Cambia si tienes cuenta de Twitter
    images: [siteConfig.ogImage],
  },
};
```

---

## 🟡 PRIORIDAD MEDIA - Implementar este mes

### 15. Crear app/manifest.ts para PWA

**Crear nuevo archivo**: `app/manifest.ts`

```typescript
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Espacio PISAMA - Alquiler de Consultorios en Montevideo",
    short_name: "PISAMA",
    description:
      "Alquiler de consultorios por hora en Parque Rodó, Montevideo. Reserva online, precios flexibles y ambiente profesional.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0070f3", // Usa tu color primario
    icons: [
      {
        src: "/EspacioPisama32.png",
        sizes: "32x32",
        type: "image/png",
      },
      // TODO: Necesitarás crear estos iconos en diferentes tamaños
      // {
      //   src: "/icon-192.png",
      //   sizes: "192x192",
      //   type: "image/png",
      // },
      // {
      //   src: "/icon-512.png",
      //   sizes: "512x512",
      //   type: "image/png",
      // },
    ],
  };
}
```

**Nota**: Necesitarás crear íconos de 192x192 y 512x512 píxeles a partir de tu logo.

---

### 16-18. Añadir Schema.org Article a páginas de soluciones

**Template Schema.org Article**:

#### 16. `/soluciones/psicologos/page.tsx`

En el componente, **antes del return**, añadir:

```typescript
export default function ArticuloPsicologosPage(): React.JSX.Element {
  // Breadcrumb para SEO
  const breadcrumbItems = [
    // ... existing breadcrumb
  ];

  // ✅ AÑADIR ESTO:
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Alquiler de Consultorios para Psicólogos por Hora en Montevideo",
    description:
      "Guía completa sobre alquiler de consultorios psicológicos en Parque Rodó. Privacidad acústica, reservas online y precios flexibles.",
    image: [
      "https://www.pisama.uy/images/consultorio1-1.webp",
      "https://www.pisama.uy/images/salaespera-1.webp",
    ],
    datePublished: "2024-09-15", // Ajusta a fecha real
    dateModified: new Date().toISOString().split("T")[0],
    author: {
      "@type": "Person",
      name: "Gastón Campo",
      url: "https://www.pisama.uy/sobre-nosotros",
    },
    publisher: {
      "@type": "Organization",
      name: "Espacio PISAMA",
      logo: {
        "@type": "ImageObject",
        url: "https://www.pisama.uy/images/Logo-Espacio-Pisama-Texturado-300px.png",
      },
    },
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* ✅ AÑADIR ESTE SCRIPT: */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="bg-content2 py-20">
        {/* ... resto del contenido */}
      </main>
    </>
  );
}
```

#### 17. `/soluciones/nutricionistas/page.tsx`

```typescript
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Alquiler de Consultorios para Nutricionistas en Montevideo",
  description:
    "Consultorio nutricional profesional por hora en Parque Rodó. Todo lo que necesitás saber para encontrar tu espacio ideal.",
  image: [
    "https://www.pisama.uy/images/consultorio2-1.webp",
  ],
  datePublished: "2024-10-15", // Ajusta a fecha real
  dateModified: new Date().toISOString().split("T")[0],
  author: {
    "@type": "Person",
    name: "Gastón Campo",
    url: "https://www.pisama.uy/sobre-nosotros",
  },
  publisher: {
    "@type": "Organization",
    name: "Espacio PISAMA",
    logo: {
      "@type": "ImageObject",
      url: "https://www.pisama.uy/images/Logo-Espacio-Pisama-Texturado-300px.png",
    },
  },
};
```

#### 18. `/soluciones/terapeutas-alternativos/page.tsx`

```typescript
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Alquiler de Consultorios para Terapias Alternativas en Montevideo",
  description:
    "Espacio para terapeutas holísticos en Parque Rodó. Camilla disponible, ambiente armónico y flexibilidad total.",
  image: [
    "https://www.pisama.uy/images/consultorio3-1.webp",
  ],
  datePublished: "2024-10-20", // Ajusta a fecha real
  dateModified: new Date().toISOString().split("T")[0],
  author: {
    "@type": "Person",
    name: "Gastón Campo",
    url: "https://www.pisama.uy/sobre-nosotros",
  },
  publisher: {
    "@type": "Organization",
    name: "Espacio PISAMA",
    logo: {
      "@type": "ImageObject",
      url: "https://www.pisama.uy/images/Logo-Espacio-Pisama-Texturado-300px.png",
    },
  },
};
```

---

### 19. Optimizar prioridades en sitemap.ts

**Archivo**: `app/sitemap.ts`
**Líneas**: 50-55

**Reemplazar**:

```typescript
// ANTES:
const staticUrls = staticRoutes.map((route) => ({
  url: `${baseUrl}${route}`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: route === "/" ? 1.0 : 0.8,
}));

// DESPUÉS:
const staticUrls = staticRoutes.map((route) => {
  // Prioridades diferenciadas según importancia
  let priority = 0.8; // default

  if (route === "/") priority = 1.0;
  else if (route.startsWith("/soluciones/") && route !== "/soluciones") priority = 0.9;
  else if (route === "/soluciones") priority = 0.9;
  else if (["/consultorios", "/precios", "/disponibilidad"].includes(route)) priority = 0.8;
  else if (route.startsWith("/guia-de-uso")) priority = 0.6;
  else if (route === "/terminos-y-condiciones") priority = 0.3;

  return {
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  };
});
```

---

## 🟢 PRIORIDAD BAJA - Cuando tengas tiempo

### 20. Mejorar alt text de Schema.org en layout.tsx

**Archivo**: `app/layout.tsx`
**Línea**: 34

**Reemplazar**:

```typescript
// ANTES:
alt: `Logo e interior de ${siteConfig.name}`,

// DESPUÉS:
alt: "Logo de Espacio PISAMA con vista interior de consultorios profesionales para psicólogos, nutricionistas y terapeutas en Parque Rodó, Montevideo",
```

---

### 21. Añadir Schema.org Offer para página de precios

**Archivo**: `app/precios/page.tsx`

**En el componente principal**, añadir:

```typescript
const offerJsonLd = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Alquiler de Consultorios por Hora",
  description: "Alquiler flexible de consultorios profesionales en Montevideo",
  price: "200",
  priceCurrency: "UYU",
  priceSpecification: {
    "@type": "UnitPriceSpecification",
    price: "200",
    priceCurrency: "UYU",
    unitText: "hora",
  },
  availability: "https://schema.org/InStock",
  url: "https://www.pisama.uy/precios",
  seller: {
    "@type": "LocalBusiness",
    name: "Espacio PISAMA",
  },
};

return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }}
    />
    {/* ... resto del contenido */}
  </>
);
```

---

## ✅ Checklist de Verificación Post-Implementación

Después de implementar todas las mejoras, verificar:

- [ ] Sitemap accesible en: https://www.pisama.uy/sitemap.xml
- [ ] Validar sitemap en: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- [ ] Verificar Open Graph tags con: https://www.opengraph.xyz/
- [ ] Validar Twitter Cards con: https://cards-dev.twitter.com/validator
- [ ] Verificar structured data con: https://validator.schema.org/
- [ ] Probar canonical URLs inspeccionando HTML en páginas clave
- [ ] Enviar sitemap actualizado a Google Search Console
- [ ] Verificar manifest.json en: https://www.pisama.uy/manifest.json
- [ ] Probar PWA "Add to Home Screen" en móvil
- [ ] Ejecutar Lighthouse audit y verificar mejoras en SEO score

---

## 📊 Impacto Esperado

Después de implementar todas estas mejoras:

- **Indexación**: +100% de páginas importantes en sitemap
- **Compartir Social**: Mejora visual en Facebook, Twitter, LinkedIn
- **Rich Snippets**: Mayor probabilidad de aparecer con datos estructurados
- **PWA**: Mejor experiencia móvil y engagement
- **Canonical**: Eliminación de riesgos de contenido duplicado
- **Lighthouse SEO Score**: Potencial aumento de 80-85 a 95-100

---

**Fecha de creación**: 2025-11-22
**Última actualización**: 2025-11-22
**Creado por**: Claude Code
