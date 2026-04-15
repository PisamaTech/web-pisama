import { Button } from "@heroui/button";
import Link from "next/link";
import { JSX } from "react";
import { FaArrowRight, FaUserCircle } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

const profiles = [
  {
    name: "Ana G.",
    role: "Psicóloga",
    color: "bg-secondary/20 text-secondary",
  },
  {
    name: "Martín R.",
    role: "Fisioterapeuta",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Sofía L.",
    role: "Nutricionista",
    color: "bg-success/15 text-success-700",
  },
  { name: "Carlos V.", role: "Coach", color: "bg-warning/15 text-warning-700" },
  {
    name: "Paula M.",
    role: "Masajista",
    color: "bg-secondary/20 text-secondary",
  },
  {
    name: "Diego F.",
    role: "Fonoaudiólogo",
    color: "bg-primary/10 text-primary",
  },
];

export default function ColleaguesNetworkSection(): JSX.Element {
  return (
    <section className="bg-content1 py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Columna Izquierda: Visual de la Red */}
          <div className="flex flex-col gap-3 rounded-2xl bg-content2 border border-content4 p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-primary font-bold font-display text-lg">
                <MdGroups size={24} className="text-secondary" />
                Red de Colegas
              </div>
              <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-bold text-secondary">
                +100 usuarios
              </span>
            </div>

            {profiles.map((profile) => (
              <div
                key={profile.name}
                className="flex items-center gap-3 rounded-xl bg-content1 border border-content4/60 px-4 py-3 transition-colors hover:border-secondary/30"
              >
                <div
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${profile.color}`}
                >
                  <FaUserCircle size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-primary truncate">
                    {profile.name}
                  </p>
                  <p className="text-xs text-foreground/60">{profile.role}</p>
                </div>
                <span className="text-xs text-secondary font-semibold">
                  Conectar →
                </span>
              </div>
            ))}
          </div>

          {/* Columna Derecha: Texto Persuasivo */}
          <div className="text-center md:text-left">
            <h2 className="font-display text-4xl font-bold text-primary">
              Una <span className="text-secondary">Red de Colegas</span> para
              Crecer Juntos.
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-primary/90">
              Compartir espacio es apenas el comienzo. Con la{" "}
              <strong>Red de Colegas</strong> de Pisama podés encontrar y
              contactar a otros profesionales del espacio: para derivar un
              paciente, ofrecer tus servicios o armar un proyecto conjunto.
            </p>
            <p className="mt-4 font-sans text-lg leading-relaxed text-primary/90">
              Psicólogos, fisioterapeutas, nutricionistas, masajistas, coaches y
              más. Cada uno con su perfil, sus especialidades y listo para
              conectar cuando vos lo decidas.
            </p>
            <div className="mt-8">
              <Button
                as={Link}
                href="/app-de-reservas/red-de-colegas"
                className="bg-secondary font-display font-semibold text-white shadow-lg"
                variant="solid"
                size="lg"
                endContent={<FaArrowRight />}
              >
                Conocé la Red de Colegas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
