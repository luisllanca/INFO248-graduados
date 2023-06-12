import { Router, Request, Response } from "express";
import { ServicioCuenta } from "../controllers/ServicioCuenta";
import EstudianteModel from "../models/EstudianteModel";

const servicio = new ServicioCuenta();
const rutasUsuarios = Router();

rutasUsuarios.get(
  "/estudiantes/:id/change-password/:pass",
  async (req: Request, res: Response) => {
    try {
      const { id, pass } = req.params;
      const estudiantes = await servicio.cambiarContraseña(parseInt(id), pass);
      res.json({
        Estudiantes: estudiantes,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error en cambio de contraseña" });
    }
  }
);

export default rutasUsuarios;
