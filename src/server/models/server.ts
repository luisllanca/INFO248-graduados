import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Estudiante } from "../../Classes/models/Estudiante";
import { data } from "../../seed/data";
import { Gestion } from "../../Classes/models/Gestion";

class Server {
  private app: Application;
  private port: string;
  private gestion: Gestion;
  private estudiantes: Array<Estudiante>;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "9000";
    this.estudiantes = this.createEstudiante();
    this.gestion = new Gestion(
      "gestion@em.cl",
      "123soygestion",
      this.estudiantes
    );
    this.middlewares();
    this.routes();
  }

  createEstudiante(): Array<Estudiante> {
    const est: Array<Estudiante> = [];
    for (let i = 0; i < data.length; i++) {
      const estudiante1 = new Estudiante(
        data[i].id,
        data[i].nombre,
        data[i].email,
        data[i].password,
        data[i].rut,
        data[i].carrera,
        data[i].comprobante,
        data[i].becas
      );
      est.push(estudiante1);
    }
    return est;
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.get("/gestion/estudiantes/:id", (req: Request, res: Response) => {
      const { id } = req.params;
      res.json({
        Estudiantes: this.gestion.filtrarEstudiantes(+id),
      });
    });
    this.app.get(
      "/gestion/estudiantes/:id/comprobantes",
      (req: Request, res: Response) => {
        const { id } = req.params;
        res.json({
          Comprobantes: this.gestion.revisarComprobantesEstudiantes(+id),
        });
      }
    );
    this.app.get(
      "/gestion/estudiantes/:id/pagos",
      (req: Request, res: Response) => {
        const { id } = req.params;
        res.json({
          Pagos: this.gestion.revisarHistorialPagos(+id),
        });
      }
    );
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }
}

export default Server;
