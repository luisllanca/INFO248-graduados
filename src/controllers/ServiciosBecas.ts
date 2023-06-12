
import BecaModel from "../models/BecaModel";
import { Router, Request, Response } from "express";

export class ServiciosBecas{
  constructor(){

  }

  async getBecas(req: Request, res: Response){
    try {
      const becas = await BecaModel.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      console.log(becas);
      // const response = await JSON.parse(JSON.stringify(becas));
      res.json({
        Becas: becas,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al obtener becas" });
    }
  };

  async getBecaId(req: Request, res: Response){
    console.log(req.params);
    try {
      const id = req.params.id;
      const becas = await BecaModel.findByPk(parseInt(id), {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      console.log(becas);
      res.json({
        Becas: becas,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al obtener beca por id" });
    }
  };

}