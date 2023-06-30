import { Router, Request, Response } from "express";
// import { PersonalAdminisitrativo } from "../controllers/Usuario/PersonalAdministrativo";
// import { inicializarData } from "../seed/inicializarData";
import { ServiciosEstudiante } from "../controllers/ServiciosEstudiante";
import { ServiciosComprobantes } from "../controllers/ServiciosComprobanteANTIGUO";
import { ServicioFinanciero } from "../controllers/ServicioFinanciero";
const rutasPersonalAdminisitrativo = Router();
const estudiante = new ServiciosEstudiante();
const comprobante = new ServiciosComprobantes();
const financiero = new ServicioFinanciero();

rutasPersonalAdminisitrativo.get(
  "/estudiantes",
  async (req: Request, res: Response) => {
    try {
      const estudiantes = await estudiante.obtenerEstudiantes();
      res.json({
        Estudiantes: estudiantes,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error al obtener los estudiantes" });
    }
  }
);

rutasPersonalAdminisitrativo.get(
  "/estudiantes/:id",
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const estudiantes = await estudiante.filtrarEstudiante(+id);
      const response = JSON.parse(JSON.stringify(estudiantes));
      if (estudiantes == "{}") {
        res.status(500).json({ mensaje: "Error al filtrar el estudiante" });
      } else {
        res.json({
          Estudiante: response,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error al filtrar el estudiante" });
    }
  }
);

rutasPersonalAdminisitrativo.get(
  "/estudiantes/comprobantes/:id",
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const comprobantes = await comprobante.getComprobante(+id);
      const response = await JSON.parse(JSON.stringify(comprobantes));
      if (comprobantes == "{}") {
        res.status(500).json({ mensaje: "Error al filtrar comprobantes" });
      } else {
        res.json({
          Comprobantes: response,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error al mostrar comprobantes" });
    }
  }
);

rutasPersonalAdminisitrativo.get(
  "/estudiantes/pagos/:id",
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const comprobantes = await financiero.HistorialPagos(+id);
      const response = await JSON.parse(JSON.stringify(comprobantes));
      if (comprobantes == "{}") {
        res.status(500).json({ mensaje: "Error al filtrar comprobantes" });
      } else {
        res.json({
          Pagos: response,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error al mostrar comprobantes" });
    }
  }
);

// rutasGestion.get(
//   "/estudiantes/:id/comprobantes",
//   (req: Request, res: Response) => {
//     const { id } = req.params;
//     res.json({
//       Comprobantes: gestion.revisarComprobantesEstudiante(+id),
//     });
//   }
// );
// rutasGestion.get("/estudiantes/:id/pagos", (req: Request, res: Response) => {
//   const { id } = req.params;
//   res.json({
//     Pagos: gestion.revisarHistorialPagos(+id),
//   });
// });

export default rutasPersonalAdminisitrativo;
