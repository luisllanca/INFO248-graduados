import ComprobanteModel from "../models/ComprobanteModel";
import EstudianteModel from "../models/EstudianteModel";
import { BuilderComprobante } from "../clases_negocio/BuilderComprobante";
import { Comprobante } from "../clases_negocio/Comprobante";
import { Identifier } from "sequelize";
import moment from "moment-timezone";
export class ServiciosComprobantes {
  //comprobantes: Comprobante[];

  //constructor(comprobantes: Comprobante[]){
  //    this.comprobantes = comprobantes;
  //}

  async getComprobante(id: Number | undefined): Promise<{}> {
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

  async subirComprobante(
    id: Identifier | number,
    tipo: string,
    monto: number,
    img: string
  ) {
    try {
      const estudiante = await EstudianteModel.findByPk(id);
      if (!estudiante) {
        throw new Error("Estudiante no encontrado");
      }
      const fechaActual = new Date();

      // Configura la hora en Santiago de Chile (UTC-4)
      fechaActual.setUTCHours(fechaActual.getUTCHours() - 4);
      const comprobante = ComprobanteModel.build({
        fecha: fechaActual,
        tipo: tipo,
        monto: monto,
        img: img,
        id_estudiante: id,
      });
      await comprobante.save();
      console.log("Comprobante guardado correctamente");
    } catch (error) {
      throw new Error("Error al subir el comprobante");
    }
  }

  makeComprobante(
    builder: BuilderComprobante,
    id: number,
    monto: number,
    fecha: string,
    img: string,
    tipo: string
  ) {
    builder.reset();
    builder.setId(id);
    builder.setMonto(monto);
    builder.setFecha(fecha);
    builder.setImg(img);
    builder.setTipo(tipo);
    const comp = builder.Build();
    //this.comprobantes.push(comp);
  }

  eliminarComprobante(id: number) {
    console.log("Eliminando comprobante...");
    //this.comprobantes.splice(id, 1);
  }

  modificarComprobante(
    id: number,
    monto: number,
    fecha: string,
    img: string,
    tipo: string
  ) {
    this.eliminarComprobante(id);
    const builder = new BuilderComprobante();
    this.makeComprobante(builder, id, monto, fecha, img, tipo);
  }
}

export default ServiciosComprobantes;
