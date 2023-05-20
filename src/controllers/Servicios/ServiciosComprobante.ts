import { Comprobante } from "./Comprobante";

export class ServiciosComprobantes {
    comprobantes: Comprobante[];

    constructor(comprobantes: Comprobante[]){
        this.comprobantes = comprobantes;
    }

    getComprobante(id: number){
        return console.log("Retornando comprobante " + id);
    }
    
    generarComprobante(id: number, monto: number, fecha: string, img: string, tipo: string){
        console.log("Generando comprobante...")
        const comp = new Comprobante(id,monto,fecha,img,tipo);
        this.comprobantes.push(comp);
    }

    eliminarComprobante(id: number){
        console.log("Eliminando comprobante...");
        this.comprobantes.splice(id, 1);
    }

    modificarComprobante(id: number, monto: number, fecha: string, img: string, tipo: string){
        this.eliminarComprobante(id);
        this.generarComprobante(id,monto,fecha,img,tipo);
    }
}