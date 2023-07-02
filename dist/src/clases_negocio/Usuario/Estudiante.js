"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
const Usuario_1 = require("./Usuario");
class Estudiante extends Usuario_1.Usuario {
    constructor(id, nombre, apellido, email, password, rut, carrera, programa, comprobantes, becas) {
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
    setRut(rut) {
        this.rut = rut;
    }
    getCarrera() {
        return this.carrera;
    }
    setCarrera(carrera) {
        this.carrera = carrera;
    }
    getPrograma() {
        return this.programa;
    }
    setPrograma(programa) {
        this.programa = programa;
    }
    getComprobantes() {
        return this.comprobantes;
    }
    setComprobantes(comprobantes) {
        this.comprobantes = comprobantes;
    }
    getBecas() {
        return this.becas;
    }
    setBecas(becas) {
        this.becas = becas;
    }
}
exports.Estudiante = Estudiante;
