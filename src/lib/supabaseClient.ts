import { createClient } from "@supabase/supabase-js";

// Leemos las variables de entorno
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

// Verificamos que las variables estén definidas para evitar errores
if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    "Supabase URL or Publishable Key is missing from .env.local"
  );
}

// Creamos y exportamos el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabasePublishableKey);
