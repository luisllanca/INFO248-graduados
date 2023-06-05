import { PersonalAdministrativo } from "./PersonalAdministrativo";
import { ServiciosEdicion } from "../Servicios/ServicioEdicion/ServiciosEdicion";
import { ServiciosVisualizacion } from "../Servicios/ServicioVisualizacion/ServiciosVisualizacion";
import type { Estudiante } from "../Usuario/Estudiante";
import type { Beca } from "../Servicios/ServicioFinanciero/Beca";
import { FiltradoEstudiante } from "../Servicios/ServicioVisualizacion/FiltradoEstudiante";

export class Secretaria
  extends PersonalAdministrativo
  implements ServiciosEdicion, ServiciosVisualizacion, FiltradoEstudiante
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
    super(id, nombre, apellido, email, password, cargo, estudiantes);
  }

  asignarBeca(est: Estudiante, beca: Beca) {
    var bec = est.getBecas();
    bec.push(beca);
    est.setBecas(bec);
  }

  eliminarBeca(est: Estudiante, beca: Beca) {
    console.log("Eliminando beca..." + beca.id);
    est.becas.splice(beca.id, 1);
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
