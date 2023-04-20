import { Estudiante } from "./Estudiante";
export class Gestion {
  estudiantes: Estudiante[];
  constructor(estudiante: Estudiante[]) {
    this.estudiantes = estudiante;
  }
  crearEstudiante(req: any, res: any) {
    return console.log("Estudiante creado");
  }
  verMatriculasEstudiantes(res: any) {
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
    return this.estudiantes?.filter((estudiante) => estudiante.id === id);
  }
  revisarHistorialPagos(id: number) {
    const pagos = [];
    const estudiant = this.estudiantes?.find(
      (estudiante) => estudiante.id === id
    );
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
