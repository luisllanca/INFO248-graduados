import { Router, Request, Response } from "express";
import { ServiciosEstudiantes} from "../controllers/ServiciosEstudiante";

const rutasEstudiante = Router();
const comprobantes = new ServiciosEstudiantes();

rutasEstudiante.get("/", (req: Request, res: Response) => comprobantes.getEstudiantes(req, res));

rutasEstudiante.get("/:id", (req: Request, res: Response) => comprobantes.getEstudianteId(req, res));

// rutasEstudiante.get("/estudiante/:id", (req: Request, res: Response) => comprobantes.getEstudianteEstudianteById(req, res));

// rutasEstudiante.post("/", (req: Request, res: Response) => comprobantes.createEstudiante(req, res));

// rutasEstudiante.delete("/:id", (req: Request, res: Response) => comprobantes.deleteEstudianteId(req, res));

// rutasEstudiante.put("/:id", (req: Request, res: Response) => comprobantes.updateEstudianteById(req, res));


export default rutasEstudiante;

