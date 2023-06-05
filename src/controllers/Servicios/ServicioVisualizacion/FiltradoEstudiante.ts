import type { Estudiante } from "../../Usuario/Estudiante";

export interface FiltradoEstudiante {
  filtrarPorNombre(nombre: string): Estudiante[];
  filtrarPorPrograma(programa: string): Estudiante[];
  filtrarPorRut(rut: string): Estudiante[];
  filtrarPorApellido(apellido: string): Estudiante[];
}
