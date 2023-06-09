
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
      // console.log(comprobantes);
      // const response = await JSON.parse(JSON.stringify(comprobantes));
      res.status(200).json({
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
      res.status(200).json({
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

  async getComprobanteEstudianteById(req: Request, res: Response){
    try {
      const id_estudiante = req.params.id;
      const estudiante = await EstudianteModel.findByPk(id_estudiante);
      if(!estudiante){
        res.status(404).json({
          ok: false,
          msg: "Estudiante no encontrado"
        });
        return;
      }
      const comprobante = await ComprobanteModel.findAll({
        where: { id_estudiante: id_estudiante },
      });
      // console.log(comprobantes);
      res.status(200).json({
        ok: true,
        msg: "Comprobantes obtenidos de estudiante con exito",
        Comprobantes: comprobante,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error" 
        });
    }
  };

//Como se hace con la fecha? decidir esto
  async createComprobante(req: Request, res: Response){
    try {
      const {id_estudiante, tipo, monto, img, extension} = req.body;

      const estudiante = await EstudianteModel.findByPk(id_estudiante);
      if(!estudiante){
        res.status(404).json({
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
        extension: extension,
        id_estudiante: id_estudiante
      });
      await comprobante.save();
      res.status(201).json({
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
      // console.log(comprobante);
      if(!comprobante){
        res.status(404).json({
          ok: false,
          msg: "Comprobante no encontrado"
        });
        return;
      }
      await ComprobanteModel.destroy({
        where: {id: id}
      });
      res.status(200).json({
        ok: true,
        msg: "Comprobante borrado con exito",
        Comprobantes: comprobante,
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
      let comprobante = await ComprobanteModel.findByPk(parseInt(id), {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      // console.log(comprobante);
      if(!comprobante){
        res.status(404).json({
          ok: false,
          msg:"Error al buscar comprobante por id" 
        });
      }
      await ComprobanteModel.update(
        req.body,
        { where: { id: id } }
      );
      comprobante = await ComprobanteModel.findByPk(parseInt(id), {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });

      res.status(200).json({
        ok: true,
        msg: "Comprobante actualizado",
        Comprobantes: comprobante,
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