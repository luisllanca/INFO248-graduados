<<<<<<< HEAD
import { Router, Request, Response } from "express";
import { Estudiante } from "../Classes/models/Estudiante";
import { inicializarData } from "../seed/inicializarData";

const estudiantes: Array<Estudiante> = inicializarData();
const rutasUsuarios = Router();

rutasUsuarios.get(
  "/estudiantes/:id/change-password/:pass",
  (req: Request, res: Response) => {
    const { id, pass } = req.params;
    const est = estudiantes?.find((estudiante) => estudiante.id === +id);
    if (!est || est.password == pass) {
      res.status(200).json({ message: "Error en cambio de contraseña" });
    } else {
      est.cambiarDatosPersonales(pass);
      res.status(200).json({ est });
    }
  }
);

export default rutasUsuarios;
=======
import { Router, Request, Response } from "express";
import { Estudiante } from "../Classes/models/Estudiante";
import { inicializarData } from "../seed/inicializarData";

const estudiantes: Array<Estudiante> = inicializarData();
const rutasUsuarios = Router();

rutasUsuarios.get(
  "/estudiantes/:id/change-password/:pass",
  (req: Request, res: Response) => {
    const { id, pass } = req.params;
    const est = estudiantes?.find((estudiante) => estudiante.id === +id);
    if (!est || est.password == pass) {
      res.status(200).json({ message: "Error en cambio de contraseña" });
    } else {
      est.cambiarDatosPersonales(pass);
      res.status(200).json({ est });
    }
  }
);

export default rutasUsuarios;
>>>>>>> eb1cbc18236b2216eee8a724c29d62639f838e13
