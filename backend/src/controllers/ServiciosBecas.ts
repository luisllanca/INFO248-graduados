
import BecaModel from "../models/BecaModel";
import { Request, Response } from "express";

export class ServiciosBecas{
  constructor(){
  }

  async getBecas(req: Request, res: Response){
    try {
      const becas = await BecaModel.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      // console.log(becas);
      // const response = await JSON.parse(JSON.stringify(becas));
      res.status(200).json({
        ok: true,
        Becas: becas,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
          ok:false,
          msg: "Error al obtener becas" 
        });
    }
  };

  async getBecaId(req: Request, res: Response){
    // console.log(req.params);
    try {
      const id = req.params.id;
      const becas = await BecaModel.findByPk(parseInt(id), {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      // console.log(becas);
      res.status(200).json({
        ok: true,
        Becas: becas,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
          ok: false,
          msg: "Error al obtener beca por id" 
        });
    }
  };
//Corregir esta, validar
  async createBeca(req: Request, res: Response){
    try {
      // const {tipo, monto, fechaAsi, fechaExp, descripcion, id_estudiante} = req.body;
      const becas = await BecaModel.create(req.body);
      // console.log(becas);
      res.status(201).json({
        ok:true,
        Becas: becas,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
          ok: true,
          msg: "Error al crear la beca" 
        });
    }
  };

  async deleteBecaId(req: Request, res: Response){
    // console.log(req.params);
    try {
      const id = req.params.id;
      const beca = await BecaModel.findByPk(parseInt(id), {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      // console.log(beca);
      if(!beca){
        res.status(404).json({
          ok: false,
          msg: "Error beca no encontrada"
        });
        return;
      }
      await BecaModel.destroy({
        where: {id: id}
      });
      res.status(200).json({
        ok: true,
        Beca: beca,
      });
    } catch (error) {
        // console.error(error);
        res.status(500).json({ 
          ok: false,
          msg: "Error" 
        });
    }
  };
// Corregir 
  async updateBecaById(req: Request, res: Response){
    // console.log(req.params);
    try {
      const id = req.params.id;
      const beca = await BecaModel.findByPk(parseInt(id), {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      // console.log(beca);
      if(!beca){
        res.status(404).json({
          ok: false,
          msg: "Beca no encontrada"
        });
        return;
      }
      await BecaModel.update(
        req.body,
        { where: { id: id } }
      );
      res.status(200).json({
        ok: true,
        msg: "Beca actualizada",
        Beca: beca,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
          ok: false,
          msg: "Error al buscar beca por id" 
        });
    }
  };
}