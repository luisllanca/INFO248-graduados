import { Router, Request, Response } from "express";
import { ServiciosComprobantes} from "../controllers/ServiciosComprobante";

const rutasComprobante = Router();
const comprobantes = new ServiciosComprobantes();

rutasComprobante.get("/", (req: Request, res: Response) => comprobantes.getComprobantes(req, res));

rutasComprobante.get("/:id", (req: Request, res: Response) => comprobantes.getComprobanteId(req, res));

rutasComprobante.post("/", (req: Request, res: Response) => comprobantes.createComprobante(req, res));

rutasComprobante.delete("/:id", (req: Request, res: Response) => comprobantes.deleteComprobanteId(req, res));

rutasComprobante.put("/:id", (req: Request, res: Response) => comprobantes.updateComprobanteById(req, res));

export default rutasComprobante;

