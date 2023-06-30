//Crear rutas más adelante.
import { Router, Request, Response } from "express";
// import { PersonalAdminisitrativo } from "../controllers/Usuario/PersonalAdministrativo";
// import { inicializarData } from "../seed/inicializarData";
import EstudianteModel from "../models/EstudianteModel";
import UsuarioModel from "../models/UsuarioModel";
import { ServiciosEstudiante } from "../controllers/ServiciosEstudiante";
import { ServiciosComprobantes } from "../controllers/ServiciosComprobanteANTIGUO";

const rutasEstudiante = Router();
const estudiante = new ServiciosEstudiante();
const comprobante = new ServiciosComprobantes();

rutasEstudiante.get(
  "/:idUser",
  async (req: Request, res: Response) => {
    try {
      const {idUser} = req.params;
      console.log(idUser);

      const est = await estudiante.obtenerUsuario(idUser);

      res.json({
        Estudiante: est,
      });
    }
    catch(error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error al obtener estudiante" });
    }
  }
);

rutasEstudiante.get(
  "/:id/comprobantes",
  async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      console.log(id);

      const comp = await estudiante.verComprobantes(id);

      res.json({
        Comps: comp,
      });
    }
    catch(error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error al obtener estudiante" });
    }
  }
);

rutasEstudiante.post(
  "/subirComprobante",
  async (req: Request, res: Response) => {
    try {
      const { id, tipo, monto, img } = req.body;

      const comprobant = await comprobante.subirComprobante(
        id,
        tipo,
        monto,
        img
      ); //falta subir comprobante
      res.json({
        Comprobante: "Subido exitosamente",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error al subir comprobante" });
    }
  }
);

rutasEstudiante.delete(
  "/eliminarComprobante/:id",
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      console.log(id);

      const comprobant = await comprobante.eliminarComprobante(
        id
      );
      res.json({
        Comprobante: `Comprobante ${id} eliminado correctamente`,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error al eliminar comprobante" });
    }
  }
);

export default rutasEstudiante;
