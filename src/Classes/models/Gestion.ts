import { Estudiante } from "./Estudiante";
export class Gestion {
  email: string;
  password: string;
  estudiantes: Estudiante[];
  constructor(email: string, password: string, estudiante: Estudiante[]) {
    this.email = email;
    this.password = password;
    this.estudiantes = estudiante;
  }
  logearse() {
    return console.log("Inicio de sesion con exito");
  }
  desloguearse() {
    return console.log("sesion cerrada");
  }
  crearEstudiante() {
    return console.log("Estudiante creado");
  }
  verMatriculasEstudiantes() {
    return console.log("Mostrando matriculas");
  }
  revisarComprobantesEstudiantes(id: number) {
    const estudiant = this.estudiantes?.find(
      (estudiante) => estudiante.id === id
    );
    if (estudiant && estudiant.comprobantes) {
      return estudiant.comprobantes;
    }
    return null;
  }
  asignarBecaEstudiante() {
    return console.log("Asignando beca a estudiante");
  }
  filtrarEstudiantes(id: number) {
    const estudiant = this.estudiantes?.filter(
      (estudiante) => estudiante.id === id
    );
    if (estudiant) {
      return this.estudiantes?.filter((estudiante) => estudiante.id === id);
    }
    return null;
  }
  revisarHistorialPagos(id: number) {
    const pagos: Array<String> = [];
    const estudiant = this.estudiantes?.find(
      (estudiante) => estudiante.id === id
    );
    console.log(estudiant);
    if (estudiant && estudiant.comprobantes) {
      for (let i = 0; i < estudiant.comprobantes.length; i++) {
        pagos.push(estudiant.comprobantes[i].fecha);
      }
      return pagos;
    }
    return null;
  }
  eliminarBecaEstudiante() {
    return console.log("Beca eliminada con exito");
  }
}
