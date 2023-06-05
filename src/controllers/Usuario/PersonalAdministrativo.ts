import { Usuario } from "./Usuario";
import { Estudiante } from "./Estudiante";
import EstudianteModel from "../../models/Estudiante/EstudianteModel";

export class PersonalAdministrativo extends Usuario {
  cargo: string;
  estudiantes: Estudiante[];

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    password: string,
    cargo: string,
    estudiantes: Estudiante[]
  ) {
    super(id, nombre, apellido, email, password);
    this.cargo = cargo;
    this.estudiantes = estudiantes;
  }

  // visualizarPerfilPersonal(): void {
  //   console.log(this.cargo);
  // }

  // cambiarDatosPersonales(id: number, password: string) {
  //   console.log("Cambiando datos de admin...");
  //   super.setPassword(password);
  // }

  getCargo() {
    return this.cargo;
  }
  setCargo(cargo: string) {
    this.cargo = cargo;
  }
  getEstudiantes() {
    return this.estudiantes;
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

  setEstudiantes(estudiantes: Estudiante[]) {
    this.estudiantes = estudiantes;
  }
}
