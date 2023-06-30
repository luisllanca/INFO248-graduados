
import ComprobanteModel from "../models/ComprobanteModel";
import EstudianteModel from "../models/EstudianteModel";
import { Request, Response } from "express";

export class ServiciosComprobantes {

  constructor(){
  }

  async getComprobantes(req: Request, res: Response){
    try {
      const comprobantes = await ComprobanteModel.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      console.log(comprobantes);
      // const response = await JSON.parse(JSON.stringify(comprobantes));
      res.json({
        ok: true,
        msg: "Comprobantes obtenidos con exito",
        Comprobantes: comprobantes,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            ok: false,
            msg: "Error al obtener los comprobantes" 
        });
    }
  };

  async getComprobanteId(req: Request, res: Response){
    // console.log(req.params);
    try {
      const id = req.params.id;
      const comprobantes = await ComprobanteModel.findByPk(parseInt(id), {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      console.log(comprobantes);
      res.json({
        ok: true,
        Comprobantes: comprobantes,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            ok: false, 
            msg: "Error al obtener comprobante por id" 
        });
    }
  };

//Corregir esta, validar
  async createComprobante(req: Request, res: Response){
    try {
      const {monto, tipo, img, id_estudiante} = req.body;

      const estudiante = await EstudianteModel.findByPk(id_estudiante);
      if(!estudiante){
        res.json({
          ok: false,
          msg: "Estudiante no encontrado"
        });
        return;
      }
      const fechaActual = new Date();
      fechaActual.setUTCHours(fechaActual.getUTCHours() - 4);
      const comprobante = await ComprobanteModel.create({
        fecha: fechaActual,
        tipo: tipo,
        monto: monto,
        img: img,
        id_estudiante: id_estudiante
      });
      // console.log(comprobantes);
      res.json({
        ok: true,
        msg: "Comprobante creado",
        Comprobantes: comprobante,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error al crear el comprobante" 
        });
    }
  };

  async deleteComprobanteId(req: Request, res: Response){
    try {
      const id = req.params.id;
      const comprobante = await ComprobanteModel.findByPk(parseInt(id), {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      console.log(comprobante);
      if(!comprobante){
        res.json({
          ok: false,
          msg: "Comprobante no encontrado"
        });
        return;
      }
      await ComprobanteModel.destroy({
        where: {id: id}
      });
      res.json({
        ok: true,
        msg: "Comprobante borrado con exito",
        Comprobante: comprobante,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
          ok: false,
          msg: "Error" 
        });
    }
  };
// Corregir 
  async updateComprobanteById(req: Request, res: Response){
    // console.log(req.params);
    try {
      const id = req.params.id;
      const comprobante = await ComprobanteModel.findByPk(parseInt(id), {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      console.log(comprobante);
      if(!comprobante){
        res.json({
          ok: false,
          msg:"Error al buscar comprobante por id" 
        });
      }
      await ComprobanteModel.update(
        req.body,
        { where: { id: id } }
      );
      res.json({
        ok: true,
        msg: "Comprobante actualizado",
        Comprobante: comprobante,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
          ok: false,
          msg: "Error" 
        });
    }
  };
}