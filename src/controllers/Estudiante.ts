import { Comprobante } from "./Comprobante";
import { Beca } from "./Beca";
import { Usuario } from "./Usuario";
export class Estudiante implements Usuario {
  id: number;
  nombre: string;
  email: string;
  password: string;
  rut: string;
  carrera: string;
  comprobantes: Comprobante[];
  becas: Beca[];

  constructor(
    id: number,
    nombre: string,
    email: string,
    password: string,
    rut: string,
    carrera: string,
    comprobantes: Comprobante[],
    becas: Beca[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.rut = rut;
    this.carrera = carrera;
    this.comprobantes = comprobantes;
    this.becas = becas;
  }
  visualizarPerfilPersonal() {
    console.log("visualizar");
  }
  cambiarDatosPersonales(password: string) {
    console.log("cambiar datos", password);
  }
  subirComprobante() {
    return console.log("Conmprobante subido correctamente");
  }
  especificarMonto(monto: number) {
    return console.log("Monto: " + monto);
  }
  editarMonto(monto: number) {
    return console.log("Monto nuevo: " + monto);
  }
  visualizarComprobante() {
    return console.log("Mostrando comprobante");
  }
  eliminarComprobante() {
    return console.log("Comprobante eliminado");
  }
  verComprobantes() {
    return console.log("Mostrando comprobantes");
  }
}
