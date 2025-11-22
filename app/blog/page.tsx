import { Metadata } from "next";
import Link from "next/link";

import { title, subtitle } from "@/components/primitives";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  // Aquí puedes agregar futuros artículos de blog educativos
  // Ejemplo:
  // {
  //   slug: "como-gestionar-tu-agenda",
  //   title: "Cómo Gestionar tu Agenda de Pacientes Eficientemente",
  //   description: "Tips y estrategias para organizar tu práctica privada...",
  //   date: "Fecha",
  // },
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
