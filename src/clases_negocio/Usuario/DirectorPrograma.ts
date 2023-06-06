import { PersonalAdministrativo } from "./PersonalAdministrativo";
import { ServiciosVisualizacion } from "../../controllers/Servicios/ServicioVisualizacion/ServiciosVisualizacion";
import { Estudiante } from "./Estudiante";
import { FiltradoEstudiante } from "../../controllers/Servicios/ServicioVisualizacion/FiltradoEstudiante";
import EstudianteModel from "../../models/EstudianteModel";
import { Identifier } from "sequelize";

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

  async obtenerEstudiantes(): Promise<{}> {
    try {
      const estudiantes = await EstudianteModel.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
  
      return estudiantes;
    } catch (err) {
      return JSON.stringify(err);
    }
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

  async filtrarEstudiante(id: Identifier | undefined): Promise<{}> {
    try {
      const estudiante = await EstudianteModel.findByPk(id, {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      if (!estudiante) {
        throw new Error("Estudiante no encontrado");
      }
      return estudiante;
    } catch (error) {
      return JSON.stringify(error);
    }
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

