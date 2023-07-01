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
    const usuario = await servicio.registrarUsuario(
      nombre,
      apellido,
      password,
      email
    );
    if (usuario) {
      return res.status(201).json({
        mensaje: "Usuario registrado correctamente",
        usuario,
      });
    } else {
      return res.status(400).json({
        mensaje: "El usuario ya está registrado",
      });
    }
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ mensaje: "Error al registrar usuario" });
  }
});

rutasUsuarios.post("/login", async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;
    const usuario = await servicio.loguearse(password, email);
    if (usuario) {
      return res.status(201).json({
        mensaje: "Usuario logeado correctamente",
        usuario,
      });
    } else {
      return res.status(400).json({
        mensaje: "El usuario no existe",
      });
    }
  } catch (error) {
    console.error("Error al logear usuario:", error);
    res.status(500).json({ mensaje: "Error al logear usuario" });
  }
});

export default rutasUsuarios;
