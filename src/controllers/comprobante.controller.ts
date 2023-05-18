import { Request, Response } from "express";
import Comprobante from "../models/Comprobante";
// import bcrypt from "bcryptjs";
export class ServiciosComprobantes{
  constructor(){
  }

  getComprobantes = async (req: Request, res: Response) => {
    const comprobante = await Comprobante.findAll();
  
    res.json({
      comprobante,
    });
  };
  
  getComprobante = async (req: Request, res: Response) => {
    const { id } = req.params;
    const comprobante = await Comprobante.findByPk(id);
  
    if (comprobante) {
      res.json(comprobante);
    } else {
      res.status(404).json({
        msg: `no existe un comprobante con el id ${id}`,
      });
    }
  };
  putComprobante = async (req: Request, res: Response) => {
  }
  
  deleteComprobante = async (req: Request, res: Response) => {
    const { id } = req.params;
    const comprobante = await Comprobante.findByPk(id);
  
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

