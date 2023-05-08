import { Estudiante } from "./Estudiante";
import { Usuario } from "./Usuario";
export class Gestion extends Usuario {
  email: string;
  password: string;
  estudiantes: Estudiante[];

  constructor(email: string, password: string, estudiante: Estudiante[]) {
    super(email, password);
    this.email = email;
    this.password = password;
    this.estudiantes = estudiante;
  }
  visualizarPerfilPersonal() {
    super.visualizarPerfilPersonal();
  }
  cambiarDatosPersonales(password: string) {
    super.cambiarDatosPersonales(password);
  }
  crearEstudiante(
    id: number,
    nombre: string,
    email: string,
    password: string,
    rut: string,
    carrera: string
  ) {
    this.estudiantes.push(
      new Estudiante(id, nombre, email, password, rut, carrera, [], [])
    );
    return console.log("Estudiante creado");
  }
  verMatriculasEstudiantes(id: number) {
    const matriculas: Array<String> = [];
    const estudiant = this.estudiantes?.find(
      (estudiante) => estudiante.id === id
    );
    if (estudiant && estudiant.becas) {
      for (let i = 0; i < estudiant.becas.length; i++) {
        if (estudiant.becas[i].tipo == "matricula") {
          matriculas.push(estudiant.becas[i].fechaAsi);
        }
      }
      return matriculas;
    }
    return null;
  }
  revisarComprobantesEstudiante(id: number) {
    const estudiant = this.estudiantes?.find(
      (estudiante) => estudiante.id === id
    );
    if (estudiant && estudiant.comprobantes) {
      return estudiant.comprobantes;
    }
    return null;
  }
  asignarBecaEstudiante(id: number) {
    const estudiant = this.estudiantes?.filter(
      (estudiante) => estudiante.id === id
    );
    if (estudiant) {
      return console.log("Asignando beca a estudiante");
    }
    return null;
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
    const pagos: Array<Array<String>> = [];
    const estudiant = this.estudiantes?.find(
      (estudiante) => estudiante.id === id
    );
    if (estudiant && estudiant.comprobantes) {
      for (let i = 0; i < estudiant.comprobantes.length; i++) {
        let fechasP: Array<String> = [];
        fechasP.push(estudiant.comprobantes[i].tipo);
        fechasP.push(estudiant.comprobantes[i].fecha);
        pagos.push(fechasP);
      }
      return pagos;
    }
    return null;
  }
  eliminarBecaEstudiante(idEst: number, idBeca: number) {
    const estudiant = this.estudiantes?.find(
      (estudiante) => estudiante.id === idEst
    );
    if (estudiant && estudiant.becas) {
      const bec = estudiant.becas?.filter((beca) => beca.id === idBeca);
      if (bec) {
        return console.log("Beca eliminada con exito");
      }
    }

    return null;
  }
}
