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
    title: "Con.1",
    category: "consultorio",
    type: "Premium",
    available: true,
  },
  {
    id: 2,
    title: "Con.2",
    category: "consultorio",
    type: "Premium",
    available: false,
  },
  {
    id: 3,
    title: "Con.3",
    category: "consultorio",
    type: "Premium",
    available: true,
  },
  {
    id: 4,
    title: "Con.4",
    category: "consultorio",
    type: "Premium",
    available: true,
  },
  {
    id: 5,
    title: "Con.5",
    category: "consultorio",
    type: "Estándar",
    available: true,
  },
  {
    id: 6,
    title: "Con.6",
    category: "consultorio",
    type: "Premium",
    available: true,
  },
];
