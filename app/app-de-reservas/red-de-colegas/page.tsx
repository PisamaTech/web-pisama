import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Metadata } from "next";
import Link from "next/link";
import { JSX } from "react";
import { FaHandshake, FaLock } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

import CountUpStat from "@/app/app-de-reservas/red-de-colegas/CountUpStat";
import HowItWorksSection from "@/app/app-de-reservas/red-de-colegas/HowItWorksSection";
import CtaSection from "@/components/homepage/CtaSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title:
    "Red de Colegas: conectate con profesionales de Pisama | Espacio Pisama",
  description:
    "Encontrá y contactá a más de 100 profesionales de salud y bienestar dentro de la plataforma Pisama. Derivaciones, intercambio de servicios y proyectos en conjunto.",
  alternates: {
    canonical: "/app-de-reservas/red-de-colegas",
  },
};

// --- DATOS ---

const useCases = [
  {
    icon: <FaHandshake size={24} className="text-secondary" />,
    text: "Un psicólogo que atiende adultos deriva a un adolescente con un colega del espacio especializado en esa franja etaria.",
  },
  {
    icon: <FaHandshake size={24} className="text-secondary" />,
    text: "Una nutricionista le ofrece sus servicios a una kinesióloga que comparte el espacio.",
  },
  {
    icon: <FaHandshake size={24} className="text-secondary" />,
    text: "Dos profesionales de áreas complementarias coordinan un taller o programa conjunto.",
  },
  {
    icon: <FaHandshake size={24} className="text-secondary" />,
    text: "Un profesional que quiere hacerse sesiones de masajes contacta directamente a un masajista de la comunidad.",
  },
];

// --- COMPONENTES DE SECCIÓN ---

const HeroSection = () => (
  <section className="bg-content2 py-14 text-center">
    <div className="container mx-auto max-w-4xl px-4 lg:px-8">
      <Chip
        className="mb-6"
        color="secondary"
        variant="flat"
        startContent={<MdGroups size={18} />}
      >
        Funcionalidad de la App
      </Chip>
      <h1 className="font-display text-4xl font-bold text-marron-cafe lg:text-5xl">
        Ser parte de <span className="text-secondary">Pisama</span> te da acceso
        a una Red de más de 100 Colegas con quienes derivar, colaborar y crecer.
      </h1>
      <p className="mx-auto mt-8 max-w-3xl font-sans text-xl text-marron-cafe/80">
        Pisama no es solo un lugar donde alquilar un consultorio.{" "}
        <strong>Es una comunidad profesional activa</strong> donde podés generar
        vínculos reales, intercambiar servicios, derivar pacientes y construir
        proyectos junto a colegas que comparten tu espacio y tu vocación.
      </p>
    </div>
  </section>
);

const WhatIsSection = () => (
  <section className="bg-content1 py-16">
    <div className="container mx-auto max-w-5xl px-4 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-primary">
            ¿Qué es la Red de Colegas?
          </h2>
          <p className="mt-6 font-sans text-lg text-foreground/80 leading-relaxed">
            La Red de Colegas es una funcionalidad de la plataforma Pisama que
            te permite encontrar y contactar a otros profesionales que comparten
            el espacio.
          </p>
          <p className="mt-4 font-sans text-lg text-foreground/80 leading-relaxed">
            No importa la profesión ni el motivo: podés acercarte a un colega
            para <strong>derivarle un paciente</strong>,{" "}
            <strong>ofrecerle tus servicios</strong>, pedirle los suyos, o
            simplemente explorar si hay posibilidades de trabajo conjunto.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            "Psicología",
            "Fisioterapia",
            "Nutrición",
            "Masajes",
            "Fonoaudiología",
            "Y más...",
          ].map((profession) => (
            <div
              key={profession}
              className="flex items-center justify-center rounded-xl bg-content2 border border-content4 p-4 text-center font-semibold text-primary shadow-sm"
            >
              {profession}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const WhoIsPartSection = () => (
  <section className="bg-content3 py-16">
    <div className="container mx-auto max-w-4xl px-4 lg:px-8 text-center">
      <h2 className="font-display text-3xl font-bold text-primary">
        ¿Quiénes forman parte?
      </h2>
      <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-foreground/80 leading-relaxed">
        Todos los profesionales registrados en la plataforma Pisama que hayan
        activado su perfil en la red.
      </p>
      <div className="mt-10 inline-flex flex-col items-center justify-center rounded-2xl bg-content1 border border-content4 px-12 py-8 shadow-md">
        <CountUpStat />
        <span className="mt-2 font-sans text-lg text-primary/80">
          profesionales de distintas disciplinas
        </span>
        <span className="mt-1 font-sans text-sm text-foreground/60">
          psicología · fisioterapia · nutrición · masajes · fonoaudiología · y
          más
        </span>
      </div>
    </div>
  </section>
);

const UseCasesSection = () => (
  <section className="bg-content2 py-16">
    <div className="container mx-auto max-w-4xl px-4 lg:px-8">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-primary">
          ¿Para qué lo usan los profesionales de Pisama?
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {useCases.map((item, index) => (
          <Card
            key={index}
            shadow="sm"
            radius="lg"
            className="bg-content1 transition-transform duration-300 hover:scale-[1.02]"
          >
            <CardBody className="flex flex-row items-start gap-4 p-6">
              <div className="mt-1 flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15">
                {item.icon}
              </div>
              <p className="font-sans text-base text-foreground/80 leading-relaxed">
                {item.text}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const PrivacySection = () => (
  <section className="bg-content1 py-16">
    <div className="container mx-auto max-w-3xl px-4 lg:px-8">
      <div className="rounded-2xl bg-content2 border border-content4 p-10 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <FaLock size={28} className="text-success-600" />
        </div>
        <h2 className="font-display text-2xl font-bold text-primary">
          ¿Es privado?
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-sans text-base text-foreground/80 leading-relaxed">
          Sí. Tu información de contacto (email y teléfono) solo se comparte si
          vos lo decidís y únicamente con quien hayas aceptado. Podés aparecer
          en la red sin revelar ningún dato personal hasta que elijas hacerlo.
        </p>
      </div>
    </div>
  </section>
);

const HowToStartSection = () => (
  <section className="bg-content3 py-16">
    <div className="container mx-auto max-w-3xl px-4 lg:px-8 text-center">
      <h2 className="font-display text-3xl font-bold text-primary">
        ¿Cómo empiezo?
      </h2>
      <p className="mx-auto mt-6 max-w-xl font-sans text-lg text-foreground/80 leading-relaxed">
        Ingresá a la plataforma y buscá la sección{" "}
        <strong>Red de Colegas</strong> en el menú principal. Completá tu perfil
        y empezá a explorar a tus colegas.
      </p>
      <div className="mt-8">
        <Link
          href={siteConfig.links.reservasApp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 font-semibold text-white transition-colors hover:bg-secondary/80"
        >
          Ir a la plataforma
        </Link>
      </div>
    </div>
  </section>
);

// --- PÁGINA PRINCIPAL ---

export default function RedDeColegasPage(): JSX.Element {
  const breadcrumbItems = [
    { name: "Inicio", url: siteConfig.url },
    { name: "App de Reservas", url: `${siteConfig.url}/app-de-reservas` },
    {
      name: "Red de Colegas",
      url: `${siteConfig.url}/app-de-reservas/red-de-colegas`,
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

      <HeroSection />
      <WhatIsSection />
      <WhoIsPartSection />
      <HowItWorksSection />
      <UseCasesSection />
      <PrivacySection />
      <HowToStartSection />
      <CtaSection
        title="Tu comunidad profesional te está esperando"
        description="Completá tu perfil hoy y empezá a conectar con más de 100 colegas dentro de la plataforma Pisama. Derivaciones, colaboraciones y nuevas oportunidades a un clic."
        buttonText="Acceder a la plataforma"
        buttonLink={siteConfig.links.reservasApp}
      />
    </>
  );
}
