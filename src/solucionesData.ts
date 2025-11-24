import {
  FaBrain,
  FaBullseye,
  FaAppleAlt,
  FaSpa,
  FaUserMd,
} from "react-icons/fa";
import { TbPhysotherapist, TbMassage } from "react-icons/tb";

export const allSolutions = [
  {
    title: "Psicólogos",
    description: "Privacidad acústica absoluta y encuadre profesional",
    href: "/soluciones/psicologos",
    icon: FaBrain,
  },
  {
    title: "Coaches",
    description: "Espacio diseñado para transformación y crecimiento personal",
    href: "/soluciones/coaches",
    icon: FaBullseye,
  },
  {
    title: "Nutricionistas",
    description: "Ambiente que inspira cambio y hábitos saludables",
    href: "/soluciones/nutricionistas",
    icon: FaAppleAlt,
  },
  {
    title: "Terapeutas Alternativos",
    description: "Energía armónica con camilla profesional disponible",
    href: "/soluciones/terapeutas-alternativos",
    icon: FaSpa,
  },
  {
    title: "Fisioterapeutas",
    description: "Espacios amplios Premium con ergonomía garantizada",
    href: "/soluciones/fisioterapeutas",
    icon: TbPhysotherapist,
  },
  {
    title: "Masajistas",
    description: "Camilla incluida y espacio de trabajo 360°",
    href: "/soluciones/masajistas",
    icon: TbMassage,
  },
  {
    title: "Psiquiatras",
    description: "Privacidad total y ambiente médico profesional",
    href: "/soluciones/psiquiatras",
    icon: FaUserMd,
  },
];
