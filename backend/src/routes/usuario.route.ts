import { Router, Request, Response } from "express";
import { ServiciosUsuario} from "../controllers/ServiciosUsuario";
import {fieldsValidator} from "../middlewares/validator";
import {check} from "express-validator"

const rutasUsuario = Router();
const usuario = new ServiciosUsuario();

rutasUsuario.get("/", (req: Request, res: Response) => usuario.getUsuarios(req, res));

rutasUsuario.get("/:id", (req: Request, res: Response) => usuario.getUsuarioId(req, res));


// rutasUsuario.get("/estudiante/:id", (req: Request, res: Response) => usuario.getUsuarioEstudianteById(req, res));

// rutasUsuario.post("/login", (req: Request, res: Response) => usuario.loguearse(req, res));

rutasUsuario.post("/login",  [
  check("password", "El password es obligatorio").notEmpty().isString(),
  check("email", "el email es obligatoria").notEmpty().isString(),
  fieldsValidator,
],(req: Request, res: Response) => usuario.loguearse(req, res));

rutasUsuario.post("/registrar",  [
    check("nombre", "El nombre es obligatorio").notEmpty().isString(),
    check("apellido", "El apellido es obligatorio").notEmpty().isString(),
    check("password", "El password es obligatorio").notEmpty().isString(),
    check("email", "el email es obligatoria").notEmpty().isString(),
    fieldsValidator,
  ],(req: Request, res: Response) => usuario.createUsuario(req, res));

rutasUsuario.post("/registrar/estudiante",  [
  check("nombre", "El nombre es obligatorio").notEmpty().isString(),
  check("apellido", "El apellido es obligatorio").notEmpty().isString(),
  check("password", "El password es obligatorio").notEmpty().isString(),
  check("email", "el email es obligatoria").notEmpty().isString(),
  check("rut", "el email es obligatoria").notEmpty().isString(),
  check("programa", "el email es obligatoria").notEmpty().isString(),
  check("carrera", "el email es obligatoria").notEmpty().isString(),
  fieldsValidator,
],(req: Request, res: Response) => usuario.createUsuarioEstudiante(req, res));

// rutasUsuario.delete("/:id", (req: Request, res: Response) => usuario.deleteUsuarioId(req, res));

rutasUsuario.put("/:id",(req: Request, res: Response) => usuario.updateUsuarioById(req, res));

// rutasUsuario.put("/:id", (req: Request, res: Response) => usuario.updateUsuarioById(req, res));


export default rutasUsuario;

