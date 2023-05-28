import { Estudiante } from "../../Usuario/Usuario/Estudiante";
import { Alertas } from "./Alertas";

export class AlertaCorreo implements Alertas {
    mensaje : string;
    destinatario : Estudiante;

    constructor(mensaje : string, destinatario: Estudiante) {
        this.mensaje = mensaje;
        this.destinatario = destinatario;
    }

    getMensaje() {
        return this.mensaje;
    }
    setMensaje(mensaje : string) {
        this.mensaje = mensaje;
    }

    getDestinatario() {
        return this.destinatario;
    }
    setDestinatario(destinatario: Estudiante) {
        this.destinatario = destinatario;
    }

    send() : string {
        return "Mensaje enviado a"+this.destinatario.nombre+": "+this.mensaje
    }
}