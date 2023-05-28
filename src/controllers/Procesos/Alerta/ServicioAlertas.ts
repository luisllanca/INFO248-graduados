import type { Estudiante } from "../../Usuario/Usuario/Estudiante";

export class ServicioAlertas {
    generarAlerta() { 
        console.log("Generando alerta...")
    }
    
    enviarAlerta(est : Estudiante) {
        console.log("Enviando alerta a estudiante...")
    }
}