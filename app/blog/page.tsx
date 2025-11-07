import { Metadata } from "next";
import Link from "next/link";

import { title, subtitle } from "@/components/primitives";

const blogPosts = [
  {
    slug: "consultorio-para-psicologos-alquiler",
    title:
      "Alquiler de Consultorios para Psicólogos en Montevideo: La Solución para Trabajar Tranquilo",
    description:
      'Consultorios por hora para psicólogos en Parque Rodó. Reserva online "sin intermediarios", privacidad acústica y ambiente profesional.',
    date: "Octubre 25, 2025",
  },
  {
    slug: "alquiler-consultorios-terapias-alternativas",
    title: "Consultorios para Terapias Alternativas en Montevideo",
    description:
      "Descubre cómo encontrar el alquiler de consultorios para terapias alternativas ideal en Montevideo. Energía, flexibilidad y diseño terapéutico.",
    date: "Noviembre 06, 2025",
  },
  // ... more posts here
];

export const metadata: Metadata = {
  title:
    "Blog para Profesionales | Marketing, Gestión y Terapia | Espacio Pisama",
  description:
    "Artículos y guías prácticas para psicólogos y terapeutas independientes en Uruguay. Aprende sobre gestión de consultorios, marketing y crecimiento profesional.",
};

export default function BlogPage() {
  return (
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
  );
}
