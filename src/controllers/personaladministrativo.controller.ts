import { Request, Response } from "express";
import PersonalAdministrativo from "../models/PersonalAdministrativo";
// import bcrypt from "bcryptjs";
export class ServiciosPersonalAdministrativos{
  constructor(){
  }

  getPersonalAdministrativos = async (req: Request, res: Response) => {
    const comprobante = await PersonalAdministrativo.findAll();
    res.json({
      comprobante,
    });
  };
  
  getPersonalAdministrativo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const comprobante = await PersonalAdministrativo.findByPk(id);
    if (comprobante) {
      res.json(comprobante);
    } else {
      res.status(404).json({
        msg: `no existe un comprobante con el id ${id}`,
      });
    }
  };
  putPersonalAdministrativo = async (req: Request, res: Response) => {
  }
  
  deletePersonalAdministrativo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const comprobante = await PersonalAdministrativo.findByPk(id);
  
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

