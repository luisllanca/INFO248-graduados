import { Request, Response } from "express";
import Estudiante from "../models/Estudiante";
// import bcrypt from "bcryptjs";
export class ServiciosEstudiantes{
  constructor(){
  }

  getEstudiantes = async (req: Request, res: Response) => {
    const estudiante = await Estudiante.findAll();
    res.json({
      estudiante,
    });
  };
  
  getEstudiante = async (req: Request, res: Response) => {
    const { id } = req.params;
    const estudiante = await Estudiante.findByPk(id);
    if (estudiante) {
      res.json(estudiante);
    } else {
      res.status(404).json({
        msg: `no existe un estudiante con el id ${id}`,
      });
    }
  };
  putEstudiante = async (req: Request, res: Response) => {
  }
  
  deleteEstudiante = async (req: Request, res: Response) => {
    const { id } = req.params;
    const estudiante = await Estudiante.findByPk(id);
  
    if (!estudiante) {
      return res.status(404).json({
        msg: `The user with id: ${id} not exists`,
      });
    }
    try {
      await estudiante.destroy();
  
      res.json({
        msg: "estudiante eliminado",
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

