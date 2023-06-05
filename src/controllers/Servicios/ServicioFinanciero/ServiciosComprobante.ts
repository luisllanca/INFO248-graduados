import { BuilderComprobante } from "./BuilderComprobante";
import { Comprobante } from "./Comprobante";

export class ServiciosComprobantes {
    comprobantes: Comprobante[];

    constructor(comprobantes: Comprobante[]){
        this.comprobantes = comprobantes;
    }

    getComprobante(id: number){
        return console.log("Retornando comprobante " + id); //listo
    }

    makeComprobante(builder : BuilderComprobante,id: number, monto: number, fecha: string, img: string, tipo: string) {
        builder.reset();
        builder.setId(id);
        builder.setMonto(monto);
        builder.setFecha(fecha);
        builder.setImg(img);
        builder.setTipo(tipo);
        const comp = builder.Build();
        this.comprobantes.push(comp);
    }

    eliminarComprobante(id: number){
        console.log("Eliminando comprobante...");
        this.comprobantes.splice(id, 1);
    }

    modificarComprobante(id: number, monto: number, fecha: string, img: string, tipo: string){
        this.eliminarComprobante(id);
        const builder = new BuilderComprobante()
        this.makeComprobante(builder,id,monto,fecha,img,tipo);
    }
}