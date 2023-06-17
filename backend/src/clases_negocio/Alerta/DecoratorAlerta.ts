import { Alertas } from "./Alertas";

export class DecoratorAlerta implements Alertas{
    alerta: Alertas;

    constructor(alerta : Alertas){
        this.alerta = alerta;
    }

    send() : string{
        return this.alerta.send();
    }


}