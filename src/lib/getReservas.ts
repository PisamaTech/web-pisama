import { supabase } from "./supabaseClient"; // Asume que ya tienes este archivo

// TIPADO: Definimos la estructura del evento que nuestro calendario entenderá
export interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  resourceId?: number; // El ID del consultorio, como número
  type: "fija" | "eventual"; // El tipo de reserva para los colores
}

// La función que obtiene y transforma las reservas
export const getReservas = async (
  consultorioId?: string
): Promise<CalendarEvent[]> => {
  // Iniciamos la consulta a Supabase
  let query = supabase
    .from("reservas")
    .select("start_time, end_time, consultorio_id, tipo_reserva")
    // ¡FILTRO CRÍTICO! Solo mostramos las reservas confirmadas.
    .eq("estado", "confirmada");

  // Si nos pasan un ID de consultorio, añadimos ese filtro a la consulta
  if (consultorioId) {
    query = query.eq("consultorio_id", consultorioId);
  }

  // Ejecutamos la consulta
  const { data, error } = await query;

  if (error) {
    console.error("Error al obtener las reservas desde Supabase:", error);
    return []; // Devolvemos un array vacío si hay un error
  }

  // Si todo va bien, transformamos los datos al formato que necesita react-big-calendar
  const formattedEvents: CalendarEvent[] = data.map((reserva) => ({
    title: "Ocupado",
    start: new Date(reserva.start_time),
    end: new Date(reserva.end_time),
    resourceId: reserva.consultorio_id,
    type: reserva.tipo_reserva === "fija" ? "fija" : "eventual",
  }));

  return formattedEvents;
};
