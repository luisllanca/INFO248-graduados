import type { Estudiante } from "../../../clases_negocio/Usuario/Estudiante";

export interface FiltradoEstudiante {
  filtrarPorNombre(nombre: string): Estudiante[];
  filtrarPorPrograma(programa: string): Estudiante[];
  filtrarPorRut(rut: string): Estudiante[];
  filtrarPorApellido(apellido: string): Estudiante[];
}
