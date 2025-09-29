// TIPADO: Definimos la estructura de nuestros datos
export interface Consultorio {
  id: number; // Debe ser un NÚMERO para coincidir con la base de datos
  title: string;
  category: "consultorio" | "comun";
  type: "Premium" | "Estándar";
  available?: boolean; // Hacemos la propiedad opcional
}

export const consultoriosData: Consultorio[] = [
  // --- CONSULTORIOS ---
  {
    id: 1,
    title: "C.1",
    category: "consultorio",
    type: "Premium",
    available: true,
  },
  {
    id: 2,
    title: "C.2",
    category: "consultorio",
    type: "Premium",
    available: false,
  },
  {
    id: 3,
    title: "C.3",
    category: "consultorio",
    type: "Premium",
    available: true,
  },
  {
    id: 4,
    title: "C.4",
    category: "consultorio",
    type: "Premium",
    available: true,
  },
  {
    id: 5,
    title: "C.5",
    category: "consultorio",
    type: "Estándar",
    available: true,
  },
  {
    id: 6,
    title: "C.6",
    category: "consultorio",
    type: "Premium",
    available: true,
  },
];
