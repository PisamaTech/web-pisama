import Link from "next/link";

import { title, subtitle } from "@/components/primitives";

const blogPosts = [
  {
    slug: "consultorio-para-psicologos-alquiler",
    title:
      "Alquiler de Consultorios para Psicólogos: La Guía Definitiva para Elegir el Espacio Correcto",
    description:
      "Una guía completa para elegir el espacio correcto para tu práctica, escrita por un psicólogo. Analizamos todo lo que debes tener en cuenta.",
    date: "Setiembre 21, 2025",
  },
  // ... more posts here
];

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
