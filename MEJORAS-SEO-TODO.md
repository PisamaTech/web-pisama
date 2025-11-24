# 📋 TODO LIST - Mejoras SEO Espacio Pisama

**Fecha creación**: 2025-01-23
**Prioridad**: ALTA - MEDIA - BAJA
**Estimación total**: ~8-12 horas de trabajo

---

## 🔴 PRIORIDAD ALTA (Implementar primero)

### ✅ COMPLETADAS (Ya implementadas)
- [x] Crear componente ServiceSchema.tsx reutilizable
- [x] Agregar Service schema a todas las páginas de /soluciones/*
- [x] Validar estructura de schemas

---

### 1. ⭐ Agregar AggregateRating Schema a Páginas de Soluciones

**Prioridad**: 🔴 ALTA
**Impacto SEO**: ⭐⭐⭐⭐⭐ (Genera estrellas en Google Search)
**Tiempo estimado**: 2-3 horas
**Dificultad**: Media

#### **Archivos a crear:**

**1.1. Crear componente `components/seo/AggregateRatingSchema.tsx`**

```typescript
import React from "react";

interface AggregateRatingSchemaProps {
  ratingValue: string;
  reviewCount: string;
  bestRating?: string;
  worstRating?: string;
}

export default function AggregateRatingSchema({
  ratingValue,
  reviewCount,
  bestRating = "5",
  worstRating = "1",
}: AggregateRatingSchemaProps): React.JSX.Element {
  const jsonLd = {
    "@type": "AggregateRating",
    ratingValue: ratingValue,
    reviewCount: reviewCount,
    bestRating: bestRating,
    worstRating: worstRating,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

**1.2. Modificar `components/seo/ServiceSchema.tsx`**

Agregar soporte para aggregateRating:

```typescript
interface ServiceSchemaProps {
  // ... propiedades existentes
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
    bestRating?: string;
    worstRating?: string;
  };
}

// Dentro del jsonLd, después de areaServed:
if (aggregateRating) {
  jsonLd.aggregateRating = {
    "@type": "AggregateRating",
    ratingValue: aggregateRating.ratingValue,
    reviewCount: aggregateRating.reviewCount,
    bestRating: aggregateRating.bestRating || "5",
    worstRating: aggregateRating.worstRating || "1",
  };
}
```

**1.3. Actualizar TODAS las páginas de /soluciones/* para agregar aggregateRating**

Páginas a actualizar:
- [ ] `/soluciones/psicologos/page.tsx`
- [ ] `/soluciones/coaches/page.tsx`
- [ ] `/soluciones/nutricionistas/page.tsx`
- [ ] `/soluciones/terapeutas-alternativos/page.tsx`
- [ ] `/soluciones/fisioterapeutas/page.tsx`
- [ ] `/soluciones/masajistas/page.tsx`
- [ ] `/soluciones/psiquiatras/page.tsx`

Ejemplo de implementación (agregar al ServiceSchema):

```typescript
<ServiceSchema
  // ... props existentes
  aggregateRating={{
    ratingValue: "4.8",
    reviewCount: "127"
  }}
/>
```

**1.4. Crear archivo de datos para ratings**

Crear `src/ratingsData.ts`:

```typescript
export interface ProfessionRating {
  profession: string;
  ratingValue: string;
  reviewCount: string;
}

export const ratingsData: ProfessionRating[] = [
  {
    profession: "psicologos",
    ratingValue: "4.9",
    reviewCount: "156",
  },
  {
    profession: "coaches",
    ratingValue: "4.8",
    reviewCount: "89",
  },
  {
    profession: "nutricionistas",
    ratingValue: "4.9",
    reviewCount: "103",
  },
  {
    profession: "terapeutas-alternativos",
    ratingValue: "4.7",
    reviewCount: "67",
  },
  {
    profession: "fisioterapeutas",
    ratingValue: "4.8",
    reviewCount: "94",
  },
  {
    profession: "masajistas",
    ratingValue: "4.9",
    reviewCount: "112",
  },
  {
    profession: "psiquiatras",
    ratingValue: "4.8",
    reviewCount: "78",
  },
];
```

**IMPORTANTE**: Estos números son de ejemplo. Debes reemplazarlos con datos reales de:
- Google My Business reviews
- Testimonios reales de clientes
- Sistema de reviews interno (si existe)

**⚠️ ADVERTENCIA LEGAL**:
- NO inventes números de ratings
- NO uses datos falsos (Google penaliza esto severamente)
- Si no tienes reviews reales, NO implementes esta feature hasta tenerlas

---

### 2. 🎨 Agregar Breadcrumbs Visuales a Páginas de Soluciones

**Prioridad**: 🔴 ALTA
**Impacto SEO**: ⭐⭐⭐⭐ (Google prefiere breadcrumbs visuales)
**Tiempo estimado**: 1-2 horas
**Dificultad**: Baja

#### **Pasos:**

**2.1. Crear componente visual de Breadcrumbs**

Crear `components/ui/Breadcrumbs.tsx`:

```typescript
import Link from "next/link";
import React from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center space-x-2 text-sm text-foreground/70">
        {items.map((item, index) => (
          <li key={item.url} className="flex items-center">
            {index > 0 && (
              <svg
                className="w-4 h-4 mx-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {index === items.length - 1 ? (
              <span className="font-medium text-foreground" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.url}
                className="hover:text-secondary-500 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

**2.2. Agregar a TODAS las páginas de soluciones**

En cada página `/soluciones/*/page.tsx`, después del `<main>` tag:

```typescript
import Breadcrumbs from "@/components/ui/Breadcrumbs";

// Dentro del return, después de <main>:
<main className="bg-content2 py-20">
  <div className="container mx-auto max-w-4xl px-4">
    <Breadcrumbs items={breadcrumbItems} />
    {/* resto del contenido */}
  </div>
</main>
```

Páginas a actualizar:
- [ ] `/soluciones/psicologos/page.tsx`
- [ ] `/soluciones/coaches/page.tsx`
- [ ] `/soluciones/nutricionistas/page.tsx`
- [ ] `/soluciones/terapeutas-alternativos/page.tsx`
- [ ] `/soluciones/fisioterapeutas/page.tsx`
- [ ] `/soluciones/masajistas/page.tsx`
- [ ] `/soluciones/psiquiatras/page.tsx`

---

### 3. 📝 Verificar y Corregir Metadata en app/layout.tsx

**Prioridad**: 🔴 ALTA
**Impacto SEO**: ⭐⭐⭐⭐⭐ (Crítico para SEO)
**Tiempo estimado**: 30 minutos
**Dificultad**: Baja

#### **Pasos:**

**3.1. Verificar que metadata se exporta correctamente**

Abrir `app/layout.tsx` y verificar que existe:

```typescript
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  // ... resto de metadata
};
```

**3.2. Si NO existe, agregarlo ANTES del export default function RootLayout**

Ubicación: `app/layout.tsx` línea ~16 (antes del export const metadata existente)

**3.3. Verificar en navegador**

Después de implementar, abrir http://localhost:3000 y:
- Inspeccionar elemento
- Ver `<head>` section
- Verificar que existen tags: `<title>`, `<meta name="description">`, `<meta name="keywords">`

---

## 🟡 PRIORIDAD MEDIA (Implementar después de ALTA)

### 4. 📸 Optimizar Imágenes Open Graph

**Prioridad**: 🟡 MEDIA
**Impacto SEO**: ⭐⭐⭐⭐ (Mejor compartibilidad en redes)
**Tiempo estimado**: 1 hora
**Dificultad**: Baja

#### **Pasos:**

**4.1. Verificar imágenes OG actuales**

Actualmente todas las páginas usan imágenes `.webp` en Open Graph. Algunos crawlers de redes sociales prefieren `.jpg` o `.png`.

**4.2. Crear versiones PNG de imágenes OG**

Ubicación: `public/images/og/`

Crear versiones PNG/JPG de:
- [ ] consultorio1-1.webp → consultorio1-1-og.jpg (1200x630px)
- [ ] consultorio2-1.webp → consultorio2-1-og.jpg (1200x630px)
- [ ] consultorio3-1.webp → consultorio3-1-og.jpg (1200x630px)
- [ ] consultorio5-1.webp → consultorio5-1-og.jpg (1200x630px)

**4.3. Actualizar metadata de Open Graph en cada página de soluciones**

Reemplazar:

```typescript
openGraph: {
  images: [{
    url: "https://www.pisama.uy/images/consultorio1-1.webp",
  }]
}
```

Por:

```typescript
openGraph: {
  images: [{
    url: "https://www.pisama.uy/images/og/consultorio1-1-og.jpg",
    width: 1200,
    height: 630,
    alt: "...",
  }]
}
```

**4.4. Probar en validadores de redes sociales**

Después de deploy:
- [ ] Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- [ ] Twitter Card Validator: https://cards-dev.twitter.com/validator
- [ ] LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

---

### 5. 🔗 Agregar "Soluciones Relacionadas" en Landing Pages

**Prioridad**: 🟡 MEDIA
**Impacto SEO**: ⭐⭐⭐ (Mejora internal linking)
**Tiempo estimado**: 2 horas
**Dificultad**: Media

#### **Pasos:**

**5.1. Crear componente RelatedSolutions**

Crear `components/soluciones/RelatedSolutions.tsx`:

```typescript
import { Card, CardBody } from "@heroui/card";
import Link from "next/link";

interface RelatedSolution {
  title: string;
  description: string;
  href: string;
  emoji: string;
}

interface RelatedSolutionsProps {
  currentProfession: string;
  solutions: RelatedSolution[];
}

export default function RelatedSolutions({
  currentProfession,
  solutions,
}: RelatedSolutionsProps) {
  return (
    <section className="my-16 p-8 bg-content1 rounded-2xl">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Otras Soluciones para Profesionales
      </h2>
      <p className="text-center text-foreground/80 mb-8">
        Espacio PISAMA también ofrece consultorios para:
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {solutions
          .filter((sol) => !sol.href.includes(currentProfession))
          .slice(0, 3)
          .map((solution) => (
            <Link key={solution.href} href={solution.href}>
              <Card
                isPressable
                className="hover:scale-105 transition-transform"
              >
                <CardBody className="text-center">
                  <div className="text-5xl mb-3">{solution.emoji}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {solution.description}
                  </p>
                </CardBody>
              </Card>
            </Link>
          ))}
      </div>
      <div className="text-center mt-6">
        <Link
          href="/soluciones"
          className="text-secondary-500 font-semibold hover:text-secondary-400"
        >
          Ver todas las soluciones →
        </Link>
      </div>
    </section>
  );
}
```

**5.2. Crear archivo de datos**

Crear `src/solucionesData.ts`:

```typescript
export const allSolutions = [
  {
    title: "Psicólogos",
    description: "Privacidad acústica y encuadre profesional",
    href: "/soluciones/psicologos",
    emoji: "🧠",
  },
  {
    title: "Coaches",
    description: "Espacio para transformación y crecimiento",
    href: "/soluciones/coaches",
    emoji: "🎯",
  },
  {
    title: "Nutricionistas",
    description: "Ambiente que inspira cambio saludable",
    href: "/soluciones/nutricionistas",
    emoji: "🥗",
  },
  {
    title: "Terapeutas Alternativos",
    description: "Energía armónica y camilla disponible",
    href: "/soluciones/terapeutas-alternativos",
    emoji: "🌿",
  },
  {
    title: "Fisioterapeutas",
    description: "Espacios amplios con ergonomía garantizada",
    href: "/soluciones/fisioterapeutas",
    emoji: "🦴",
  },
  {
    title: "Masajistas",
    description: "Camilla incluida y espacio 360°",
    href: "/soluciones/masajistas",
    emoji: "💆",
  },
  {
    title: "Psiquiatras",
    description: "Privacidad y seguridad médica",
    href: "/soluciones/psiquiatras",
    emoji: "⚕️",
  },
];
```

**5.3. Agregar a cada página de soluciones**

Antes del `<CtaSection>` final en cada página:

```typescript
import RelatedSolutions from "@/components/soluciones/RelatedSolutions";
import { allSolutions } from "@/src/solucionesData";

// Antes de </main>:
<RelatedSolutions
  currentProfession="psicologos"
  solutions={allSolutions}
/>
```

Páginas a actualizar:
- [ ] `/soluciones/psicologos/page.tsx` (currentProfession="psicologos")
- [ ] `/soluciones/coaches/page.tsx` (currentProfession="coaches")
- [ ] `/soluciones/nutricionistas/page.tsx` (currentProfession="nutricionistas")
- [ ] `/soluciones/terapeutas-alternativos/page.tsx` (currentProfession="terapeutas-alternativos")
- [ ] `/soluciones/fisioterapeutas/page.tsx` (currentProfession="fisioterapeutas")
- [ ] `/soluciones/masajistas/page.tsx` (currentProfession="masajistas")
- [ ] `/soluciones/psiquiatras/page.tsx` (currentProfession="psiquiatras")

---

### 6. 📊 Agregar Review Schema (si hay testimonios reales)

**Prioridad**: 🟡 MEDIA
**Impacto SEO**: ⭐⭐⭐⭐ (Genera confianza y puede mostrar snippets)
**Tiempo estimado**: 2-3 horas
**Dificultad**: Media

**⚠️ PREREQUISITO**: Necesitas tener testimonios REALES de clientes

#### **Pasos:**

**6.1. Crear componente ReviewSchema**

Crear `components/seo/ReviewSchema.tsx`:

```typescript
import React from "react";

interface Review {
  author: string;
  rating: string;
  reviewBody: string;
  datePublished: string;
}

interface ReviewSchemaProps {
  reviews: Review[];
}

export default function ReviewSchema({ reviews }: ReviewSchemaProps) {
  const reviewsJsonLd = reviews.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
    />
  );
}
```

**6.2. Crear archivo de datos de reviews**

Crear `src/reviewsData.ts`:

```typescript
export interface ProfessionReview {
  profession: string;
  reviews: Array<{
    author: string;
    rating: string;
    reviewBody: string;
    datePublished: string;
  }>;
}

// IMPORTANTE: Reemplazar con reviews REALES
export const reviewsData: ProfessionReview[] = [
  {
    profession: "psicologos",
    reviews: [
      {
        author: "Dra. María González",
        rating: "5",
        reviewBody: "Excelente espacio para atención psicológica. La privacidad acústica es perfecta y el sistema de reservas muy práctico.",
        datePublished: "2024-11-15",
      },
      {
        author: "Lic. Carlos Rodríguez",
        rating: "5",
        reviewBody: "Como psicólogo, valoro mucho la calidad del ambiente y la profesionalidad del espacio. Mis pacientes se sienten muy cómodos.",
        datePublished: "2024-10-22",
      },
    ],
  },
  // ... agregar para cada profesión
];
```

**6.3. Modificar ServiceSchema para aceptar reviews**

En `components/seo/ServiceSchema.tsx`, agregar:

```typescript
interface ServiceSchemaProps {
  // ... props existentes
  reviews?: Array<{
    author: string;
    rating: string;
    reviewBody: string;
    datePublished: string;
  }>;
}

// En el jsonLd, después de offers:
if (reviews && reviews.length > 0) {
  jsonLd.review = reviews.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  }));
}
```

**6.4. Actualizar páginas de soluciones**

Agregar a cada ServiceSchema:

```typescript
<ServiceSchema
  // ... props existentes
  reviews={reviewsData.find(r => r.profession === "psicologos")?.reviews}
/>
```

**⚠️ ADVERTENCIA CRÍTICA**:
- NO uses reviews inventados
- Obtén consentimiento escrito de los clientes
- Usa nombres reales con permiso, o anonimiza ("Psicólogo de Montevideo")
- Las fechas deben ser reales
- Google penaliza reviews falsas severamente

---

## 🟢 PRIORIDAD BAJA (Nice to have)

### 7. 🕐 Agregar hoursAvailable a Service Schema

**Prioridad**: 🟢 BAJA
**Impacto SEO**: ⭐⭐ (Información útil pero no crítica)
**Tiempo estimado**: 30 minutos
**Dificultad**: Baja

#### **Pasos:**

**7.1. Modificar ServiceSchema.tsx**

Agregar al interface:

```typescript
interface ServiceSchemaProps {
  // ... props existentes
  hoursAvailable?: {
    opens: string;
    closes: string;
    dayOfWeek?: string[];
  };
}

// En el jsonLd, después de areaServed:
if (hoursAvailable) {
  jsonLd.hoursAvailable = {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: hoursAvailable.dayOfWeek || [
      "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday", "Sunday"
    ],
    opens: hoursAvailable.opens,
    closes: hoursAvailable.closes,
  };
}
```

**7.2. Actualizar todas las páginas de soluciones**

Agregar a cada ServiceSchema:

```typescript
<ServiceSchema
  // ... props existentes
  hoursAvailable={{
    opens: "07:00",
    closes: "23:00"
  }}
/>
```

---

### 8. 📹 Agregar VideoObject Schema para YouTube Tour

**Prioridad**: 🟢 BAJA
**Impacto SEO**: ⭐⭐⭐ (Puede generar video rich snippets)
**Tiempo estimado**: 1 hora
**Dificultad**: Media

#### **Pasos:**

**8.1. Crear componente VideoObjectSchema**

Crear `components/seo/VideoObjectSchema.tsx`:

```typescript
import React from "react";

interface VideoObjectSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
  embedUrl: string;
  duration?: string; // formato ISO 8601: PT2M30S = 2 min 30 seg
}

export default function VideoObjectSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  duration = "PT2M30S",
}: VideoObjectSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: name,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate,
    contentUrl: contentUrl,
    embedUrl: embedUrl,
    duration: duration,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

**8.2. Agregar a homepage y páginas con video**

En `app/page.tsx` y páginas de soluciones que tienen el video tour:

```typescript
import VideoObjectSchema from "@/components/seo/VideoObjectSchema";

// Dentro del return, después de otros schemas:
<VideoObjectSchema
  name="Tour Virtual Espacio PISAMA - Consultorios en Montevideo"
  description="Recorre nuestros consultorios profesionales en Parque Rodó. Espacios diseñados para psicólogos, coaches, nutricionistas y terapeutas."
  thumbnailUrl="https://www.pisama.uy/images/video-thumbnail.jpg"
  uploadDate="2024-01-15"
  contentUrl="https://www.youtube.com/watch?v=_0-Eh-JvQys"
  embedUrl="https://www.youtube.com/embed/_0-Eh-JvQys"
  duration="PT3M45S"
/>
```

**8.3. Crear thumbnail de video**

- [ ] Extraer frame del video de YouTube
- [ ] Optimizar a 1280x720px
- [ ] Guardar como `public/images/video-thumbnail.jpg`

---

### 9. 🗺️ Mejorar hasOfferCatalog con Categorías

**Prioridad**: 🟢 BAJA
**Impacto SEO**: ⭐⭐ (Mejor organización, no crítico)
**Tiempo estimado**: 1-2 horas
**Dificultad**: Media

#### **Pasos:**

**9.1. Modificar ServiceSchema.tsx**

Cambiar el tipo de availableFeatures:

```typescript
interface ServiceSchemaProps {
  // ... props existentes
  availableFeatures?: string[] | {
    category: string;
    features: string[];
  }[];
}

// En el jsonLd:
if (availableFeatures) {
  if (Array.isArray(availableFeatures) &&
      typeof availableFeatures[0] === 'string') {
    // Mantener compatibilidad con array simple
    jsonLd.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: `Características de ${serviceName}`,
      itemListElement: availableFeatures.map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
      })),
    };
  } else {
    // Nuevo formato con categorías
    jsonLd.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: `Servicios de ${serviceName}`,
      itemListElement: availableFeatures.map((cat) => ({
        "@type": "OfferCatalog",
        name: cat.category,
        itemListElement: cat.features.map((feature) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: feature,
          },
        })),
      })),
    };
  }
}
```

**9.2. Actualizar páginas (opcional)**

Cambiar de:

```typescript
availableFeatures={[
  "Privacidad acústica absoluta",
  "Ambiente diseñado por psicólogos",
  // ...
]}
```

A:

```typescript
availableFeatures={[
  {
    category: "Infraestructura",
    features: [
      "Privacidad acústica absoluta",
      "Aire acondicionado",
      "Sala de espera privada",
    ]
  },
  {
    category: "Servicios Digitales",
    features: [
      "Reservas online en tiempo real",
      "WiFi de alta velocidad",
    ]
  },
  {
    category: "Ambiente Profesional",
    features: [
      "Ambiente diseñado por psicólogos",
      "Limpieza impecable garantizada",
    ]
  }
]}
```

---

### 10. 🔍 Expandir Keywords por Barrio

**Prioridad**: 🟢 BAJA
**Impacto SEO**: ⭐⭐⭐ (Long-tail keywords)
**Tiempo estimado**: 1 hora
**Dificultad**: Baja

#### **Pasos:**

**10.1. Crear archivo de keywords extendidas**

Crear `src/extendedKeywords.ts`:

```typescript
export const locationKeywords = [
  // Keywords existentes
  "alquiler consultorio parque rodó",
  "consultorio montevideo",

  // Nuevas keywords por barrio cercano
  "consultorio cerca de pocitos",
  "consultorio cerca de centro montevideo",
  "consultorio cerca de cordón",
  "consultorio cerca de punta carretas",
  "consultorio cerca de parque batlle",
  "consultorio accesible montevideo",
  "consultorio bien ubicado montevideo",

  // Keywords por modalidad
  "consultorio sin contrato montevideo",
  "consultorio flexible montevideo",
  "consultorio por sesión montevideo",
  "consultorio sin compromiso mensual",
  "alquiler consultorio equipado montevideo",
];

export const professionKeywordVariants = {
  psicologos: [
    "consultorio psicologia clinica",
    "espacio terapia individual",
    "sala consulta psicoterapia",
  ],
  coaches: [
    "espacio coaching empresarial",
    "sala coaching personal",
  ],
  // ... etc
};
```

**10.2. Actualizar metadata de páginas**

Agregar estas keywords al array de keywords en cada página de soluciones.

**10.3. Incorporar naturalmente en contenido**

Revisar el contenido de cada landing page y asegurarse de mencionar naturalmente:
- Barrios cercanos (Pocitos, Centro, Cordón)
- Modalidades (sin contrato, flexible, por hora)
- Variantes de búsqueda

---

### 11. 📱 Verificar Mobile-Friendliness

**Prioridad**: 🟢 BAJA
**Impacto SEO**: ⭐⭐⭐⭐ (Crítico pero probablemente ya OK)
**Tiempo estimado**: 1-2 horas
**Dificultad**: Baja-Media

#### **Checklist de verificación:**

- [ ] Touch targets mínimo 48x48px en botones
- [ ] Texto legible sin zoom (mínimo 16px)
- [ ] Viewport responsive configurado (ya está en layout.tsx)
- [ ] Imágenes responsive (verificar Next.js Image component)
- [ ] Formularios usables en móvil
- [ ] Menú hamburguesa funcional

#### **Herramientas de prueba:**

- [ ] Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- [ ] Lighthouse Mobile en Chrome DevTools
- [ ] Probar en dispositivos reales (Android, iOS)

**Si hay problemas, documentar y crear issues específicos**

---

### 12. ⚡ Performance Optimization

**Prioridad**: 🟢 BAJA
**Impacto SEO**: ⭐⭐⭐⭐ (Core Web Vitals son ranking factor)
**Tiempo estimado**: 2-4 horas
**Dificultad**: Media-Alta

#### **12.1. Preload Critical Fonts**

En `app/layout.tsx`, agregar en `<head>`:

```typescript
<head>
  <link
    rel="preload"
    href="/fonts/your-font.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
</head>
```

#### **12.2. Agregar priority a imágenes hero**

En componentes con imágenes above-the-fold:

```typescript
<Image
  src={heroImage}
  alt="..."
  priority // Esta prop carga la imagen inmediatamente
  width={1200}
  height={630}
/>
```

Componentes a revisar:
- [ ] `components/homepage/HeroSection.tsx`
- [ ] Landing pages de soluciones (imagen principal)

#### **12.3. Lazy load PhotoSwipe gallery**

Modificar imports de PhotoSwipe para lazy loading:

```typescript
import dynamic from 'next/dynamic';

const PhotoSwipeGallery = dynamic(
  () => import('react-photoswipe-gallery').then(mod => mod.Gallery),
  { ssr: false, loading: () => <div>Cargando galería...</div> }
);
```

#### **12.4. Optimizar Google Analytics**

En `app/layout.tsx`, cambiar strategy:

```typescript
<Script
  strategy="afterInteractive" // En lugar de async
  src="https://www.googletagmanager.com/gtag/js?id=G-4C6SK93ENE"
/>
```

#### **12.5. Verificar performance**

- [ ] Lighthouse en producción (objetivo: >90 en todas las métricas)
- [ ] PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Web Vitals en Google Search Console

---

## 🔄 POST-DEPLOYMENT: Validación y Monitoreo

### 13. ✅ Validar Schemas en Producción

**Después del deploy a producción:**

- [ ] Google Rich Results Test para CADA página de soluciones:
  - https://search.google.com/test/rich-results
  - Probar: /soluciones/psicologos
  - Probar: /soluciones/coaches
  - Probar: /soluciones/nutricionistas
  - Probar: /soluciones/terapeutas-alternativos
  - Probar: /soluciones/fisioterapeutas
  - Probar: /soluciones/masajistas
  - Probar: /soluciones/psiquiatras

- [ ] Schema.org Validator:
  - https://validator.schema.org/
  - Validar JSON-LD de cada página

- [ ] Facebook Sharing Debugger:
  - https://developers.facebook.com/tools/debug/
  - Verificar Open Graph images

- [ ] Twitter Card Validator:
  - https://cards-dev.twitter.com/validator
  - Verificar Twitter cards

---

### 14. 📊 Configurar Monitoreo en Google Search Console

- [ ] Verificar propiedad del sitio en GSC
- [ ] Enviar sitemap.xml
- [ ] Monitorear:
  - Cobertura de índice
  - Rich results status
  - Core Web Vitals
  - Errores de structured data
  - Performance de queries

---

## 📝 NOTAS IMPORTANTES

### ⚠️ Antes de implementar CUALQUIER feature con datos de usuarios:

1. **AggregateRating y Reviews**: SOLO usar datos reales
2. **GDPR/Privacidad**: Obtener consentimiento para usar testimonios
3. **Verificar legalmente**: No violar términos de servicio de Google
4. **Documentar fuentes**: De dónde vienen los ratings/reviews

### 🔧 Orden recomendado de implementación:

**Día 1** (4-5 horas):
1. Breadcrumbs visuales (TODO #2)
2. Verificar metadata en layout (TODO #3)
3. Agregar Related Solutions (TODO #5)

**Día 2** (4-5 horas):
4. AggregateRating (TODO #1) - SOLO si tienes datos reales
5. Optimizar imágenes OG (TODO #4)
6. hoursAvailable (TODO #7)

**Día 3** (Opcional, si tienes reviews reales):
7. Review Schema (TODO #6)
8. VideoObject Schema (TODO #8)

**Día 4** (Performance):
9. Performance optimizations (TODO #12)
10. Mobile-friendliness audit (TODO #11)

**Post-Deploy**:
11. Validación completa (TODO #13)
12. Monitoreo GSC (TODO #14)

---

## ✅ CHECKLIST FINAL

Antes de marcar como completo:

- [ ] Todos los schemas validan en Schema.org Validator
- [ ] Google Rich Results Test pasa sin errores
- [ ] Breadcrumbs visuales en todas las páginas de soluciones
- [ ] No hay errores de TypeScript (`npm run build`)
- [ ] Lighthouse score >90 en producción
- [ ] Open Graph images se ven bien en Facebook/Twitter
- [ ] Google Search Console configurado
- [ ] Sitemap enviado a GSC

---

**Última actualización**: 2025-01-23
**Creado por**: Claude (Auditoría SEO Espacio Pisama)
