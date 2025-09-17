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
    title: "Consultorio 1",
    category: "consultorio",
    type: "Premium",
    available: true,
  },
  {
    id: 2,
    title: "Consultorio 2",
    category: "consultorio",
    type: "Premium",
    available: false,
  },
  {
    id: 3,
    title: "Consultorio 3",
    category: "consultorio",
    type: "Premium",
    available: true,
  },
  {
    id: 4,
    title: "Consultorio 4",
    category: "consultorio",
    type: "Premium",
    available: true,
  },
  {
    id: 5,
    title: "Consultorio 5",
    category: "consultorio",
    type: "Estándar",
    available: true,
  },
  {
    id: 6,
    title: "Consultorio 6",
    category: "consultorio",
    type: "Premium",
    available: true,
  },
];
