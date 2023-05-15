import { Router, Request, Response } from "express";
import { Gestion } from "../controllers/Gestion";
import { inicializarData } from "../seed/inicializarData";

const gestion = new Gestion("gesiton@mail.com", "123456", inicializarData());
const rutasGestion = Router();

rutasGestion.get("/estudiantes/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    Estudiantes: gestion.filtrarEstudiantes(+id),
  });
});
rutasGestion.get(
  "/estudiantes/:id/comprobantes",
  (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
      Comprobantes: gestion.revisarComprobantesEstudiante(+id),
    });
  }
);
rutasGestion.get("/estudiantes/:id/pagos", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    Pagos: gestion.revisarHistorialPagos(+id),
  });
});

export default rutasGestion;
