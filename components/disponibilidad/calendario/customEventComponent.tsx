import dayjs from "dayjs";
import React from "react";
import { EventProps } from "react-big-calendar";
import { CalendarEvent } from "@/src/lib/getReservas";

export const CustomEventComponent: React.FC<EventProps<CalendarEvent>> = ({
  event,
}) => {
  const { title, start, end } = event;
  // Formatear las fechas de inicio y fin
  const startTime = dayjs(start).format("HH:mm");
  const endTime = dayjs(end).format("HH:mm");

  return (
    <div className="flex flex-col justify-center items-center h-full w-full text-black/70 text-center">
      {/* Hora del evento */}
      <div className="text-xs">
        {startTime} - {endTime}
      </div>
      {/* Título del evento */}
      <div className="text-sm font-bold">{title}</div>
    </div>
  );
};
