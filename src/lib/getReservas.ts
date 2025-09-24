import { supabase } from "./supabaseClient"; // Asume que ya tienes este archivo

// TIPADO: Definimos la estructura del evento que nuestro calendario entenderá
export interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  resourceId?: number; // El ID del consultorio, como número
  type: "Fija" | "Eventual"; // El tipo de reserva para los colores
}

interface DateRange {
  start: Date;
  end: Date;
}

// La función que obtiene y transforma las reservas
export const getReservas = async (
  dateRange: DateRange
): Promise<CalendarEvent[]> => {
  // Iniciamos la consulta a Supabase
  let query = supabase
    .from("reservas")
    .select("start_time, end_time, consultorio_id, tipo_reserva")
    // ¡FILTRO CRÍTICO! Solo mostramos las reservas activas o ya utilizadas.
    .in("estado", ["activa", "utilizada"])
    // Filtramos por el rango de fechas dinámico que nos pasan.
    .gte("start_time", dateRange.start.toISOString())
    .lte("start_time", dateRange.end.toISOString());

  // Ejecutamos la consulta
  const { data, error } = await query;

  if (error) {
    return []; // Devolvemos un array vacío si hay un error
  }

  // Si todo va bien, transformamos los datos al formato que necesita react-big-calendar
  const formattedEvents: CalendarEvent[] = data.map((reserva) => ({
    title: reserva.tipo_reserva === "Fija" ? "Fija" : "Eventual",
    start: new Date(reserva.start_time),
    end: new Date(reserva.end_time),
    resourceId: reserva.consultorio_id,
    type: reserva.tipo_reserva === "Fija" ? "Fija" : "Eventual",
  }));

  return formattedEvents;
};
