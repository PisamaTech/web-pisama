import { Metadata } from "next";
import Link from "next/link";

import { title, subtitle } from "@/components/primitives";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "10-estrategias-conseguir-primeros-pacientes",
    title: "10 Estrategias Efectivas para Conseguir tus Primeros Pacientes",
    description:
      "Guía completa con estrategias probadas de marketing y networking para psicólogos y terapeutas que inician su práctica privada en Uruguay. Incluye ejemplos prácticos y herramientas digitales.",
    date: "26 de noviembre, 2024",
  },
  {
    slug: "como-fijar-tarifas-psicologo-uruguay",
    title: "Cómo Fijar tus Tarifas como Psicólogo Independiente en Uruguay",
    description:
      "Guía definitiva para establecer honorarios justos y rentables. Incluye arancel CPU 2025, fórmulas de cálculo, estrategias de pricing y cómo superar el miedo a cobrar.",
    date: "12 de noviembre, 2024",
  },
  {
    slug: "consultorio-propio-vs-alquiler-por-hora",
    title: "Consultorio Propio vs. Alquiler por Hora: ¿Qué Conviene en 2025?",
    description:
      "Comparativa completa de costos, ventajas y desventajas entre las tres opciones principales. Incluye calculadora de punto de equilibrio y casos reales.",
    date: "29 de octubre, 2024",
  },
  {
    slug: "como-empezar-consultorio-privado-montevideo",
    title: "Guía Completa: Cómo Empezar tu Consultorio Privado en Montevideo",
    description:
      "Todo lo que necesitas saber para iniciar tu práctica privada exitosamente: requisitos legales, costos reales, decisiones clave y estrategias probadas para 2025.",
    date: "15 de octubre, 2024",
  },
];

export const metadata: Metadata = {
  title:
    "Blog para Profesionales | Marketing, Gestión y Terapia | Espacio Pisama",
  description:
    "Artículos y guías prácticas para psicólogos y terapeutas independientes en Uruguay. Aprende sobre gestión de consultorios, marketing y crecimiento profesional.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const breadcrumbItems = [
    {
      name: "Inicio",
      url: siteConfig.url,
    },
    {
      name: "Blog",
      url: `${siteConfig.url}/blog`,
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <section className="bg-content4/60 w-full border-b-1 border-content4">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </section>
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className={title({ class: "text-primary" })}>Blog</h1>
          <p className={subtitle({ class: "mt-4 text-primary-400" })}>
            Aquí encontrarás artículos sobre psicología, gestión de la práctica
            privada y consejos para profesionales.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="block group"
              >
                <div className="p-6 bg-content1 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <p className="text-sm text-foreground/60">{post.date}</p>
                  <h2 className="text-2xl font-bold mt-2 text-primary group-hover:text-secondary transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-foreground/80">{post.description}</p>
                  <div className="mt-4 font-semibold text-secondary">
                    Leer más &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
