import { Router, Request, Response } from "express";
import { ServiciosEstudiantes} from "../controllers/ServiciosEstudiante";

const rutasEstudiante = Router();
const estudiantes = new ServiciosEstudiantes();

rutasEstudiante.get("/", (req: Request, res: Response) => estudiantes.getEstudiantes(req, res));

rutasEstudiante.get("/:id", (req: Request, res: Response) => estudiantes.getEstudianteId(req, res));

rutasEstudiante.get("/user/:id", (req: Request, res: Response) => estudiantes.getEstudianteByUser(req, res));

rutasEstudiante.put("/datos/:id", (req: Request, res: Response) => estudiantes.editarDatosPersonales(req, res));

// rutasEstudiante.get("/estudiante/:id", (req: Request, res: Response) => estudiantes.getEstudianteEstudianteById(req, res));

// rutasEstudiante.post("/", (req: Request, res: Response) => estudiantes.createEstudiante(req, res));

// rutasEstudiante.delete("/:id", (req: Request, res: Response) => estudiantes.deleteEstudianteId(req, res));

// rutasEstudiante.put("/:id", (req: Request, res: Response) => estudiantes.updateEstudianteById(req, res));


export default rutasEstudiante;

