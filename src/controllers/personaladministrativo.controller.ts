import { Request, Response } from "express";
import PersonalAdministrativo from "../models/PersonalAdministrativo";
// import bcrypt from "bcryptjs";
export class ServiciosPersonalAdministrativos{
  constructor(){
  }

  getPersonalAdministrativos = async (req: Request, res: Response) => {
    const personaladministrativo = await PersonalAdministrativo.findAll();
    res.json({
      personaladministrativo,
    });
  };
  
  getPersonalAdministrativo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const personaladministrativo = await PersonalAdministrativo.findByPk(id);
    if (personaladministrativo) {
      res.json(personaladministrativo);
    } else {
      res.status(404).json({
        msg: `no existe un personaladministrativo con el id ${id}`,
      });
    }
  };
  putPersonalAdministrativo = async (req: Request, res: Response) => {
  }
  
  deletePersonalAdministrativo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const personaladministrativo = await PersonalAdministrativo.findByPk(id);
  
    if (!personaladministrativo) {
      return res.status(404).json({
        msg: `The user with id: ${id} not exists`,
      });
    }
    try {
      await personaladministrativo.destroy();
  
      res.json({
        msg: "personaladministrativo eliminado",
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

