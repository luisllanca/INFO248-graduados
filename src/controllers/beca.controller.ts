import { Request, Response } from "express";
import Beca from "../models/Beca";
// import bcrypt from "bcryptjs";
export class ServiciosBecas{
  constructor(){
  }

  getBecas = async (req: Request, res: Response) => {
    const comprobante = await Beca.findAll();
    res.json({
      comprobante,
    });
  };
  
  getBeca = async (req: Request, res: Response) => {
    const { id } = req.params;
    const comprobante = await Beca.findByPk(id);
    if (comprobante) {
      res.json(comprobante);
    } else {
      res.status(404).json({
        msg: `no existe un comprobante con el id ${id}`,
      });
    }
  };
  putBeca = async (req: Request, res: Response) => {
  }
  
  deleteBeca = async (req: Request, res: Response) => {
    const { id } = req.params;
    const comprobante = await Beca.findByPk(id);
  
    if (!comprobante) {
      return res.status(404).json({
        msg: `The user with id: ${id} not exists`,
      });
    }
    try {
      await comprobante.destroy();
  
      res.json({
        msg: "comprobante eliminado",
        id,
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        msg: "Hable con el administrador",
      });
    }
  };
}

