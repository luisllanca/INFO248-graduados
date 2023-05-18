import { Router } from "express";
import { ServiciosComprobantes} from "../controllers/comprobante.controller";

const comprobante = Router();
const serviciosComprobante = new ServiciosComprobantes();
comprobante.get("/", serviciosComprobante.getComprobantes);

comprobante.get("/:id", serviciosComprobante.getComprobante);

comprobante.post()

comprobante.put("/:id", serviciosComprobante.putComprobante);
comprobante.delete("/:id", serviciosComprobante.deleteComprobante);

export default comprobante;
