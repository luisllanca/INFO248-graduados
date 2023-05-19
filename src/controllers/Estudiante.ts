import { Usuario } from "./Usuario";
export class Estudiante extends Usuario {
  rut: string;
  carrera: string;
  programa: string;

  constructor(id: number, nombre: string, email: string, password: string,rut: string, carrera: string, programa: string) {
    super(id, nombre, email, password);
    this.rut = rut;
    this.carrera = carrera;
    this.programa = programa;
  }
  visualizarPerfilPersonal() {
    console.log("Visualizando perfil de estudiante...");
  }
  cambiarDatosPersonales(password: string) {
    console.log("Cambiando datos de estudiante...");
    super.setPassword(password);
  }
  // subirComprobante() {
  //   return console.log("Conmprobante subido correctamente");
  // }
  // especificarMonto(monto: number) {
  //   return console.log("Monto: " + monto);
  // }
  // editarMonto(monto: number) {
  //   return console.log("Monto nuevo: " + monto);
  // }
  // visualizarComprobante() {
  //   return console.log("Mostrando comprobante");
  // }
  // eliminarComprobante() {
  //   return console.log("Comprobante eliminado");
  // }
  // verComprobantes() {
  //   return console.log("Mostrando comprobantes");
  // }
}
