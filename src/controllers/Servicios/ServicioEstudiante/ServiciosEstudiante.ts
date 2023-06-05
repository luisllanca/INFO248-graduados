import { Identifier } from "sequelize";
import EstudianteModel from "../../../models/Estudiante/EstudianteModel";
import type { Estudiante } from "../../Usuario/Estudiante";
import { Comprobante } from "../ServicioFinanciero/Comprobante";
export class ServiciosEstudiante {
  subirComprobante(
    est: Estudiante,
    id: number,
    monto: number,
    fecha: string,
    img: string,
    tipo: string
  ) {
    const comps = est.getComprobantes();
    const comp = new Comprobante(id, monto, fecha, tipo, img);
    comps.push(comp);
    est.setComprobantes(comps);
  }
  verComprobantes(est: Estudiante) {
    console.log("Visualizando comprobantes...");
    return est.comprobantes;
  }
  especificarMonto(idComp: number, monto: number) {
    console.log(
      "Especificando monto " + monto + " para el comprobante " + idComp
    );
  }
  editarMonto(idComp: number, monto: number) {
    console.log("Editando comprobante " + idComp + " con monto " + monto);
  }

  async filtrarEstudiante(id: Identifier | undefined): Promise<{}> {
    try {
      const estudiante = await EstudianteModel.findByPk(id, {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      if (!estudiante) {
        throw new Error("Estudiante no encontrado");
      }
      return estudiante;
    } catch (error) {
      return JSON.stringify(error);
    }
  }

  async obtenerEstudiantes(): Promise<{}> {
    try {
      const estudiantes = await EstudianteModel.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
  
      return estudiantes;
    } catch (err) {
      return JSON.stringify(err);
    }
  }

}
