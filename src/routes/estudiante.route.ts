//Crear rutas más adelante.
import { Router } from "express";
import { ServiciosEstudiantes} from "../controllers/estudiante.controller";

const estudiante = Router();
const serviciosEstudiante = new ServiciosEstudiantes();
estudiante.get("/", serviciosEstudiante.getEstudiantes);

estudiante.get("/:id", serviciosEstudiante.getEstudiante);

estudiante.post()

estudiante.put("/:id", serviciosEstudiante.putEstudiante);
estudiante.delete("/:id", serviciosEstudiante.deleteEstudiante);

export default estudiante;
