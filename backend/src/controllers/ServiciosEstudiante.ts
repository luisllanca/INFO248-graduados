import { Identifier } from "sequelize";
import EstudianteModel from "../models/EstudianteModel";
import type { Estudiante } from "../clases_negocio/Usuario/Estudiante";
import { Comprobante } from "../clases_negocio/Comprobante";
import UsuarioModel from "../models/UsuarioModel";
import ComprobanteModel from "../models/ComprobanteModel";

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
  async verComprobantes(id: Identifier) {
    const est = await this.obtenerEstudiante(id);
    if(est){
      const comprobante = await ComprobanteModel.findAll({
        where: { id_estudiante: id },
      });
      return comprobante;
    }
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

  async obtenerEstudiante(id: Identifier) {
    try {
      const estudiante = await EstudianteModel.findOne({
        where: { id: id },
      });
  
      if(estudiante){
        return estudiante;
      } else {
        console.log("Estudiante no encontrado")
      }
    } catch (err) {
      return JSON.stringify(err);
    }
  }

  async obtenerUsuario(idUser: Identifier) {
    try {
      const estudiante = await EstudianteModel.findOne({
        where: { id_usuario: idUser },
      });
  
      if(estudiante){
        return estudiante;
      } else {
        console.log("Estudiante no encontrado")
      }
    } catch (err) {
      return JSON.stringify(err);
    }
  }

}
