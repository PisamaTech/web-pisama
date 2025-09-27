import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site"; // Importamos nuestra configuración para la URL base

// --- FUNCIÓN SIMULADA PARA OBTENER ARTÍCULOS DEL BLOG ---
// En un futuro, esta función se conectaría a tu CMS o base de datos
// para obtener una lista de todos los artículos publicados.
// Por ahora, incluiremos manualmente el que ya creamos.
async function getPublishedBlogArticles() {
  // TODO: Reemplaza esto con una llamada real a tu CMS o base de datos
  return [
    {
      slug: "consultorio-para-psicologos-alquiler",
      // Idealmente, aquí usarías la fecha de última actualización del artículo
      lastModified: new Date(),
    },
    // Cuando añadas más artículos, los añadirás aquí o los obtendrás dinámicamente
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
    "/sistema-de-reservas",
    "/sobre-nosotros",
    "/contacto",
    "/terminos-y-condiciones",
    "/blog", // La página principal del blog
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const, // Con qué frecuencia esperas que cambie
    priority: route === "/" ? 1.0 : 0.8, // Damos más prioridad a la homepage
  }));

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
