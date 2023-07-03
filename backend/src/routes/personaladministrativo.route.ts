import { Router, Request, Response } from "express";
import { ServiciosPersonalAdministrativo} from "../controllers/ServicioPersonalAdministrativo";

const rutasPersonalAdministrativo = Router();
const personalAdministrativo = new ServiciosPersonalAdministrativo();

rutasPersonalAdministrativo.get("/", (req: Request, res: Response) => personalAdministrativo.getPersonalAdministrativo(req, res));

rutasPersonalAdministrativo.get("/:id", (req: Request, res: Response) => personalAdministrativo.getPersonalAdministrativoId(req, res));

rutasPersonalAdministrativo.get("/user/:id", (req: Request, res: Response) => personalAdministrativo.getAdminByUser(req, res));

// rutasPersonalAdministrativo.get("/estudiante/:id", (req: Request, res: Response) => personalAdministrativo.getPersonalAdministrativoEstudianteById(req, res));

// rutasPersonalAdministrativo.post("/", (req: Request, res: Response) => personalAdministrativo.createPersonalAdministrativo(req, res));

// rutasPersonalAdministrativo.delete("/:id", (req: Request, res: Response) => personalAdministrativo.deletePersonalAdministrativoId(req, res));

// rutasPersonalAdministrativo.put("/:id", (req: Request, res: Response) => personalAdministrativo.updatePersonalAdministrativoById(req, res));


export default rutasPersonalAdministrativo;
