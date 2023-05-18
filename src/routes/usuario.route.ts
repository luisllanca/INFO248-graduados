import { Router } from "express";
import { ServiciosUsuarios} from "../controllers/usuario.controller";

const usuario = Router();
const serviciosUsuario = new ServiciosUsuarios();
usuario.get("/", serviciosUsuario.getUsuarios);

usuario.get("/:id", serviciosUsuario.getUsuario);

usuario.post()

usuario.put("/:id", serviciosUsuario.putUsuario);
usuario.delete("/:id", serviciosUsuario.deleteUsuario);

export default usuario;
