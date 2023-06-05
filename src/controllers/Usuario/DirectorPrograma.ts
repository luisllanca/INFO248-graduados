import { PersonalAdministrativo } from "./PersonalAdministrativo";
import { ServiciosVisualizacion } from "../Servicios/ServicioVisualizacion/ServiciosVisualizacion";
import { Estudiante } from "../Usuario/Estudiante";
import { FiltradoEstudiante } from "../Servicios/ServicioVisualizacion/FiltradoEstudiante";

export class DirectorPrograma
  extends PersonalAdministrativo
  implements ServiciosVisualizacion, FiltradoEstudiante
{
  constructor(
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    password: string,
    cargo: string,
    estudiantes: Estudiante[]
  ) {
    super(id, nombre, email, apellido, password, cargo, estudiantes);
  }

  verMatriculasEstudiante(estudiante: Estudiante) {
    console.log("Visualizando matrículas de estudiantes...");
  }

  revisarComprobantesEstudiante(estudiante: Estudiante) {
    console.log("Visualizando comprobantes de estudiante...");
  }

  revisarHistorialPagos(estudiante: Estudiante) {
    console.log("Visualizar historial de pagos...");
  }

  verBecasAsignadas(estudiante: Estudiante) {
    console.log("Visualizar becas asignadas a estudiante...");
  }

  filtrarPorNombre(nombre: string): Estudiante[] {
    console.log("Filtrando estudiantes por nombre...");
    return [];
  }
  filtrarPorPrograma(programa: string): Estudiante[] {
    console.log("Filtrando estudiantes por programa...");
    return [];
  }
  filtrarPorRut(rut: string): Estudiante[] {
    console.log("Filtrando estudiantes por rut...");
    return [];
  }
  filtrarPorApellido(apellido: string): Estudiante[] {
    console.log("Filtrando estudiantes por apellido...");
    return [];
  }
}
