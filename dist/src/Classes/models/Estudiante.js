"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
const Usuario_1 = require("./Usuario");
class Estudiante extends Usuario_1.Usuario {
    constructor(id, nombre, email, password, rut, carrera, comprobantes, becas) {
        super(email, password);
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
        return console.log("Mostrando datos");
    }
    cambiarDatosPersonales() {
        return console.log("Datos actualizados correctamente");
    }
    subirComprobante() {
        return console.log("Conmprobante subido correctamente");
    }
    especificarMonto(monto) {
        return console.log("Monto: " + monto);
    }
    editarMonto(monto) {
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
    registrarse() {
        super.registrarse();
    }
    logearse() {
        super.logearse();
    }
    desloguearse() {
        super.desloguearse();
    }
}
exports.Estudiante = Estudiante;
