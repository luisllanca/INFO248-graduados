import type { Comprobante } from "../../clases_negocio/Comprobante";
import type { Beca } from "../../clases_negocio/Beca";
import { Usuario } from "./Usuario";
import { ServicioCuenta } from "../../controllers/ServicioCuenta";
export class Estudiante extends Usuario {
  rut: string;
  carrera: string;
  programa: string;
  comprobantes: Comprobante[];
  becas: Beca[];

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    password: string,
    rut: string,
    carrera: string,
    programa: string,
    comprobantes: Comprobante[],
    becas: Beca[]
  ) {
    super(id, nombre, apellido, email, password);
    this.rut = rut;
    this.carrera = carrera;
    this.programa = programa;
    this.comprobantes = comprobantes;
    this.becas = becas;
  }
  // visualizarPerfilPersonal() {
  //   console.log("Visualizando perfil de estudiante...");
  // }
  // cambiarDatosPersonales(id: number, password: string) {
  //   console.log("Cambiando datos de estudiante...");
  //   super.setPassword(password);
  //   const cambiarPassword = new ServicioCuenta();
  //   cambiarPassword.cambiarContraseña(id, password); //
  // }

  getRut() {
    return this.rut;
  }
  setRut(rut: string) {
    this.rut = rut;
  }
  getCarrera() {
    return this.carrera;
  }
  setCarrera(carrera: string) {
    this.carrera = carrera;
  }
  getPrograma() {
    return this.programa;
  }
  setPrograma(programa: string) {
    this.programa = programa;
  }

  getComprobantes() {
    return this.comprobantes;
  }
  setComprobantes(comprobantes: Comprobante[]) {
    this.comprobantes = comprobantes;
  }

  getBecas() {
    return this.becas;
  }

  setBecas(becas: Beca[]) {
    this.becas = becas;
  }
}
