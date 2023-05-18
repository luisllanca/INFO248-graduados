import { Request, Response } from "express";
import Estudiante from "../models/Estudiante";
// import bcrypt from "bcryptjs";
export class ServiciosEstudiantes{
  constructor(){
  }

  getEstudiantes = async (req: Request, res: Response) => {
    const comprobante = await Estudiante.findAll();
    res.json({
      comprobante,
    });
  };
  
  getEstudiante = async (req: Request, res: Response) => {
    const { id } = req.params;
    const comprobante = await Estudiante.findByPk(id);
    if (comprobante) {
      res.json(comprobante);
    } else {
      res.status(404).json({
        msg: `no existe un comprobante con el id ${id}`,
      });
    }
  };
  putEstudiante = async (req: Request, res: Response) => {
  }
  
  deleteEstudiante = async (req: Request, res: Response) => {
    const { id } = req.params;
    const comprobante = await Estudiante.findByPk(id);
  
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

