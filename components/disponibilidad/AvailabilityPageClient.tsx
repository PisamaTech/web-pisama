"use client";

import { useState, useEffect, useMemo, Suspense } from "react";

import { useSearchParams } from "next/navigation";
import { Calendar, dayjsLocalizer, Views } from "react-big-calendar";
import dayjs from "dayjs";
import "dayjs/locale/es"; // Importamos el locale en español para Day.js
import "react-big-calendar/lib/css/react-big-calendar.css";

// --- Importaciones de Componentes de HeroUI ---
import { Select, SelectItem } from "@heroui/select";
import { Chip } from "@heroui/chip";
import { Spinner } from "@heroui/spinner";

// --- Importaciones de nuestra Lógica y Datos ---
import { getReservas, CalendarEvent } from "@/src/lib/getReservas"; // Nuestra función de fetching
import { consultoriosData } from "@/src/data/consultoriosData"; // Los datos de nuestros consultorios

// --- CONFIGURACIÓN INICIAL DE DAY.JS ---
const localizer = dayjsLocalizer(dayjs);
dayjs.locale("es");

// TIPADO: Definimos la interfaz para los 'resources' del calendario
interface Resource {
  resourceId: number;
  resourceTitle: string;
}

function AvailabilityPageContent() {
  // 1. LEER PARÁMETROS DE LA URL
  // 'useSearchParams' nos permite leer "?consultorio=c1" de la URL.
  const searchParams = useSearchParams();
  const initialConsultorio = searchParams.get("consultorio") || "all";

  // 2. MANEJO DE ESTADOS
  const [selectedConsultorio, setSelectedConsultorio] =
    useState<string>(initialConsultorio);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // 3. PREPARACIÓN DE DATOS PARA EL CALENDARIO
  // Usamos 'useMemo' para que esta lista solo se calcule una vez.
  const resources: Resource[] = useMemo(
    () =>
      consultoriosData
        .filter((c) => c.category === "consultorio")
        .map((c) => ({ resourceId: c.id, resourceTitle: c.title })),
    []
  );

  const selectOptions = useMemo(
    () => [
      { id: "all", title: "Vista General Diaria" },
      ...resources.map((res) => ({
        id: res.resourceId,
        title: `${res.resourceTitle} (Semanal)`,
      })),
    ],
    [resources]
  );

  // 4. EFECTO PARA CARGAR DATOS DE SUPABASE
  // Este código se ejecuta cada vez que 'selectedConsultorio' cambia.
  useEffect(() => {
    const fetchAndSetReservas = async () => {
      setLoading(true);
      const fetchedEvents = await getReservas(
        selectedConsultorio === "all" ? undefined : selectedConsultorio
      );
      setEvents(fetchedEvents);
      setLoading(false);
    };

    fetchAndSetReservas();
  }, [selectedConsultorio]);

  // 5. LÓGICA DE ESTILOS PARA LOS EVENTOS
  // Esta función aplica el color correcto a cada evento del calendario.
  const eventPropGetter = (event: object) => {
    const calendarEvent = event as CalendarEvent; // Hacemos un cast para acceder a nuestra propiedad 'type'
    const azulFijo = "#3182CE";
    const verdeEventual = "#48BB78";

    const backgroundColor =
      calendarEvent.type === "fija" ? azulFijo : verdeEventual;

    return {
      style: {
        backgroundColor,
        borderRadius: "2px",
        opacity: 0.9,
        color: "white",
        border: "0px",
        padding: "2px 5px",
      },
    };
  };

  // 6. RENDERIZADO DEL COMPONENTE (JSX)
  // Aquí es donde construimos la interfaz visual.
  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* Encabezado y Panel de Control */}
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <h1 className="font-display text-5xl font-bold text-marron-cafe">
          Disponibilidad en Tiempo Real
        </h1>
        <p className="mt-6 font-sans text-lg text-marron-cafe/90">
          Explora la ocupación de nuestros espacios. Si ves un horario libre,
          está disponible para ti.
        </p>

        <div className="mt-8 flex flex-col items-center gap-6 rounded-lg border border-gris-calido bg-white p-4 shadow-sm md:flex-row md:justify-between">
          <Select
            label="Selecciona una vista"
            selectedKeys={[selectedConsultorio]}
            onChange={(e) => setSelectedConsultorio(e.target.value)}
            className="w-full md:w-auto md:min-w-[300px]"
            aria-label="Filtro de vista de disponibilidad"
            items={selectOptions}
          >
            {(item) => <SelectItem key={item.id}>{item.title}</SelectItem>}
          </Select>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Chip
              color="primary"
              variant="solid"
              style={{ backgroundColor: "#3182CE" }}
            >
              Reservas Fijas
            </Chip>
            <Chip
              color="success"
              variant="solid"
              style={{ backgroundColor: "#48BB78" }}
            >
              Reservas Eventuales
            </Chip>
          </div>
        </div>
      </div>

      {/* Calendario */}
      <div className="h-[85vh] rounded-lg border-2 border-gris-calido bg-white p-2 text-marron-cafe shadow-lg sm:p-4">
        {loading ? (
          <div className="flex h-full w-full items-center justify-center">
            <Spinner
              label="Cargando disponibilidad..."
              color="default"
              size="lg"
            />
          </div>
        ) : (
          <Calendar
            localizer={localizer}
            events={events}
            culture="es"
            messages={{
              next: "Siguiente",
              previous: "Anterior",
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día",
              agenda: "Agenda",
            }}
            eventPropGetter={eventPropGetter}
            startAccessor="start"
            endAccessor="end"
            // --- La Lógica de Vistas Dinámicas ---
            defaultView={Views.DAY} // Siempre empieza en una vista, luego se ajusta
            view={selectedConsultorio === "all" ? Views.DAY : Views.WEEK}
            resources={selectedConsultorio === "all" ? resources : undefined}
            resourceIdAccessor="resourceId"
            resourceTitleAccessor="resourceTitle"
            // --- Horarios ---
            min={new Date(0, 0, 0, 7, 0, 0)} // 7:00 AM
            max={new Date(0, 0, 0, 23, 0, 0)} // 11:00 PM
          />
        )}
      </div>
    </div>
  );
}

// 7. COMPONENTE WRAPPER CON SUSPENSE
// 'useSearchParams' necesita estar dentro de un <Suspense>. Este es el patrón recomendado por Next.js.
export default function AvailabilityPageClient() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <Spinner label="Inicializando..." size="lg" />
        </div>
      }
    >
      <AvailabilityPageContent />
    </Suspense>
  );
}
