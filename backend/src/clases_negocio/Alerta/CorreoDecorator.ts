import { Alertas } from "./Alertas";
import { DecoratorAlerta } from "./DecoratorAlerta";

export class CorreoDecorator extends DecoratorAlerta{
    constructor(alerta: Alertas){
        super(alerta);
    }

    send() : string {
        return `${this.alerta.send()} - por correo`
    }
}