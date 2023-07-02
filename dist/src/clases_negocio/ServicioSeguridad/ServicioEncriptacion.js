"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioEncriptacion = void 0;
const Encriptacion_1 = require("./Encriptacion");
const Desencriptacion_1 = require("./Desencriptacion");
class ServicioEncriptacion {
    procesarDatos() {
        console.log("Procesando datos...");
        const encriptador = new Encriptacion_1.Encriptacion('aes-256-ctr');
        const desencriptador = new Desencriptacion_1.Desencriptacion('aes-256-ctr');
        const texto = "Texto de prueba";
        const textoEncriptado = encriptador.encriptar(texto);
        const textoDesencriptado = desencriptador.desencriptar(textoEncriptado);
        console.log("Texto original: " + texto);
        console.log("Texto encriptado: " + textoEncriptado);
        console.log("Texto desencriptado: " + textoDesencriptado);
    }
}
exports.ServicioEncriptacion = ServicioEncriptacion;
