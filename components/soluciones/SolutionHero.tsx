"use client";

import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface QuickStat {
  value: string;
  label: string;
}

interface SolutionHeroProps {
  title: string;
  highlightedText: string;
  subtitle: string;
  heroImage: StaticImageData | string;
  heroImageAlt: string;
  quickStats: QuickStat[];
  ctaPrimaryText?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
}

export default function SolutionHero({
  title,
  highlightedText,
  subtitle,
  heroImage,
  heroImageAlt,
  quickStats,
  ctaPrimaryText = "Ver Disponibilidad",
  ctaPrimaryHref = "/disponibilidad",
  ctaSecondaryText = "Agendá una visita",
  ctaSecondaryHref = "https://wa.me/59895961360",
}: SolutionHeroProps) {
  return (
    <section className="bg-gradient-to-b from-content2 to-content1 py-12 lg:py-20">
      <div className="container mx-auto max-w-6xl px-4 lg:px-8">
        {/* Grid principal: imagen + contenido */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Imagen del consultorio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl order-2 lg:order-1"
          >
            <Image
              src={heroImage}
              alt={heroImageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <h1 className="font-display text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
              {title} <span className="text-secondary">{highlightedText}</span>
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-foreground/80 lg:text-xl">
              {subtitle}
            </p>

            {/* Botones CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                as={Link}
                href={ctaPrimaryHref}
                size="lg"
                color="primary"
                radius="md"
                variant="shadow"
                className="font-semibold"
              >
                {ctaPrimaryText}
              </Button>
              <Button
                as={Link}
                href={ctaSecondaryHref}
                target={
                  ctaSecondaryHref.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  ctaSecondaryHref.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                size="lg"
                color="secondary"
                radius="md"
                variant="bordered"
                className="font-semibold"
              >
                {ctaSecondaryText}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-16"
        >
          {quickStats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl bg-white/80 p-4 text-center shadow-md border border-primary/5 hover:shadow-lg transition-shadow"
            >
              <p className="font-display text-2xl font-bold text-secondary md:text-3xl">
                {stat.value}
              </p>
              <p className="text-base text-primary">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
