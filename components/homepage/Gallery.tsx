"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const espacios = [
  {
    id: "consultorio-1",
    nombre: "Consultorio 1",
    img: "/images/consultorio1-1.jpg",
  },
  {
    id: "consultorio-2",
    nombre: "Consultorio 2",
    img: "/images/consultorio2-1.jpg",
  },
  {
    id: "consultorio-3",
    nombre: "Consultorio 3",
    img: "/images/consultorio3-1.jpg",
  },
  {
    id: "consultorio-4",
    nombre: "Consultorio 4",
    img: "/images/consultorio4-1.jpg",
  },
  {
    id: "consultorio-5",
    nombre: "Consultorio 5",
    img: "/images/consultorio5-1.jpg",
  },
  {
    id: "consultorio-6",
    nombre: "Consultorio 6",
    img: "/images/consultorio6-1.jpg",
  },
  {
    id: "sala-espera",
    nombre: "Sala de Espera",
    img: "/images/salaespera-1.jpg",
  },
  { id: "fachada", nombre: "Fachada", img: "/images/fachada.jpg" },
  {
    id: "sala-descanso",
    nombre: "Sala de Descanso",
    img: "/images/saladescanso-1.jpg",
  },
  {
    id: "acceso-codigo",
    nombre: "Dispositivo de Acceso",
    img: "/images/acceso-codigo.jpg",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Galería de Espacios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {espacios.map((espacio, index) => (
            <motion.div
              key={espacio.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href={`/espacios/${espacio.id}`}>
                <Image
                  src={espacio.img}
                  alt={espacio.nombre}
                  width={500}
                  height={350}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-semibold text-lg">
                    {espacio.nombre}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
