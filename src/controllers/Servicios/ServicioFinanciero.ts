import type { Estudiante } from "../Usuario/Estudiante";

export class ServicioFinanciero {
    getPagosTotales(est : Estudiante) {
        return console.log("retornando los pagos totales del estudiante...")
    }
    
    getPorPagar(est : Estudiante) {
        return console.log("retornando los pagos faltantes del estudiante...")
    }
}