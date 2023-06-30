import { Router, Request, Response } from "express";
import { ServiciosBecas } from "../controllers/ServiciosBecas";

const rutasBecas = Router();
const becas = new ServiciosBecas();

rutasBecas.get("/", (req: Request, res: Response) => becas.getBecas(req, res));

rutasBecas.get("/:id", (req: Request, res: Response) => becas.getBecaId(req, res));

rutasBecas.post("/", (req: Request, res: Response) => becas.createBeca(req, res));

rutasBecas.delete("/:id", (req: Request, res: Response) => becas.deleteBecaId(req, res));

rutasBecas.put("/:id", (req: Request, res: Response) => becas.updateBecaById(req, res));


export default rutasBecas;

