import { Request, Response } from "express";
import Usuario from "../models/Usuario";
// import bcrypt from "bcryptjs";
export class ServiciosUsuarios{
  constructor(){
  }

  getUsuarios = async (req: Request, res: Response) => {
    const comprobante = await Usuario.findAll();
    res.json({
      comprobante,
    });
  };
  
  getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const comprobante = await Usuario.findByPk(id);
    if (comprobante) {
      res.json(comprobante);
    } else {
      res.status(404).json({
        msg: `no existe un comprobante con el id ${id}`,
      });
    }
  };
  putUsuario = async (req: Request, res: Response) => {
  }
  
  deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const comprobante = await Usuario.findByPk(id);
  
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

