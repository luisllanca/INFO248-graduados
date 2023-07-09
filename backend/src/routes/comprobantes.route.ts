import { Router, Request, Response } from "express";
import { ServiciosComprobantes} from "../controllers/ServiciosComprobante";
import {fieldsValidator} from "../middlewares/validator";
import {check} from "express-validator"

const rutasComprobante = Router();
const comprobantes = new ServiciosComprobantes();

rutasComprobante.get("/", (req: Request, res: Response) => comprobantes.getComprobantes(req, res));

rutasComprobante.get("/:id", (req: Request, res: Response) => comprobantes.getComprobanteId(req, res));

rutasComprobante.get("/estudiante/:id", (req: Request, res: Response) => comprobantes.getComprobanteEstudianteById(req, res));

// rutasComprobante.post("/", (req: Request, res: Response) => comprobantes.createComprobante(req, res));

rutasComprobante.post("/",  [
    // check("fecha", "La fecha es obligatorio").notEmpty().isString(),
    check("tipo", "El tipo es obligatorio").notEmpty().isString(),
    check("monto", "El monto es obligatorio").notEmpty().isNumeric(),
    check("img", "La imagen es obligatoria").notEmpty().isString(),
    check("id_estudiante", "El id del estudiante es obligatorio").notEmpty().isNumeric(),
    check("extension", "Debe haberse entregado una extension").notEmpty().isString(),
    fieldsValidator,
  ],(req: Request, res: Response) => comprobantes.createComprobante(req, res));
  

rutasComprobante.delete("/:id", (req: Request, res: Response) => comprobantes.deleteComprobanteId(req, res));

rutasComprobante.put("/:id", (req: Request, res: Response) => comprobantes.updateComprobanteById(req, res));


export default rutasComprobante;

