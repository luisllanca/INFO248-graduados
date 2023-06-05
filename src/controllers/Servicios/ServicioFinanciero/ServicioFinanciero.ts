import ComprobanteModel from "../../../models/Comprobante/ComprobanteModel";
import type { Estudiante } from "../../Usuario/Estudiante";

export class ServicioFinanciero {
  getPagosTotales(est: Estudiante) {
    return console.log("retornando los pagos totales del estudiante...");
  }

  async HistorialPagos(id: Number | undefined): Promise<{}> {
    try {
      const comprobante = await ComprobanteModel.findAll({
        where: { id_estudiante: id },
        attributes: {
          exclude: ["createdAt", "updatedAt", "id", "tipo", "img"],
        },
      });
      if (!comprobante) {
        throw new Error("Comprobante no encontrado");
      }
      return comprobante;
    } catch (error) {
      return JSON.stringify(error);
    }
  }

  getPorPagar(est: Estudiante) {
    return console.log("retornando los pagos faltantes del estudiante...");
  }
}
