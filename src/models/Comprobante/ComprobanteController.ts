import { Request, Response } from "express";
import { Comprobante } from "../../controllers/Servicios/ServicioFinanciero/Comprobante";
import { Estudiante } from "../../controllers/Usuario/Estudiante";
import ComprobanteModel from "./ComprobanteModel";
import { Identifier } from "sequelize";
import EstudianteModel from "../Estudiante/EstudianteModel";

class ComprobanteController {
  async sacarComprobante(id: Identifier | undefined): Promise<{}> {
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

  async HistorialPagos(id: Identifier | undefined): Promise<{}> {
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
}

export default ComprobanteController;
