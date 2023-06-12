import { Beca } from "../clases_negocio/Beca";
import { Router, Request, Response } from "express";
import { ServiciosBecas } from "../controllers/ServiciosBecas";

const rutasBecas = Router();
const becas = new ServiciosBecas();

rutasBecas.get("/", (req: Request, res: Response) => becas.getBecas(req, res));

rutasBecas.get("/:id", (req: Request, res: Response) => becas.getBecaId(req, res));

export default rutasBecas;

