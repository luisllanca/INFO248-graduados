import { Usuario } from "./Usuario";
import { Estudiante } from "./Estudiante";

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
  setEstudiantes(estudiantes: Estudiante[]) {
    this.estudiantes = estudiantes;
  }
}
