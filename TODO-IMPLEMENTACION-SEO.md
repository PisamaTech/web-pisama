# 📋 TODO LIST - Implementación Mejoras SEO
**Fecha creación**: 2025-11-23
**Estimación total**: 8-12 horas
**Orden de implementación**: Seguir el orden de esta lista

---

## 🔴 PRIORIDAD ALTA - Día 1 (4-5 horas)

### ✅ TAREA 1: Corregir Typo en Disponibilidad
**Tiempo estimado**: 2 minutos
**Archivo**: `app/disponibilidad/page.tsx`
**Línea**: 23

**Cambio a realizar**:
```typescript
// ❌ ANTES (línea 23):
title="¿Encontraste el horarios que necesitabas?"

// ✅ DESPUÉS:
title="¿Encontraste el horario que necesitabas?"
```

**Pasos**:
1. Abrir `app/disponibilidad/page.tsx`
2. Ir a línea 23
3. Cambiar "horarios" → "horario"
4. Guardar

---

### ✅ TAREA 2: Agregar metadataBase en Layout Global
**Tiempo estimado**: 5 minutos
**Archivo**: `app/layout.tsx`
**Línea**: ~16

**Cambio a realizar**:
```typescript
// AGREGAR después de la línea 16, dentro de metadata:
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), // ← AGREGAR ESTA LÍNEA
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      // ... resto
```

**Pasos**:
1. Abrir `app/layout.tsx`
2. Localizar `export const metadata: Metadata = {` (línea ~16)
3. Agregar `metadataBase: new URL(siteConfig.url),` como primera propiedad
4. Guardar

---

### ✅ TAREA 3: Agregar Canonical URL en Sobre Nosotros
**Tiempo estimado**: 2 minutos
**Archivo**: `app/sobre-nosotros/page.tsx`
**Línea**: ~13-18

**Cambio a realizar**:
```typescript
export const metadata: Metadata = {
  title:
    "Nuestra Filosofía: Creado por un Psicólogo, para Colegas | Espacio Pisama",
  description:
    "Conoce la historia detrás de Espacio Pisama. Un espacio fundado desde la experiencia para ofrecer autonomía, flexibilidad y una comunidad profesional estable.",
  alternates: {
    canonical: "/sobre-nosotros", // ← AGREGAR ESTAS 3 LÍNEAS
  },
};
```

**Pasos**:
1. Abrir `app/sobre-nosotros/page.tsx`
2. Agregar bloque `alternates` con canonical
3. Guardar

---

### ✅ TAREA 4: Crear Componente de Breadcrumbs Visuales
**Tiempo estimado**: 30 minutos
**Archivo nuevo**: `components/ui/Breadcrumbs.tsx`

**Pasos**:
1. Crear archivo `components/ui/Breadcrumbs.tsx`
2. Pegar el siguiente código:

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

3. Guardar archivo

---

### ✅ TAREA 5: Agregar Breadcrumbs Visuales a Psicólogos
**Tiempo estimado**: 5 minutos
**Archivo**: `app/soluciones/psicologos/page.tsx`
**Línea**: ~226

**Cambios a realizar**:

1. **Agregar import** (después de línea 10):
```typescript
import Breadcrumbs from "@/components/ui/Breadcrumbs";
```

2. **Agregar componente** (después de línea 226, dentro de `<main>` pero después del tag de apertura):
```typescript
<main className="bg-content2 py-20">
  <div className="container mx-auto max-w-4xl px-4">
    <Breadcrumbs items={breadcrumbItems} /> {/* ← AGREGAR ESTA LÍNEA */}
    <article
      className="prose prose-lg mx-auto max-w-4xl px-4
```

**Resultado esperado**:
```typescript
return (
  <>
    <BreadcrumbSchema items={breadcrumbItems} />
    <ServiceSchema ... />
    <script ... />
    <main className="bg-content2 py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <Breadcrumbs items={breadcrumbItems} /> {/* ← NUEVO */}
        <article className="prose ...">
```

---

### ✅ TAREA 6: Agregar Breadcrumbs Visuales a Coaches
**Tiempo estimado**: 5 minutos
**Archivo**: `app/soluciones/coaches/page.tsx`

**Cambios a realizar**:

1. **Agregar import**:
```typescript
import Breadcrumbs from "@/components/ui/Breadcrumbs";
```

2. **Agregar componente** dentro de `<main>` después del container:
```typescript
<main className="bg-content2 py-20">
  <div className="container mx-auto max-w-4xl px-4">
    <Breadcrumbs items={breadcrumbItems} />
    <article ...>
```

---

### ✅ TAREA 7: Agregar Breadcrumbs Visuales a Nutricionistas
**Tiempo estimado**: 5 minutos
**Archivo**: `app/soluciones/nutricionistas/page.tsx`

**Cambios a realizar**:

1. **Agregar import**:
```typescript
import Breadcrumbs from "@/components/ui/Breadcrumbs";
```

2. **Agregar componente**:
```typescript
<main className="bg-content2 py-20">
  <div className="container mx-auto max-w-4xl px-4">
    <Breadcrumbs items={breadcrumbItems} />
    <article ...>
```

---

### ✅ TAREA 8: Agregar Breadcrumbs Visuales a Terapeutas Alternativos
**Tiempo estimado**: 5 minutos
**Archivo**: `app/soluciones/terapeutas-alternativos/page.tsx`

**Cambios a realizar**:

1. **Agregar import**:
```typescript
import Breadcrumbs from "@/components/ui/Breadcrumbs";
```

2. **Agregar componente**:
```typescript
<main className="bg-content2 py-20">
  <div className="container mx-auto max-w-4xl px-4">
    <Breadcrumbs items={breadcrumbItems} />
    <article ...>
```

---

### ✅ TAREA 9: Agregar Breadcrumbs Visuales a Fisioterapeutas
**Tiempo estimado**: 5 minutos
**Archivo**: `app/soluciones/fisioterapeutas/page.tsx`

**Cambios a realizar**:

1. **Agregar import**:
```typescript
import Breadcrumbs from "@/components/ui/Breadcrumbs";
```

2. **Agregar componente**:
```typescript
<main className="bg-content2 py-20">
  <div className="container mx-auto max-w-4xl px-4">
    <Breadcrumbs items={breadcrumbItems} />
    <article ...>
```

---

### ✅ TAREA 10: Agregar Breadcrumbs Visuales a Masajistas
**Tiempo estimado**: 5 minutos
**Archivo**: `app/soluciones/masajistas/page.tsx`

**Cambios a realizar**:

1. **Agregar import**:
```typescript
import Breadcrumbs from "@/components/ui/Breadcrumbs";
```

2. **Agregar componente**:
```typescript
<main className="bg-content2 py-20">
  <div className="container mx-auto max-w-4xl px-4">
    <Breadcrumbs items={breadcrumbItems} />
    <article ...>
```

---

### ✅ TAREA 11: Agregar Breadcrumbs Visuales a Psiquiatras
**Tiempo estimado**: 5 minutos
**Archivo**: `app/soluciones/psiquiatras/page.tsx`

**Cambios a realizar**:

1. **Agregar import**:
```typescript
import Breadcrumbs from "@/components/ui/Breadcrumbs";
```

2. **Agregar componente**:
```typescript
<main className="bg-content2 py-20">
  <div className="container mx-auto max-w-4xl px-4">
    <Breadcrumbs items={breadcrumbItems} />
    <article ...>
```

---

### ✅ TAREA 12: Verificar Breadcrumbs en Desarrollo
**Tiempo estimado**: 10 minutos

**Pasos**:
1. Ejecutar `npm run dev`
2. Visitar cada página de soluciones:
   - http://localhost:3000/soluciones/psicologos
   - http://localhost:3000/soluciones/coaches
   - http://localhost:3000/soluciones/nutricionistas
   - http://localhost:3000/soluciones/terapeutas-alternativos
   - http://localhost:3000/soluciones/fisioterapeutas
   - http://localhost:3000/soluciones/masajistas
   - http://localhost:3000/soluciones/psiquiatras
3. Verificar que los breadcrumbs aparecen correctamente
4. Verificar que los links funcionan
5. Verificar styling (color, spacing)

---

### ✅ CHECKPOINT DÍA 1
Al finalizar estas tareas deberías tener:
- [x] Typo corregido
- [x] metadataBase agregado
- [x] Canonical en sobre-nosotros
- [x] Breadcrumbs visuales en 7 páginas de soluciones
- [x] Verificación visual completa

**Commit**: `feat(seo): add breadcrumbs, fix metadata and typos`

---

## 🟡 PRIORIDAD MEDIA - Día 2 (3-4 horas)

### ✅ TAREA 13: Crear Componente RelatedSolutions
**Tiempo estimado**: 30 minutos
**Archivo nuevo**: `components/soluciones/RelatedSolutions.tsx`

**Pasos**:
1. Crear carpeta si no existe: `components/soluciones/`
2. Crear archivo `components/soluciones/RelatedSolutions.tsx`
3. Pegar el siguiente código:

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
  // Filtrar la profesión actual y tomar solo 3
  const relatedSolutions = solutions
    .filter((sol) => !sol.href.includes(currentProfession))
    .slice(0, 3);

  return (
    <section className="my-16 p-8 bg-content1 rounded-2xl">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Otras Soluciones para Profesionales
      </h2>
      <p className="text-center text-foreground/80 mb-8">
        Espacio PISAMA también ofrece consultorios especializados para:
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedSolutions.map((solution) => (
          <Link key={solution.href} href={solution.href}>
            <Card
              isPressable
              className="hover:scale-105 transition-transform h-full"
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
          className="text-secondary-500 font-semibold hover:text-secondary-400 transition-colors"
        >
          Ver todas las soluciones →
        </Link>
      </div>
    </section>
  );
}
```

4. Guardar archivo

---

### ✅ TAREA 14: Crear Archivo de Datos de Soluciones
**Tiempo estimado**: 10 minutos
**Archivo nuevo**: `src/solucionesData.ts`

**Pasos**:
1. Crear archivo `src/solucionesData.ts`
2. Pegar el siguiente código:

```typescript
export const allSolutions = [
  {
    title: "Psicólogos",
    description: "Privacidad acústica absoluta y encuadre profesional",
    href: "/soluciones/psicologos",
    emoji: "🧠",
  },
  {
    title: "Coaches",
    description: "Espacio diseñado para transformación y crecimiento personal",
    href: "/soluciones/coaches",
    emoji: "🎯",
  },
  {
    title: "Nutricionistas",
    description: "Ambiente que inspira cambio y hábitos saludables",
    href: "/soluciones/nutricionistas",
    emoji: "🥗",
  },
  {
    title: "Terapeutas Alternativos",
    description: "Energía armónica con camilla profesional disponible",
    href: "/soluciones/terapeutas-alternativos",
    emoji: "🌿",
  },
  {
    title: "Fisioterapeutas",
    description: "Espacios amplios Premium con ergonomía garantizada",
    href: "/soluciones/fisioterapeutas",
    emoji: "🦴",
  },
  {
    title: "Masajistas",
    description: "Camilla incluida y espacio de trabajo 360°",
    href: "/soluciones/masajistas",
    emoji: "💆",
  },
  {
    title: "Psiquiatras",
    description: "Privacidad total y ambiente médico profesional",
    href: "/soluciones/psiquiatras",
    emoji: "⚕️",
  },
];
```

3. Guardar archivo

---

### ✅ TAREA 15: Agregar RelatedSolutions a Psicólogos
**Tiempo estimado**: 5 minutos
**Archivo**: `app/soluciones/psicologos/page.tsx`

**Cambios a realizar**:

1. **Agregar imports** (después de las líneas de import existentes):
```typescript
import RelatedSolutions from "@/components/soluciones/RelatedSolutions";
import { allSolutions } from "@/src/solucionesData";
```

2. **Agregar componente** (ANTES del `<CtaSection>` final, dentro de `</main>`):
```typescript
          {/* --- SECCIÓN 6: FAQ --- */}
          <ConsultorioPsicologosFaqSection />
        </article>
        <RelatedSolutions
          currentProfession="psicologos"
          solutions={allSolutions}
        />
      </main>
      <CtaSection
```

---

### ✅ TAREA 16: Agregar RelatedSolutions a Coaches
**Tiempo estimado**: 5 minutos
**Archivo**: `app/soluciones/coaches/page.tsx`

**Cambios a realizar**:

1. **Agregar imports**:
```typescript
import RelatedSolutions from "@/components/soluciones/RelatedSolutions";
import { allSolutions } from "@/src/solucionesData";
```

2. **Agregar componente** (ANTES del `<CtaSection>` final):
```typescript
        </article>
        <RelatedSolutions
          currentProfession="coaches"
          solutions={allSolutions}
        />
      </main>
      <CtaSection
```

---

### ✅ TAREA 17: Agregar RelatedSolutions a Nutricionistas
**Tiempo estimado**: 5 minutos
**Archivo**: `app/soluciones/nutricionistas/page.tsx`

**Cambios a realizar**:

1. **Agregar imports**:
```typescript
import RelatedSolutions from "@/components/soluciones/RelatedSolutions";
import { allSolutions } from "@/src/solucionesData";
```

2. **Agregar componente** (ANTES del `<CtaSection>` final):
```typescript
        </article>
        <RelatedSolutions
          currentProfession="nutricionistas"
          solutions={allSolutions}
        />
      </main>
      <CtaSection
```

---

### ✅ TAREA 18: Agregar RelatedSolutions a Terapeutas Alternativos
**Tiempo estimado**: 5 minutos
**Archivo**: `app/soluciones/terapeutas-alternativos/page.tsx`

**Cambios a realizar**:

1. **Agregar imports**:
```typescript
import RelatedSolutions from "@/components/soluciones/RelatedSolutions";
import { allSolutions } from "@/src/solucionesData";
```

2. **Agregar componente** (ANTES del `<CtaSection>` final):
```typescript
        </article>
        <RelatedSolutions
          currentProfession="terapeutas-alternativos"
          solutions={allSolutions}
        />
      </main>
      <CtaSection
```

---

### ✅ TAREA 19: Agregar RelatedSolutions a Fisioterapeutas
**Tiempo estimado**: 5 minutos
**Archivo**: `app/soluciones/fisioterapeutas/page.tsx`

**Cambios a realizar**:

1. **Agregar imports**:
```typescript
import RelatedSolutions from "@/components/soluciones/RelatedSolutions";
import { allSolutions } from "@/src/solucionesData";
```

2. **Agregar componente** (ANTES del `<CtaSection>` final):
```typescript
        </article>
        <RelatedSolutions
          currentProfession="fisioterapeutas"
          solutions={allSolutions}
        />
      </main>
      <CtaSection
```

---

### ✅ TAREA 20: Agregar RelatedSolutions a Masajistas
**Tiempo estimado**: 5 minutos
**Archivo**: `app/soluciones/masajistas/page.tsx`

**Cambios a realizar**:

1. **Agregar imports**:
```typescript
import RelatedSolutions from "@/components/soluciones/RelatedSolutions";
import { allSolutions } from "@/src/solucionesData";
```

2. **Agregar componente** (ANTES del `<CtaSection>` final):
```typescript
        </article>
        <RelatedSolutions
          currentProfession="masajistas"
          solutions={allSolutions}
        />
      </main>
      <CtaSection
```

---

### ✅ TAREA 21: Agregar RelatedSolutions a Psiquiatras
**Tiempo estimado**: 5 minutos
**Archivo**: `app/soluciones/psiquiatras/page.tsx`

**Cambios a realizar**:

1. **Agregar imports**:
```typescript
import RelatedSolutions from "@/components/soluciones/RelatedSolutions";
import { allSolutions } from "@/src/solucionesData";
```

2. **Agregar componente** (ANTES del `<CtaSection>` final):
```typescript
        </article>
        <RelatedSolutions
          currentProfession="psiquiatras"
          solutions={allSolutions}
        />
      </main>
      <CtaSection
```

---

### ✅ TAREA 22: Verificar RelatedSolutions en Desarrollo
**Tiempo estimado**: 10 minutos

**Pasos**:
1. Visitar cada página de soluciones
2. Verificar que aparece la sección "Otras Soluciones para Profesionales"
3. Verificar que muestra 3 profesiones (NO la actual)
4. Verificar que los links funcionan
5. Verificar hover effect en las cards
6. Verificar que el link "Ver todas las soluciones →" funciona

---

### ✅ TAREA 23: Optimizar Google Analytics
**Tiempo estimado**: 5 minutos
**Archivo**: `app/layout.tsx`
**Línea**: ~119

**Cambio a realizar**:
```typescript
// ❌ ANTES (línea 119):
<Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-4C6SK93ENE"
/>

// ✅ DESPUÉS:
<Script
  strategy="afterInteractive"
  src="https://www.googletagmanager.com/gtag/js?id=G-4C6SK93ENE"
/>
```

**Pasos**:
1. Abrir `app/layout.tsx`
2. Localizar línea ~119 con `<Script async`
3. Reemplazar `async` por `strategy="afterInteractive"`
4. Guardar

---

### ✅ CHECKPOINT DÍA 2
Al finalizar estas tareas deberías tener:
- [x] Componente RelatedSolutions creado
- [x] Datos de soluciones centralizados
- [x] RelatedSolutions en 7 páginas de soluciones
- [x] Google Analytics optimizado
- [x] Verificación visual completa

**Commit**: `feat(seo): add related solutions and optimize GA loading`

---

## 🟢 PRIORIDAD BAJA - Día 3 (Opcional, 3-4 horas)

### ✅ TAREA 24: Expandir Keywords con Barrios Cercanos
**Tiempo estimado**: 20 minutos
**Archivo nuevo**: `src/extendedKeywords.ts`

**Pasos**:
1. Crear archivo `src/extendedKeywords.ts`
2. Pegar el siguiente código:

```typescript
export const locationKeywords = [
  // Keywords por barrio cercano
  "consultorio cerca de pocitos",
  "consultorio cerca de centro montevideo",
  "consultorio cerca de cordón",
  "consultorio cerca de punta carretas",
  "consultorio cerca de parque batlle",
  "consultorio accesible montevideo",
  "consultorio bien ubicado montevideo",
  "consultorio zona parque rodó",

  // Keywords por modalidad
  "consultorio sin contrato montevideo",
  "consultorio flexible montevideo",
  "consultorio por sesión montevideo",
  "consultorio sin compromiso mensual",
  "alquiler consultorio equipado montevideo",
  "consultorio con reserva online",
  "consultorio disponibilidad tiempo real",
];

export const professionKeywordVariants = {
  psicologos: [
    "consultorio psicologia clinica montevideo",
    "espacio terapia individual parque rodó",
    "sala consulta psicoterapia montevideo",
    "consultorio psicologo cerca de pocitos",
    "espacio atencion psicologica montevideo",
  ],
  coaches: [
    "espacio coaching empresarial montevideo",
    "sala coaching personal parque rodó",
    "consultorio coaching ontológico montevideo",
    "espacio coaching ejecutivo",
  ],
  nutricionistas: [
    "consultorio nutrición clínica montevideo",
    "espacio consulta nutricional parque rodó",
    "sala nutrición deportiva montevideo",
  ],
  "terapeutas-alternativos": [
    "consultorio terapias holísticas montevideo",
    "espacio medicina alternativa parque rodó",
    "sala reiki montevideo",
    "consultorio aromaterapia",
  ],
  fisioterapeutas: [
    "consultorio fisioterapia deportiva montevideo",
    "sala kinesiología parque rodó",
    "consultorio rehabilitación física montevideo",
  ],
  masajistas: [
    "consultorio masajes terapéuticos montevideo",
    "sala masoterapia parque rodó",
    "consultorio quiromasaje montevideo",
  ],
  psiquiatras: [
    "consultorio psiquiatría montevideo",
    "espacio consulta psiquiátrica parque rodó",
    "sala psiquiatría privada montevideo",
  ],
};
```

3. Guardar archivo

---

### ✅ TAREA 25: Agregar Keywords Extendidas a Psicólogos
**Tiempo estimado**: 3 minutos
**Archivo**: `app/soluciones/psicologos/page.tsx`

**Cambios a realizar**:

1. **Agregar import**:
```typescript
import { locationKeywords, professionKeywordVariants } from "@/src/extendedKeywords";
```

2. **Expandir keywords en metadata** (línea ~27):
```typescript
keywords: [
  "alquiler consultorios psicólogos montevideo",
  "consultorio psicológico parque rodó",
  "consultorios por hora montevideo psicología",
  "alquiler consultorio psicólogo por hora",
  "consultorio privacidad acústica montevideo",
  "alquiler consultorio terapia montevideo",
  "consultorio psicología parque rodó",
  "espacio terapéutico montevideo",
  "reserva online consultorios psicología",
  "alquiler sala terapia montevideo",
  "consultorio psicólogo sin compromiso",
  "consultorio profesional psicólogos montevideo",
  // Agregar keywords extendidas:
  ...locationKeywords,
  ...professionKeywordVariants.psicologos,
],
```

---

### ✅ TAREA 26: Agregar Keywords Extendidas a Otras Profesiones
**Tiempo estimado**: 15 minutos (3 min x 6 páginas)

**Archivos a modificar**:
- `app/soluciones/coaches/page.tsx`
- `app/soluciones/nutricionistas/page.tsx`
- `app/soluciones/terapeutas-alternativos/page.tsx`
- `app/soluciones/fisioterapeutas/page.tsx`
- `app/soluciones/masajistas/page.tsx`
- `app/soluciones/psiquiatras/page.tsx`

**Para cada archivo**:

1. **Agregar import**:
```typescript
import { locationKeywords, professionKeywordVariants } from "@/src/extendedKeywords";
```

2. **Expandir keywords** (agregar al final del array de keywords):
```typescript
keywords: [
  // ... keywords existentes
  ...locationKeywords,
  ...professionKeywordVariants["nombre-profesion"], // Cambiar por: coaches, nutricionistas, etc.
],
```

**Mapeo de nombres**:
- Coaches: `professionKeywordVariants.coaches`
- Nutricionistas: `professionKeywordVariants.nutricionistas`
- Terapeutas Alternativos: `professionKeywordVariants["terapeutas-alternativos"]`
- Fisioterapeutas: `professionKeywordVariants.fisioterapeutas`
- Masajistas: `professionKeywordVariants.masajistas`
- Psiquiatras: `professionKeywordVariants.psiquiatras`

---

### ✅ TAREA 27: Crear Imágenes Open Graph en JPG
**Tiempo estimado**: 30 minutos
**Herramienta**: Photoshop, GIMP, o herramienta online

**Pasos**:

1. **Crear carpeta**:
   - Crear carpeta `public/images/og/`

2. **Convertir imágenes principales** a JPG 1200x630px:
   - `consultorio1-1.webp` → `og/consultorio1-1-og.jpg`
   - `consultorio2-1.webp` → `og/consultorio2-1-og.jpg`
   - `consultorio3-1.webp` → `og/consultorio3-1-og.jpg`
   - `consultorio5-1.webp` → `og/consultorio5-1-og.jpg`

3. **Specs de las imágenes OG**:
   - Dimensiones: 1200 x 630 pixels
   - Formato: JPG
   - Calidad: 85%
   - Optimizar para web

4. **Herramientas sugeridas**:
   - Online: https://www.iloveimg.com/resize-image
   - Online: https://squoosh.app/
   - Desktop: GIMP (gratis)
   - Desktop: Photoshop

---

### ✅ TAREA 28: Actualizar Metadata OG con Imágenes JPG
**Tiempo estimado**: 20 minutos
**Archivos a modificar**: Las 7 páginas de soluciones

**Cambios en cada archivo**:

**Antes**:
```typescript
openGraph: {
  images: [
    {
      url: "https://www.pisama.uy/images/consultorio1-1.webp", // ❌
      width: 1200,
      height: 630,
      alt: "...",
    },
  ],
}
```

**Después**:
```typescript
openGraph: {
  images: [
    {
      url: "https://www.pisama.uy/images/og/consultorio1-1-og.jpg", // ✅
      width: 1200,
      height: 630,
      alt: "...",
    },
  ],
}
```

**Archivos a actualizar**:
1. `app/soluciones/psicologos/page.tsx` - Línea ~53
2. `app/soluciones/coaches/page.tsx` - Línea ~51
3. `app/soluciones/nutricionistas/page.tsx` - Línea ~54
4. `app/soluciones/terapeutas-alternativos/page.tsx` - Línea ~52
5. `app/soluciones/fisioterapeutas/page.tsx` - Línea ~53
6. `app/soluciones/masajistas/page.tsx` - Línea ~53
7. `app/soluciones/psiquiatras/page.tsx` - Línea ~51

---

### ✅ TAREA 29: Lazy Load PhotoSwipe
**Tiempo estimado**: 15 minutos
**Archivos afectados**: Componentes que usan PhotoSwipe

**Pasos**:

1. **Identificar componentes con PhotoSwipe**:
   - Buscar archivos que importan `react-photoswipe-gallery`
   - Probablemente: `ImageGallery.tsx` en varias carpetas

2. **Modificar imports** (ejemplo para un ImageGallery.tsx):

**Antes**:
```typescript
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
```

**Después**:
```typescript
import dynamic from 'next/dynamic';

const Gallery = dynamic(
  () => import('react-photoswipe-gallery').then(mod => mod.Gallery),
  {
    ssr: false,
    loading: () => <div className="animate-pulse bg-content2 h-64 rounded-lg" />
  }
);

const Item = dynamic(
  () => import('react-photoswipe-gallery').then(mod => mod.Item),
  { ssr: false }
);
```

3. **Remover import de CSS** de `app/layout.tsx` línea 2:
```typescript
// ❌ REMOVER:
import "photoswipe/dist/photoswipe.css";
```

4. **Agregar import dinámico de CSS** en componentes que usan Gallery:
```typescript
useEffect(() => {
  import('photoswipe/dist/photoswipe.css');
}, []);
```

**NOTA**: Esta tarea puede ser compleja. Probar bien después de implementar.

---

### ✅ CHECKPOINT DÍA 3
Al finalizar estas tareas opcionales deberías tener:
- [x] Keywords extendidas con barrios cercanos
- [x] Imágenes OG optimizadas en JPG
- [x] Metadata OG actualizada
- [x] PhotoSwipe lazy loaded (opcional)

**Commit**: `feat(seo): expand keywords, optimize OG images, lazy load gallery`

---

## 🔄 POST-IMPLEMENTACIÓN: Validación

### ✅ TAREA 30: Build de Producción
**Tiempo estimado**: 5 minutos

**Pasos**:
```bash
npm run build
```

**Verificar**:
- ✅ No hay errores de TypeScript
- ✅ No hay errores de lint
- ✅ Build completa exitosamente

---

### ✅ TAREA 31: Pruebas Locales
**Tiempo estimado**: 15 minutos

**Pasos**:
```bash
npm run build
npm run start
```

**Navegar y verificar**:
1. Homepage: http://localhost:3000
2. Cada página de soluciones
3. Verificar breadcrumbs visuales
4. Verificar RelatedSolutions
5. Verificar que todo funciona correctamente

---

### ✅ TAREA 32: Validar Schemas en Desarrollo
**Tiempo estimado**: 20 minutos

**Herramienta**: Google Rich Results Test
**URL**: https://search.google.com/test/rich-results

**Pasos para CADA página de soluciones**:

1. Con el servidor en desarrollo corriendo, usar ngrok o exponer temporalmente
2. O usar la URL de staging/producción después del deploy

**Verificar**:
- ✅ LocalBusiness schema válido
- ✅ Service schema válido
- ✅ BreadcrumbList schema válido
- ✅ No hay errores
- ✅ No hay warnings críticas

**Páginas a validar**:
- [ ] /soluciones/psicologos
- [ ] /soluciones/coaches
- [ ] /soluciones/nutricionistas
- [ ] /soluciones/terapeutas-alternativos
- [ ] /soluciones/fisioterapeutas
- [ ] /soluciones/masajistas
- [ ] /soluciones/psiquiatras

---

### ✅ TAREA 33: Validar Open Graph
**Tiempo estimado**: 15 minutos

**Herramienta**: Facebook Sharing Debugger
**URL**: https://developers.facebook.com/tools/debug/

**Pasos**:
1. Ingresar URL de cada landing page
2. Click "Scrape Again" si ya fue scrapeada
3. Verificar que la imagen OG se muestra correctamente
4. Verificar título y descripción

**Páginas a validar**:
- [ ] Homepage
- [ ] Cada landing page de soluciones

---

### ✅ TAREA 34: Verificar Metadata en Browser
**Tiempo estimado**: 10 minutos

**Pasos para cada página**:
1. Abrir página en Chrome
2. Right-click → "View Page Source"
3. Buscar en `<head>`:
   - [ ] `<title>` presente y correcto
   - [ ] `<meta name="description">` presente
   - [ ] `<meta property="og:image">` con URL correcta (.jpg)
   - [ ] `<link rel="canonical">` presente
   - [ ] JSON-LD scripts presentes

---

## 📊 MÉTRICAS POST-DEPLOY

### Después del deploy a producción:

1. **Google Search Console**:
   - [ ] Enviar sitemap.xml actualizado
   - [ ] Verificar "Coverage" sin errores
   - [ ] Monitorear "Enhancements" para rich results

2. **PageSpeed Insights**:
   - [ ] Correr test en https://pagespeed.web.dev/
   - [ ] Verificar score >90 en mobile y desktop
   - [ ] Verificar Core Web Vitals (verde)

3. **Schema Validator**:
   - [ ] https://validator.schema.org/
   - [ ] Validar homepage y landing pages

---

## ✅ CHECKLIST FINAL

Antes de dar por completado:

### Alta Prioridad (Día 1):
- [ ] Typo corregido en disponibilidad
- [ ] metadataBase agregado en layout
- [ ] Canonical en sobre-nosotros
- [ ] Breadcrumbs visuales implementados en 7 páginas
- [ ] Breadcrumbs funcionan correctamente

### Media Prioridad (Día 2):
- [ ] RelatedSolutions creado y funcionando
- [ ] RelatedSolutions en 7 páginas
- [ ] Google Analytics optimizado
- [ ] Internal linking mejorado

### Baja Prioridad (Día 3 - Opcional):
- [ ] Keywords extendidas agregadas
- [ ] Imágenes OG en JPG creadas
- [ ] Metadata OG actualizada
- [ ] PhotoSwipe lazy loaded (opcional)

### Validación:
- [ ] Build sin errores
- [ ] Pruebas locales exitosas
- [ ] Schemas validados
- [ ] Open Graph verificado
- [ ] Metadata correcta en browser

---

## 🎯 NOTAS IMPORTANTES

### ⚠️ NO IMPLEMENTAR (Requiere datos reales):
- **AggregateRating Schema**: Solo si tienes reviews reales verificables
- **Review Schema**: Solo con testimonios reales y con consentimiento

### 💾 Git Strategy:
- Commit después de cada checkpoint
- Usar conventional commits:
  - `feat(seo):` para nuevas features
  - `fix(seo):` para correcciones
  - `chore(seo):` para tareas menores

### 🧪 Testing:
- Probar en diferentes navegadores
- Verificar responsive (mobile/tablet/desktop)
- Verificar no hay broken links
- Verificar performance no empeoró

---

## 📞 SOPORTE

Si encuentras problemas:
1. Verificar errores en consola del browser
2. Verificar errores en terminal de Next.js
3. Verificar TypeScript errors con `npm run build`
4. Revisar este TODO nuevamente
5. Consultar documentación de Next.js: https://nextjs.org/docs

---

**¡Buena suerte con la implementación! 🚀**

**Tiempo total estimado**: 8-12 horas distribuidas en 2-3 días
