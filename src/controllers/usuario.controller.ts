import { Request, Response } from "express";
import Usuario from "../models/Usuario";
// import bcrypt from "bcryptjs";
export class ServiciosUsuarios{
  constructor(){
  }

  getUsuarios = async (req: Request, res: Response) => {
    const usuario = await Usuario.findAll();
    res.json({
      usuario,
    });
  };
  
  getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({
        msg: `no existe un usuario con el id ${id}`,
      });
    }
  };
  putUsuario = async (req: Request, res: Response) => {
  }
  
  deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
  
    if (!usuario) {
      return res.status(404).json({
        msg: `The user with id: ${id} not exists`,
      });
    }
    try {
      await usuario.destroy();
  
      res.json({
        msg: "usuario eliminado",
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

