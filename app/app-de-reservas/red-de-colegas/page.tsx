import { Card, CardBody } from "@heroui/card";
import { Metadata } from "next";
import Link from "next/link";
import { JSX } from "react";
import {
  FaExchangeAlt,
  FaHandshake,
  FaLock,
  FaSpa,
  FaUserCheck,
  FaYinYang,
} from "react-icons/fa";
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
    icon: <FaUserCheck size={24} className="text-secondary" />,
    text: "Un psicólogo que atiende adultos, deriva a un niño con un colega del espacio, especializado en esa franja etaria.",
  },
  {
    icon: <FaExchangeAlt size={24} className="text-secondary" />,
    text: "Una fonoaudióloga le recomienda sus servicios a una psicopedagoga que comparte el espacio, facilitando un abordaje integral para sus pacientes en común.",
  },
  {
    icon: <MdGroups size={24} className="text-secondary" />,
    text: "Dos profesionales de áreas complementarias coordinan un taller o programa conjunto.",
  },
  {
    icon: <FaHandshake size={24} className="text-secondary" />,
    text: "Un psicólogo detecta que su paciente necesita acompañamiento nutricional como parte del tratamiento, y lo conecta con una nutricionista que también trabaja en Pisama.",
  },
  {
    icon: <FaSpa size={24} className="text-secondary" />,
    text: "Un profesional que quiere hacerse sesiones de masajes contacta directamente a un masajista del espacio y en una hora libre puede disfrutar de un masaje.",
  },
  {
    icon: <FaYinYang size={24} className="text-secondary" />,
    text: "Una terapeuta de reiki sugiere a su consultante que también trabaje con una psicóloga del espacio para complementar el proceso de bienestar emocional.",
  },
];

// --- COMPONENTES DE SECCIÓN ---

const HeroSection = () => (
  <section className="bg-content2 py-14 text-center">
    <div className="container mx-auto max-w-4xl px-4 lg:px-8">
      <h1 className="font-display text-4xl font-bold text-marron-cafe lg:text-5xl">
        Ser parte de Pisama te da acceso a una{" "}
        <span className="text-secondary">Red de más de 100 Colegas</span> con
        quienes derivar, colaborar y crecer.
      </h1>
      <p className="mx-auto mt-8 max-w-3xl font-sans text-xl text-marron-cafe/80">
        Espacio Pisama no es solo un lugar donde alquilar un consultorio.{" "}
        <strong>Es una comunidad profesional activa</strong> donde podés{" "}
        <span className="text-secondary">
          generar vínculos reales, intercambiar servicios, derivar pacientes y
          construir proyectos junto a colegas
        </span>{" "}
        que comparten tu espacio y tu vocación.
      </p>
      <p className="mx-auto mt-4 max-w-3xl font-sans text-xl text-marron-cafe/80">
        En Pisama buscamos ayudarte a crecer:{" "}
        <span className="text-secondary">
          a ofrecer mejores servicios, a llegar a más personas, a construir una
          práctica más sólida.
        </span>{" "}
        <strong>Porque tu crecimiento, es también el nuestro.</strong>
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
            La Red de Colegas es una{" "}
            <strong>funcionalidad de la aplicación </strong> de Espacio Pisama
            que te permite encontrar y contactar a otros profesionales que
            comparten el espacio.
          </p>
          <p className="mt-4 font-sans text-lg text-foreground/80 leading-relaxed">
            No importa la profesión ni el motivo: podés acercarte a un colega
            para <strong>derivarle un paciente</strong>,{" "}
            <strong>ofrecerle tus servicios, pedirle los suyos,</strong> o
            simplemente explorar si hay posibilidades de trabajo conjunto.
          </p>
          <div className="mt-6 rounded-xl border-l-4 border-secondary bg-content3 px-5 py-4">
            <p className="font-sans text-base font-medium text-primary leading-relaxed">
              Esto es lo que nos diferencia de un simple alquiler de salas:
              apostamos activamente por tu crecimiento profesional, porque el
              tuyo es también el nuestro.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            "Psicología",
            "Psiquiatría",
            "Fisioterapia",
            "Nutrición",
            "Masajes",
            "Fonoaudiología",
            "Terapias alternativas",
            "Y más...",
          ].map((profession, index) => {
            const styles = [
              "bg-content1 border border-primary/20 text-primary",
              "bg-content3 border border-secondary/30 text-secondary-700",
              "bg-primary/10 border border-primary/30 text-secondary-600",
            ];

            return (
              <div
                key={profession}
                className={`flex items-center justify-center rounded-xl p-4 text-center font-semibold shadow-sm ${styles[index % 3]}`}
              >
                {profession}
              </div>
            );
          })}
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
        Todos los profesionales registrados en la aplicación de Espacio Pisama
        que hayan activado su perfil en la red.
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
        Ingresá a la aplicación y buscá la sección{" "}
        <strong>Red de Colegas</strong>. Completá tu perfil y empezá a explorar
        a tus colegas.
      </p>
      <div className="mt-8">
        <Link
          href="https://reservas.pisama.uy/red-de-colegas?tab=perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 font-semibold text-white transition-colors hover:bg-secondary/80"
        >
          Completa tu perfil en la App
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
        title="Crecer juntos es nuestra apuesta"
        description="En Espacio Pisama nos importa que tu práctica florezca. La Red de Colegas es una de las herramientas con las que apostamos a eso: más conexiones, más posibilidades, más crecimiento. Completá tu perfil y empezá a construir hoy."
        buttonText="Acceder a la aplicación"
        buttonLink={siteConfig.links.reservasApp}
      />
    </>
  );
}
