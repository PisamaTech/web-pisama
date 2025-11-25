import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site"; // Importamos nuestra configuración para la URL base

interface BlogArticle {
  slug: string;
  lastModified: Date;
}

// --- FUNCIÓN PARA OBTENER ARTÍCULOS DEL BLOG ---
// Artículos educativos del blog (no comerciales, enfocados en contenido de valor)
async function getPublishedBlogArticles(): Promise<BlogArticle[]> {
  return [
    {
      slug: "como-empezar-consultorio-privado-montevideo",
      lastModified: new Date("2025-10-15"),
    },
    {
      slug: "consultorio-propio-vs-alquiler-por-hora",
      lastModified: new Date("2025-10-29"),
    },
    {
      slug: "como-fijar-tarifas-psicologo-uruguay",
      lastModified: new Date("2025-11-12"),
    },
    {
      slug: "10-estrategias-conseguir-primeros-pacientes",
      lastModified: new Date("2025-11-26"),
    },
    // Futuros artículos se agregarán aquí
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. OBTENER LA URL BASE DE NUESTRA CONFIGURACIÓN
  const baseUrl = siteConfig.url;

  // 2. DEFINIR LAS RUTAS ESTÁTICAS DE NUESTRA WEB
  // Estas son las páginas principales que no cambian a menudo.
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
    "/blog", // La página principal del blog
    "/soluciones", // Hub de soluciones por profesión
    "/soluciones/psicologos", // Landing page para psicólogos
    "/soluciones/coaches", // Landing page para coaches
    "/soluciones/nutricionistas", // Landing page para nutricionistas
    "/soluciones/terapeutas-alternativos", // Landing page para terapeutas alternativos
    "/soluciones/fisioterapeutas", // Landing page para fisioterapeutas
    "/soluciones/masajistas", // Landing page para masajistas
    "/soluciones/psiquiatras", // Landing page para psiquiatras
  ];

  const staticUrls = staticRoutes.map((route) => {
    // Prioridades diferenciadas según importancia
    let priority = 0.8; // default

    if (route === "/") priority = 1.0;
    else if (route.startsWith("/soluciones/") && route !== "/soluciones")
      priority = 0.9;
    else if (route === "/soluciones") priority = 0.9;
    else if (["/consultorios", "/precios", "/disponibilidad"].includes(route))
      priority = 0.8;
    else if (route.startsWith("/guia-de-uso")) priority = 0.6;
    else if (route === "/terminos-y-condiciones") priority = 0.3;

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
    };
  });

  // 3. GENERAR LAS RUTAS DINÁMICAS (PARA EL BLOG)
  const articles = await getPublishedBlogArticles();
  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.lastModified,
    changeFrequency: "yearly" as const, // Un artículo no suele cambiar mucho una vez publicado
    priority: 0.7,
  }));

  // 4. COMBINAR TODAS LAS RUTAS Y DEVOLVER EL SITEMAP COMPLETO
  return [...staticUrls, ...articleUrls];
}
