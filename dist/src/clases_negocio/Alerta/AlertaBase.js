"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaCorreo = void 0;
class AlertaCorreo {
    constructor(mensaje, destinatario) {
        this.mensaje = mensaje;
        this.destinatario = destinatario;
    }
    getMensaje() {
        return this.mensaje;
    }
    setMensaje(mensaje) {
        this.mensaje = mensaje;
    }
    getDestinatario() {
        return this.destinatario;
    }
    setDestinatario(destinatario) {
        this.destinatario = destinatario;
    }
    send() {
        return "Mensaje enviado a" + this.destinatario.nombre + ": " + this.mensaje;
    }
}
exports.AlertaCorreo = AlertaCorreo;
