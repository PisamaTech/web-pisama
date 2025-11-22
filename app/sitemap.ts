import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site"; // Importamos nuestra configuración para la URL base

interface BlogArticle {
  slug: string;
  lastModified: Date;
}

// --- FUNCIÓN PARA OBTENER ARTÍCULOS DEL BLOG ---
// Las antiguas URLs de blog ahora hacen redirect 301 a /soluciones/
// Por lo tanto, no deben estar en el sitemap para evitar confusión a los crawlers.
// En el futuro, cuando tengas artículos de blog educativos nuevos, añádelos aquí.
async function getPublishedBlogArticles(): Promise<BlogArticle[]> {
  // TODO: Reemplaza esto con una llamada real a tu CMS o base de datos
  // cuando tengas artículos de blog educativos (no comerciales)
  return [
    // Las páginas que antes estaban aquí ahora están en /soluciones/
    // y ya están incluidas en staticRoutes arriba
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
    "/soluciones/con-camilla", // Landing page para consultorio con camilla
  ];

  const staticUrls = staticRoutes.map((route) => {
    // Prioridades diferenciadas según importancia
    let priority = 0.8; // default

    if (route === "/") priority = 1.0;
    else if (route.startsWith("/soluciones/") && route !== "/soluciones")
      priority = 0.9;
    else if (route === "/soluciones") priority = 0.9;
    else if (
      ["/consultorios", "/precios", "/disponibilidad"].includes(route)
    )
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
