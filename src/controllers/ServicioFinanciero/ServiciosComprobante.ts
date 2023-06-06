import ComprobanteModel from "../../../models/ComprobanteModel";
import { BuilderComprobante } from "../../clases_negocio/BuilderComprobante";
import { Comprobante } from "../../clases_negocio/Comprobante";

export class ServiciosComprobantes {
    //comprobantes: Comprobante[];

    //constructor(comprobantes: Comprobante[]){
    //    this.comprobantes = comprobantes;
    //}

    getComprobante(id: number){
        return console.log("Retornando comprobante " + id); //listo
    }

    async sacarComprobante(id: Number | undefined): Promise<{}> {
        try {
            const comprobante = await ComprobanteModel.findAll({
            where: { id_estudiante: id },
            attributes: { exclude: ["createdAt", "updatedAt"] },
            });
            if (!comprobante) {
            throw new Error("Comprobante no encontrado");
            }
            return comprobante;
        } catch (error) {
            return JSON.stringify(error);
        }
    }

    makeComprobante(builder : BuilderComprobante,id: number, monto: number, fecha: string, img: string, tipo: string) {
        builder.reset();
        builder.setId(id);
        builder.setMonto(monto);
        builder.setFecha(fecha);
        builder.setImg(img);
        builder.setTipo(tipo);
        const comp = builder.Build();
        //this.comprobantes.push(comp);
    }

    eliminarComprobante(id: number){
        console.log("Eliminando comprobante...");
        //this.comprobantes.splice(id, 1);
    }

    modificarComprobante(id: number, monto: number, fecha: string, img: string, tipo: string){
        this.eliminarComprobante(id);
        const builder = new BuilderComprobante()
        this.makeComprobante(builder,id,monto,fecha,img,tipo);
    }
}

export default ServiciosComprobantes;