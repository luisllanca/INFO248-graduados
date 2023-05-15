import { Usuario } from "./Usuario";
export class Gestion extends Usuario {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    super(email, password);
    this.email = email;
    this.password = password;
  }
  visualizarPerfilPersonal() {
    super.visualizarPerfilPersonal();
  }
  cambiarDatosPersonales(password: string) {
    console.log(password);
    super.cambiarDatosPersonales(password);
  }

  // crearEstudiante(
  //   id: number,
  //   nombre: string,
  //   email: string,
  //   password: string,
  //   rut: string,
  //   carrera: string
  // ) {
  //   this.estudiantes.push(
  //     new Estudiante(id, nombre, email, password, rut, carrera, [], [])
  //   );
  //   return console.log("Estudiante creado");
  // }
  // verMatriculasEstudiantes(id: number) {
  //   const matriculas: Array<String> = [];
  //   const estudiante = this.estudiantes?.find((e) => e.id === id);
  //   if (estudiante && estudiante.becas) {
  //     for (let i = 0; i < estudiante.becas.length; i++) {
  //       if (estudiante.becas[i].tipo == "matricula") {
  //         matriculas.push(estudiante.becas[i].fechaAsi);
  //       }
  //     }
  //     return matriculas;
  //   }
  //   return null;
  // }
  // revisarComprobantesEstudiante(id: number) {
  //   const estudiante = this.estudiantes?.find((e) => e.id === id);
  //   if (estudiante && estudiante.comprobantes) {
  //     return estudiante.comprobantes;
  //   }
  //   return null;
  // }
  // asignarBecaEstudiante(id: number) {
  //   const estudiante = this.estudiantes?.filter((e) => e.id === id);
  //   if (estudiante) {
  //     return console.log("Asignando beca a estudiante");
  //   }
  //   return null;
  // }
  // filtrarEstudiantes(id: number) {
  //   const estudiante = this.estudiantes?.filter((e) => e.id === id);
  //   if (estudiante) {
  //     return this.estudiantes?.filter((estudiante) => estudiante.id === id);
  //   }
  //   return null;
  // }
  // revisarHistorialPagos(id: number) {
  //   const pagos: Array<Array<String>> = [];
  //   const estudiante = this.estudiantes?.find((e) => e.id === id);
  //   if (estudiante && estudiante.comprobantes) {
  //     for (let i = 0; i < estudiante.comprobantes.length; i++) {
  //       let fechasP: Array<String> = [];
  //       fechasP.push(estudiante.comprobantes[i].tipo);
  //       fechasP.push(estudiante.comprobantes[i].fecha);
  //       pagos.push(fechasP);
  //     }
  //     return pagos;
  //   }
  //   return null;
  // }
  // eliminarBecaEstudiante(idEst: number, idBeca: number) {
  //   const estudiante = this.estudiantes?.find((e) => e.id === idEst);
  //   if (estudiante && estudiante.becas) {
  //     const becas = estudiante.becas?.filter((b) => b.id === idBeca);
  //     if (becas) {
  //       return console.log("Beca eliminada con exito");
  //     }
  //   }
  //   return null;
  // }
}
