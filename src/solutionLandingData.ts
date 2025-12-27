import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import {
  FaVolumeOff,
  FaCalendarCheck,
  FaMapMarkerAlt,
  FaUsers,
  FaSpa,
  FaLeaf,
  FaHeart,
  FaUserMd,
  FaBrain,
  FaHandHoldingHeart,
  FaBalanceScale,
  FaShieldAlt,
} from "react-icons/fa";
import { MdAccessTime, MdSupportAgent } from "react-icons/md";
import { TbMassage } from "react-icons/tb";

import consultorio1 from "@/public/images/consultorio1-1.webp";
import consultorio3 from "@/public/images/consultorio3-1.webp";
import consultorio5 from "@/public/images/consultorio5-1.webp";

// Tipos
export interface QuickStat {
  value: string;
  label: string;
}

export interface Benefit {
  icon: IconType;
  title: string;
  description: string;
}

export interface SolutionLandingConfig {
  slug: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroImage: StaticImageData;
  heroImageAlt: string;
  quickStats: QuickStat[];
  benefits: Benefit[];
  benefitsTitle?: string;
  benefitsHighlight?: string;
  midCtaTitle?: string;
  midCtaHighlight?: string;
}

// Configuración por profesión
export const solutionLandingConfigs: Record<string, SolutionLandingConfig> = {
  psicologos: {
    slug: "psicologos",
    heroTitle: "Alquiler de Consultorios para",
    heroHighlight: "Psicólogos",
    heroSubtitle:
      "Privacidad acústica absoluta, reservas online en tiempo real y un ambiente diseñado por psicólogos para psicólogos. Desde $200/hora en Parque Rodó.",
    heroImage: consultorio3,
    heroImageAlt:
      "Consultorio profesional para psicólogos en Parque Rodó, Montevideo",
    quickStats: [
      { value: "$200", label: "Desde/hora" },
      { value: "24/7", label: "Reservas online" },
      { value: "6", label: "Consultorios" },
      { value: "100%", label: "Privacidad acústica" },
    ],
    benefits: [
      {
        icon: FaVolumeOff,
        title: "Privacidad Acústica",
        description:
          "Aislación sonora en cada consultorio. Música ambiental en sala de espera para máxima confidencialidad.",
      },
      {
        icon: FaCalendarCheck,
        title: "Reservas Online",
        description:
          "Aplicación móvil y web para reservar en tiempo real. Elegí, reservá y confirmá en segundos, sin intermediarios.",
      },
      {
        icon: FaBrain,
        title: "Diseñado por Psicólogos",
        description:
          "Cada detalle pensado desde la experiencia clínica. Encuadre terapéutico estable.",
      },
      {
        icon: FaMapMarkerAlt,
        title: "Parque Rodó",
        description:
          "Ubicación que realza tu imagen profesional. Fácil acceso y estacionamiento sin tarifar.",
      },
    ],
    benefitsTitle: "¿Por qué psicólogos eligen",
    benefitsHighlight: "Espacio Pisama?",
    midCtaTitle: "¿Listo para trabajar",
    midCtaHighlight: "con total tranquilidad?",
  },

  "terapeutas-alternativos": {
    slug: "terapeutas-alternativos",
    heroTitle: "Alquiler de Consultorios para",
    heroHighlight: "Terapias Alternativas",
    heroSubtitle:
      "Ambiente armónico con excelente energía, camilla profesional disponible y flexibilidad total. Desde $200/hora en Parque Rodó.",
    heroImage: consultorio3,
    heroImageAlt:
      "Consultorio para terapias alternativas con camilla en Montevideo",
    quickStats: [
      { value: "$200", label: "Desde/hora" },
      { value: "Camilla", label: "Disponible" },
      { value: "7-23hs", label: "Todos los días" },
      { value: "100%", label: "Buena energía" },
    ],
    benefits: [
      {
        icon: FaCalendarCheck,
        title: "Reservas Online",
        description:
          "Aplicación móvil y web para reservar en tiempo real. Elegí, reservá y confirmá en segundos, sin intermediarios.",
      },
      {
        icon: TbMassage,
        title: "Camilla Profesional",
        description:
          "Camilla disponible para reiki, masajes, acupuntura. Solo indicalo al reservar.",
      },
      {
        icon: MdAccessTime,
        title: "Flexibilidad Total",
        description:
          "De 7:00 a 23:00 todos los días del año. Adaptate a los horarios de tus pacientes.",
      },
      {
        icon: FaSpa,
        title: "Ambiente Natural",
        description:
          "Iluminación cálida, plantas naturales, tonos neutros. Paz desde que cruzás la puerta.",
      },
    ],
    benefitsTitle: "¿Por qué terapeutas eligen",
    benefitsHighlight: "Espacio Pisama?",
    midCtaTitle: "¿Listo para encontrar un espacio",
    midCtaHighlight: "que vibra contigo?",
  },

  nutricionistas: {
    slug: "nutricionistas",
    heroTitle: "Alquiler de Consultorios para",
    heroHighlight: "Nutricionistas",
    heroSubtitle:
      "Ambiente profesional que inspira cambio y hábitos saludables. Reservas online y flexibilidad total desde $200/hora.",
    heroImage: consultorio5,
    heroImageAlt: "Consultorio profesional para nutricionistas en Montevideo",
    quickStats: [
      { value: "$200", label: "Desde/hora" },
      { value: "Online", label: "Reservas 24/7" },
      { value: "Parque Rodó", label: "Ubicación" },
      { value: "0", label: "Compromiso mensual" },
    ],
    benefits: [
      {
        icon: FaHeart,
        title: "Inspira Cambio",
        description:
          "Ambiente profesional y acogedor que motiva a tus pacientes a comprometerse con su salud.",
      },
      {
        icon: FaCalendarCheck,
        title: "Agenda Flexible",
        description:
          "Reservá solo las horas que necesitás. Ideal para consultas puntuales o agenda variable.",
      },
      {
        icon: FaMapMarkerAlt,
        title: "Ubicación Céntrica",
        description:
          "Parque Rodó, accesible para tus pacientes. Estacionamiento fácil sin tarifar.",
      },
      {
        icon: FaUsers,
        title: "Red de Profesionales",
        description:
          "Comunidad de colegas para derivaciones cruzadas y crecimiento profesional.",
      },
    ],
    benefitsTitle: "¿Por qué nutricionistas eligen",
    benefitsHighlight: "Espacio Pisama?",
    midCtaTitle: "¿Listo para crecer",
    midCtaHighlight: "sin costos fijos?",
  },

  psiquiatras: {
    slug: "psiquiatras",
    heroTitle: "Alquiler de Consultorios para",
    heroHighlight: "Psiquiatras",
    heroSubtitle:
      "Privacidad total, ambiente médico profesional y sistema de reservas online. Consultorios desde $200/hora en Parque Rodó.",
    heroImage: consultorio1,
    heroImageAlt:
      "Consultorio médico profesional para psiquiatras en Montevideo",
    quickStats: [
      { value: "$200", label: "Desde/hora" },
      { value: "100%", label: "Privacidad" },
      { value: "Premium", label: "Disponibles" },
      { value: "Online", label: "Reservas" },
    ],
    benefits: [
      {
        icon: FaShieldAlt,
        title: "Privacidad Absoluta",
        description:
          "Aislación acústica profesional. Confidencialidad garantizada para consultas psiquiátricas.",
      },
      {
        icon: FaUserMd,
        title: "Ambiente Médico",
        description:
          "Espacio profesional que transmite seriedad y confianza a tus pacientes.",
      },
      {
        icon: FaCalendarCheck,
        title: "Gestión Autónoma",
        description:
          "Reservas online sin intermediarios. Código de acceso personal para total independencia.",
      },
      {
        icon: MdSupportAgent,
        title: "Soporte Inmediato",
        description:
          "Cualquier inconveniente se resuelve al instante. Contacto directo con los dueños.",
      },
    ],
    benefitsTitle: "¿Por qué psiquiatras eligen",
    benefitsHighlight: "Espacio Pisama?",
    midCtaTitle: "¿Listo para consultar",
    midCtaHighlight: "con total profesionalismo?",
  },

  coaches: {
    slug: "coaches",
    heroTitle: "Alquiler de Consultorios para",
    heroHighlight: "Coaches",
    heroSubtitle:
      "Espacio diseñado para transformación y crecimiento personal. Ambiente que potencia tus sesiones desde $200/hora.",
    heroImage: consultorio5,
    heroImageAlt: "Espacio profesional para coaches en Montevideo",
    quickStats: [
      { value: "$200", label: "Desde/hora" },
      { value: "Flexible", label: "Sin compromiso" },
      { value: "Premium", label: "Disponibles" },
      { value: "7-23hs", label: "Todos los días" },
    ],
    benefits: [
      {
        icon: FaBalanceScale,
        title: "Espacio de Transformación",
        description:
          "Ambiente neutro y profesional que facilita el proceso de cambio de tus coachees.",
      },
      {
        icon: MdAccessTime,
        title: "Horarios Amplios",
        description:
          "De 7:00 a 23:00 todos los días. Adaptate a las agendas ejecutivas de tus clientes.",
      },
      {
        icon: FaMapMarkerAlt,
        title: "Imagen Profesional",
        description:
          "Parque Rodó transmite prestigio. Una ubicación que refuerza tu marca personal.",
      },
      {
        icon: FaHandHoldingHeart,
        title: "Comunidad de Apoyo",
        description:
          "Red de profesionales afines. Posibilidad de derivaciones y colaboraciones.",
      },
    ],
    benefitsTitle: "¿Por qué coaches eligen",
    benefitsHighlight: "Espacio Pisama?",
    midCtaTitle: "¿Listo para potenciar",
    midCtaHighlight: "tus sesiones de coaching?",
  },

  fisioterapeutas: {
    slug: "fisioterapeutas",
    heroTitle: "Alquiler de Consultorios para",
    heroHighlight: "Fisioterapeutas",
    heroSubtitle:
      "Consultorios Premium amplios con camilla profesional y espacio de trabajo 360°. Desde $250/hora en Parque Rodó.",
    heroImage: consultorio3,
    heroImageAlt:
      "Consultorio amplio para fisioterapeutas con camilla en Montevideo",
    quickStats: [
      { value: "$250", label: "Premium/hora" },
      { value: "Camilla", label: "incluida" },
      { value: "Amplio", label: "espacio 360°" },
      { value: "Online", label: "reservas" },
    ],
    benefits: [
      {
        icon: TbMassage,
        title: "Camilla Profesional",
        description:
          "Camilla de alta calidad incluida. Espacio amplio para trabajar cómodamente alrededor del paciente.",
      },
      {
        icon: FaMapMarkerAlt,
        title: "Consultorios Premium",
        description:
          "Mayor amplitud para ejercicios y movilizaciones. Ergonomía garantizada.",
      },
      {
        icon: FaCalendarCheck,
        title: "Reservas Simples",
        description:
          "Sistema online en tiempo real. Indicá que necesitás camilla y listo.",
      },
      {
        icon: MdAccessTime,
        title: "Flexibilidad Horaria",
        description:
          "De 7:00 a 23:00 todos los días. Sin compromiso mensual, pagás lo que usás.",
      },
    ],
    benefitsTitle: "¿Por qué fisioterapeutas eligen",
    benefitsHighlight: "Espacio Pisama?",
    midCtaTitle: "¿Listo para trabajar",
    midCtaHighlight: "con el espacio que necesitás?",
  },

  masajistas: {
    slug: "masajistas",
    heroTitle: "Alquiler de Consultorio con Camilla",
    heroHighlight: "para Masajes",
    heroSubtitle:
      "Consultorio con camilla profesional incluida y espacio de trabajo 360° para tus sesiones de masajes. Ambiente relajante desde $250/hora en Parque Rodó.",
    heroImage: consultorio3,
    heroImageAlt:
      "Alquiler de consultorio con camilla para masajes en Montevideo",
    quickStats: [
      { value: "$250", label: "con camilla/hora" },
      { value: "360°", label: "espacio de trabajo" },
      { value: "Relajante", label: "ambiente" },
      { value: "Flexible", label: "horarios" },
    ],
    benefits: [
      {
        icon: TbMassage,
        title: "Camilla Incluida",
        description:
          "Camilla profesional de alta calidad. Solo reservá indicando que la necesitás.",
      },
      {
        icon: FaSpa,
        title: "Ambiente Relajante",
        description:
          "Espacio con energía armónica, iluminación cálida y privacidad para tus sesiones.",
      },
      {
        icon: MdAccessTime,
        title: "Sin Compromiso",
        description:
          "Alquiler por hora sin pagos mensuales. Ideal para agenda variable.",
      },
      {
        icon: FaMapMarkerAlt,
        title: "Ubicación Accesible",
        description:
          "Parque Rodó, fácil acceso para tus clientes. Estacionamiento sin tarifar.",
      },
    ],
    benefitsTitle: "¿Por qué masajistas eligen",
    benefitsHighlight: "Espacio Pisama?",
    midCtaTitle: "¿Listo para alquilar tu consultorio",
    midCtaHighlight: "con camilla para masajes?",
  },
};

// Helper para obtener la configuración de una profesión
export function getSolutionLandingConfig(
  slug: string
): SolutionLandingConfig | undefined {
  return solutionLandingConfigs[slug];
}
