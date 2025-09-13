// TIPADO: Definimos la estructura de nuestros datos
export interface Consultorio {
  id: number; // Debe ser un NÚMERO para coincidir con la base de datos
  title: string;
  category: "consultorio" | "comun";
  type: "Premium" | "Estándar";
}

export const consultoriosData: Consultorio[] = [
  // --- CONSULTORIOS ---
  {
    id: 1,
    title: "Consultorio Premium 1",
    category: "consultorio",
    type: "Premium",
  },
  {
    id: 2,
    title: "Consultorio Premium 2",
    category: "consultorio",
    type: "Premium",
  },
  {
    id: 3,
    title: "Consultorio Premium 3",
    category: "consultorio",
    type: "Premium",
  },
  {
    id: 4,
    title: "Consultorio Premium 4",
    category: "consultorio",
    type: "Premium",
  },
  {
    id: 5,
    title: "Consultorio Estándar 5",
    category: "consultorio",
    type: "Estándar",
  },
  {
    id: 6,
    title: "Consultorio Premium 6",
    category: "consultorio",
    type: "Premium",
  },
];
