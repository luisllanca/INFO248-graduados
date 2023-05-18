//Crear rutas más adelante.
import { Router } from "express";
import { ServiciosPersonalAdministrativos} from "../controllers/personaladministrativo.controller";

const personaladministrativo = Router();
const serviciosPersonalAdministrativo = new ServiciosPersonalAdministrativos();
personaladministrativo.get("/", serviciosPersonalAdministrativo.getPersonalAdministrativos);

personaladministrativo.get("/:id", serviciosPersonalAdministrativo.getPersonalAdministrativo);

personaladministrativo.post()

personaladministrativo.put("/:id", serviciosPersonalAdministrativo.putPersonalAdministrativo);
personaladministrativo.delete("/:id", serviciosPersonalAdministrativo.deletePersonalAdministrativo);

export default personaladministrativo;
