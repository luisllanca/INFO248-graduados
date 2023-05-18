import { Request, Response } from "express";
import Beca from "../models/Beca";
// import bcrypt from "bcryptjs";
export class ServiciosBecas{
  constructor(){
  }

  getBecas = async (req: Request, res: Response) => {
    const beca = await Beca.findAll();
    res.json({
      beca,
    });
  };
  
  getBeca = async (req: Request, res: Response) => {
    const { id } = req.params;
    const beca = await Beca.findByPk(id);
    if (beca) {
      res.json(beca);
    } else {
      res.status(404).json({
        msg: `no existe un beca con el id ${id}`,
      });
    }
  };
  putBeca = async (req: Request, res: Response) => {
  }
  
  deleteBeca = async (req: Request, res: Response) => {
    const { id } = req.params;
    const beca = await Beca.findByPk(id);
  
    if (!beca) {
      return res.status(404).json({
        msg: `The user with id: ${id} not exists`,
      });
    }
    try {
      await beca.destroy();
  
      res.json({
        msg: "beca eliminado",
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

