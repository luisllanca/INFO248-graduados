//Crear rutas más adelante.
import { Router, Request, Response } from "express";
// import { PersonalAdminisitrativo } from "../controllers/Usuario/PersonalAdministrativo";
// import { inicializarData } from "../seed/inicializarData";
import { ServiciosEstudiante } from "../controllers/ServiciosEstudiante";
import { ServiciosComprobantes } from "../controllers/ServiciosComprobante";

const rutasEstudiante = Router();
const estudiante = new ServiciosEstudiante();
const comprobante = new ServiciosComprobantes();

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
        Comrpobante: "Subido exitosamente",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error al subir comprobante" });
    }
  }
);
export default rutasEstudiante;
