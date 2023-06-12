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

rutasUsuarios.post("/registrar", async (req: Request, res: Response) => {
  try {
    const { nombre, apellido, password, email } = req.body;
    const usuario = await servicio.registrarUsuario(nombre, apellido, password, email);

    res.json({
      mensaje: "Usuario registrado correctamente",
      usuario,
    });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ mensaje: "Error al registrar usuario" });
  }
});

export default rutasUsuarios;
