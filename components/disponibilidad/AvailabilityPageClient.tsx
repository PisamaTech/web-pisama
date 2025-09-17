"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";

import { useSearchParams } from "next/navigation";
import { Calendar, dayjsLocalizer, Views } from "react-big-calendar";
import dayjs from "dayjs";
import "dayjs/locale/es"; // Importamos el locale en español para Day.js
import "react-big-calendar/lib/css/react-big-calendar.css";

// --- Importaciones de Componentes de HeroUI ---
import { Select, SelectItem } from "@heroui/select";
import { Spinner } from "@heroui/spinner";
import { Alert } from "@heroui/alert";
import { FaExclamationCircle } from "react-icons/fa";

// --- Importaciones de nuestra Lógica y Datos ---
import { getReservas, CalendarEvent } from "@/src/lib/getReservas"; // Nuestra función de fetching
import {
  calendarMessages,
  formatosPersonalizadosDayjs,
} from "./calendario/personalizacionCalendario";
import { CustomEventComponent } from "./calendario/customEventComponent";
import { consultoriosData } from "@/src/data/consultoriosData"; // Los datos de nuestros consultorios
import CustomToolbar from "./calendario/customToolbar";

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
  const consultorioIdFromUrl = searchParams.get("id"); // p. ej. "consultorio-1"

  let initialConsultorio = "all";
  if (consultorioIdFromUrl) {
    // Los datos usan IDs numéricos, pero la URL puede ser más descriptiva.
    // Extraemos el número de "consultorio-X".
    const match = consultorioIdFromUrl.match(/consultorio-(\d+)/);
    if (match && match[1]) {
      initialConsultorio = match[1]; // p. ej. "1"
    }
  }

  // 2. MANEJO DE ESTADOS
  const [selectedConsultorio, setSelectedConsultorio] =
    useState<string>(initialConsultorio);
  // 'allEvents' contendrá TODAS las reservas cargadas del servidor.
  const [allEvents, setAllEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  // Nuevo estado para rastrear los rangos de fechas que ya hemos cargado.
  const [loadedRanges, setLoadedRanges] = useState<
    { start: Date; end: Date }[]
  >([]);

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

  // 4. EFECTO PARA LA CARGA INICIAL DE DATOS
  // Se ejecuta solo una vez al montar el componente.
  useEffect(() => {
    const initialFetch = async () => {
      setLoading(true);
      // Ajustamos el rango inicial para que siempre comience desde el lunes de la semana actual.
      // Esto asegura que la vista semanal siempre tenga los datos completos de la semana en curso.
      const startOfCurrentWeek = dayjs().startOf("week").toDate();
      const oneMonthFromNow = dayjs(startOfCurrentWeek)
        .add(1, "month")
        .toDate();
      const initialRange = { start: startOfCurrentWeek, end: oneMonthFromNow };

      const fetchedEvents = await getReservas(initialRange);
      setAllEvents(fetchedEvents);
      setLoadedRanges([initialRange]); // Guardamos el rango que acabamos de cargar
      setLoading(false);
    };

    initialFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // El array vacío asegura que solo se ejecute una vez.

  // 5. FUNCIÓN PARA NAVEGACIÓN Y CARGA BAJO DEMANDA
  const handleNavigate = async (newDate: Date) => {
    setCurrentDate(newDate); // Actualizamos la vista del calendario inmediatamente.

    // Comprobamos si el mes de la nueva fecha ya está cargado.
    const isMonthLoaded = loadedRanges.some(
      (range) =>
        dayjs(newDate).isAfter(dayjs(range.start).subtract(1, "day")) &&
        dayjs(newDate).isBefore(dayjs(range.end).add(1, "day"))
    );

    // Si el mes no está cargado, lo buscamos.
    if (!isMonthLoaded) {
      setLoading(true);
      const startOfMonth = dayjs(newDate).startOf("month").toDate();
      const endOfMonth = dayjs(newDate).endOf("month").toDate();
      const newRange = { start: startOfMonth, end: endOfMonth };

      const newEvents = await getReservas(newRange);

      // Usamos un Map para evitar duplicados al combinar los eventos nuevos y los existentes.
      const eventsMap = new Map(
        allEvents.map((e) => [`${e.start.toISOString()}-${e.resourceId}`, e])
      );
      newEvents.forEach((e) => {
        eventsMap.set(`${e.start.toISOString()}-${e.resourceId}`, e);
      });

      setAllEvents(Array.from(eventsMap.values()));
      setLoadedRanges((prev) => [...prev, newRange]); // Añadimos el nuevo rango a la lista.
      setLoading(false);
    }
  };

  // 6. FILTRADO DE EVENTOS EN EL CLIENTE
  // 'useMemo' recalculará esta lista solo si 'allEvents' o 'selectedConsultorio' cambian.
  const filteredEvents = useMemo(() => {
    if (selectedConsultorio === "all") {
      return allEvents; // Si es "Vista General", mostramos todos los eventos.
    }
    // Si se selecciona un consultorio, filtramos los eventos que ya tenemos.
    return allEvents.filter(
      (event) => event.resourceId?.toString() === selectedConsultorio
    );
  }, [allEvents, selectedConsultorio]);

  // 7. MANEJADOR PARA EL CAMBIO DE VISTA
  const handleViewChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Simplificamos el manejador para que siempre actualice el estado.
    setSelectedConsultorio(e.target.value);
  };

  // 8. LÓGICA DE ESTILOS PARA LOS EVENTOS
  // Esta función aplica el color correcto a cada evento del calendario.
  const eventPropGetter = (event: object) => {
    const calendarEvent = event as CalendarEvent; // Hacemos un cast para acceder a nuestra propiedad 'type'
    const azulFijo = "#5b9bd5";
    const verdeEventual = "#92d050";

    const backgroundColor =
      calendarEvent.type === "Fija" ? azulFijo : verdeEventual;

    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        border: "1px solid hsl(214.3 31.8% 91.4%)",
      },
    };
  };

  // 9. RENDERIZADO DEL COMPONENTE (JSX)
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
            onChange={handleViewChange}
            className="w-full md:w-auto md:min-w-[300px]"
            aria-label="Filtro de vista de disponibilidad"
            items={selectOptions}
          >
            {(item) => <SelectItem key={item.id}>{item.title}</SelectItem>}
          </Select>

          {/* Leyenda de Colores de Eventos */}
          <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 p-3 my-4 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center">
              <div
                className="w-4 h-4 rounded-sm mr-2 border border-slate-400/50"
                style={{ backgroundColor: "#5b9bd5" }}
              ></div>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">Reservas Fijas:</span> se
                repiten todas las semanas.
              </p>
            </div>
            <div className="flex items-center">
              <div
                className="w-4 h-4 rounded-sm mr-2 border border-slate-400/50"
                style={{ backgroundColor: "#92d050" }}
              ></div>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">Reservas Eventuales:</span> uso
                único en esa fecha.
              </p>
            </div>
          </div>
        </div>

        {/* Aquí se muestra el Alert condicionalmente */}
        {selectedConsultorio === "2" && (
          <Alert
            color="danger"
            className="mt-6 text-left border-1"
            icon={<FaExclamationCircle />}
          >
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium">
                  Consultorio 2 - No Disponible
                </h3>
                <div className="mt-2 text-sm">
                  <p>
                    Actualmente el <strong>consultorio 2 </strong> no se
                    encuentra disponible, ya que se encuentra alquilado en
                    exclusividad por una profesional.
                  </p>
                </div>
              </div>
            </div>
          </Alert>
        )}
      </div>

      {/* Calendario */}
      <div className="h-[85vh] mx-auto max-w-4xl rounded-lg border-2 border-gris-calido bg-white p-2 text-marron-cafe shadow-lg sm:p-4">
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
            events={filteredEvents} // Usamos los eventos filtrados
            date={currentDate}
            onNavigate={handleNavigate} // Usamos nuestro nuevo manejador de navegación
            culture="es"
            step={60}
            timeslots={1}
            eventPropGetter={eventPropGetter}
            startAccessor="start"
            endAccessor="end"
            messages={calendarMessages}
            formats={{
              ...formatosPersonalizadosDayjs,
              eventTimeRangeFormat: () => "", // Esto oculta el label de la hora por defecto
            }}
            // --- La Lógica de Vistas Dinámicas ---
            defaultView={Views.DAY} // Siempre empieza en una vista, luego se ajusta
            view={selectedConsultorio === "all" ? Views.DAY : Views.WEEK}
            components={{
              event: CustomEventComponent,
              toolbar: CustomToolbar,
            }}
            resources={selectedConsultorio === "all" ? resources : undefined}
            resourceIdAccessor={
              selectedConsultorio === "all"
                ? (resource: any) => resource.resourceId
                : undefined
            }
            resourceTitleAccessor={
              selectedConsultorio === "all"
                ? (resource: any) => resource.resourceTitle
                : undefined
            }
            // --- Horarios ---
            min={new Date(0, 0, 0, 7, 0, 0)} // 8:00 AM
            max={new Date(0, 0, 0, 23, 0, 0)} // 11:00 PM
          />
        )}
      </div>
    </div>
  );
}

// 10. COMPONENTE WRAPPER CON SUSPENSE
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
