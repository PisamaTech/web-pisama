"use client";

import { Spinner } from "@heroui/spinner";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useMemo, Suspense } from "react";
import React from "react";
import { Views } from "react-big-calendar";
import "dayjs/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { consultoriosData } from "@/src/data/consultoriosData";
import { getReservas, CalendarEvent } from "@/src/lib/getReservas";

import CustomToolbar from "./calendario/customToolbar";
import {
  calendarMessages,
  formatosPersonalizadosDayjs,
} from "./calendario/personalizacionCalendario";
// Importar los nuevos subcomponentes
import AvailabilityCalendar from "./subcomponents/AvailabilityCalendar";
import AvailabilityControls from "./subcomponents/AvailabilityControls";
import AvailabilityHeader from "./subcomponents/AvailabilityHeader";
import NonAvailableAlert from "./subcomponents/NonAvailableAlert";

interface Resource {
  resourceId: number;
  resourceTitle: string;
  available: boolean;
}

interface CustomEventComponentProps {
  event: CalendarEvent;
}

const CustomEventComponent = ({ event }: CustomEventComponentProps) => {
  const { title, start, end } = event;
  const startTime = dayjs(start).format("HH:mm");
  const endTime = dayjs(end).format("HH:mm");

  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center text-black/70">
      <div className="hidden md:block">
        <div className="text-xs">
          {startTime} - {endTime}
        </div>
        <div className="text-sm font-bold">{title}</div>
      </div>
    </div>
  );
};

function AvailabilityPageContent() {
  const searchParams = useSearchParams();
  const consultorioIdFromUrl = searchParams.get("id");

  let initialConsultorio = "all";

  if (consultorioIdFromUrl) {
    const match = consultorioIdFromUrl.match(/consultorio-(\d+)/);

    if (match && match[1]) {
      initialConsultorio = match[1];
    }
  }

  const [selectedConsultorio, setSelectedConsultorio] =
    useState<string>(initialConsultorio);
  const [allEvents, setAllEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loadedRanges, setLoadedRanges] = useState<
    { start: Date; end: Date }[]
  >([]);

  const resources: Resource[] = useMemo(
    () =>
      consultoriosData
        .filter((c) => c.category === "consultorio")
        .map((c) => ({
          resourceId: c.id,
          resourceTitle: c.title,
          available: c.available ?? true,
        })),
    []
  );

  const selectOptions = useMemo(
    () => [
      { id: "all", title: "Vista General Diaria", disabled: false },
      ...resources.map((res) => ({
        id: res.resourceId.toString(),
        title: `${res.resourceTitle} (Semanal)`,
        disabled: !res.available,
      })),
    ],
    [resources]
  );

  const calendarViewResources = useMemo(
    () => resources.filter((res) => res.available),
    [resources]
  );

  useEffect(() => {
    const initialFetch = async () => {
      setLoading(true);
      const startOfCurrentWeek = dayjs().startOf("week").toDate();
      const oneMonthFromNow = dayjs(startOfCurrentWeek)
        .add(1, "month")
        .toDate();
      const initialRange = { start: startOfCurrentWeek, end: oneMonthFromNow };

      const fetchedEvents = await getReservas(initialRange);

      setAllEvents(fetchedEvents);
      setLoadedRanges([initialRange]);
      setLoading(false);
    };

    initialFetch();
  }, []);

  const handleNavigate = async (newDate: Date) => {
    setCurrentDate(newDate);

    const isMonthLoaded = loadedRanges.some(
      (range) =>
        dayjs(newDate).isAfter(dayjs(range.start).subtract(1, "day")) &&
        dayjs(newDate).isBefore(dayjs(range.end).add(1, "day"))
    );

    if (!isMonthLoaded) {
      setLoading(true);
      const startOfMonth = dayjs(newDate).startOf("month").toDate();
      const endOfMonth = dayjs(newDate).endOf("month").toDate();
      const newRange = { start: startOfMonth, end: endOfMonth };

      const newEvents = await getReservas(newRange);

      const eventsMap = new Map(
        allEvents.map((e) => [`${e.start.toISOString()}-${e.resourceId}`, e])
      );

      newEvents.forEach((e) => {
        eventsMap.set(`${e.start.toISOString()}-${e.resourceId}`, e);
      });

      setAllEvents(Array.from(eventsMap.values()));
      setLoadedRanges((prev) => [...prev, newRange]);
      setLoading(false);
    }
  };

  const filteredEvents = useMemo(() => {
    if (selectedConsultorio === "all") {
      return allEvents;
    }

    return allEvents.filter(
      (event) => event.resourceId?.toString() === selectedConsultorio
    );
  }, [allEvents, selectedConsultorio]);

  const handleViewChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedConsultorio(e.target.value);
  };

  const eventPropGetter = (event: object) => {
    const calendarEvent = event as CalendarEvent;
    const azulFijo = "#5b9bd5";
    const verdeEventual = "#92d050";
    // Define el color de fondo del evento según su tipo
    const backgroundColor =
      calendarEvent.type === "Fija" ? azulFijo : verdeEventual;

    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        border: "2px solid hsl(214.3 31.8% 91.4%)",
      },
    };
  };

  const calendarProps = {
    events: filteredEvents,
    date: currentDate,
    onNavigate: handleNavigate,
    culture: "es",
    step: 60,
    timeslots: 1,
    eventPropGetter: eventPropGetter,
    startAccessor: (event: CalendarEvent) => event.start,
    endAccessor: (event: CalendarEvent) => event.end,
    messages: calendarMessages,
    formats: {
      ...formatosPersonalizadosDayjs,
      eventTimeRangeFormat: () => "",
    },
    defaultView: Views.DAY,
    view: selectedConsultorio === "all" ? Views.DAY : Views.WEEK,
    components: {
      event: CustomEventComponent,
      toolbar: CustomToolbar,
    },
    resources:
      selectedConsultorio === "all" ? calendarViewResources : undefined,
    resourceIdAccessor:
      selectedConsultorio === "all"
        ? (resource: any) => resource.resourceId
        : undefined,
    resourceTitleAccessor:
      selectedConsultorio === "all"
        ? (resource: any) => resource.resourceTitle
        : undefined,
    min: new Date(0, 0, 0, 7, 0, 0),
    max: new Date(0, 0, 0, 23, 0, 0),
  };

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <AvailabilityHeader />
        <AvailabilityControls
          selectedConsultorio={selectedConsultorio}
          handleViewChange={handleViewChange}
          selectOptions={selectOptions}
        />
        <NonAvailableAlert />
      </div>

      <AvailabilityCalendar loading={loading} calendarProps={calendarProps} />
    </div>
  );
}

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
