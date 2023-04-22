"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    registrarse() {
        return console.log("Registro exitoso");
    }
    logearse() {
        return console.log("Inicio de sesion con exito");
    }
    desloguearse() {
        return console.log("Sesion cerrada");
    }
}
exports.Usuario = Usuario;
