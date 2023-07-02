import { Router, Request, Response } from "express";
import { ServiciosBecas } from "../controllers/ServiciosBecas";
import {fieldsValidator} from "../middlewares/validator";
import {check} from "express-validator"

const rutasBecas = Router();
const becas = new ServiciosBecas();

rutasBecas.get("/", (req: Request, res: Response) => becas.getBecas(req, res));

rutasBecas.get("/:id", (req: Request, res: Response) => becas.getBecaId(req, res));

// rutasBecas.post("/", (req: Request, res: Response) => becas.createBeca(req, res));

rutasBecas.post("/",  [
    check("tipo", "El nombre es obligatorio").notEmpty().isString(),
    check("monto", "El apellido es obligatorio").notEmpty().isString(),
    check("descripcion", "El password es obligatorio").notEmpty().isString(),
    fieldsValidator,
  ],(req: Request, res: Response) => becas.createBeca(req, res));

rutasBecas.delete("/:id", (req: Request, res: Response) => becas.deleteBecaId(req, res));

rutasBecas.put("/:id", (req: Request, res: Response) => becas.updateBecaById(req, res));


export default rutasBecas;

