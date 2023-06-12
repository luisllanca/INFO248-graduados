import express, { Application } from "express";
import cors from "cors";
import rutasGestion from "../routes/personaladministrativo.route";
import rutasUsuario from "../routes/usuario.route";
import rutasBeca from "../routes/beca.route";
class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "9000";
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/gestion", rutasGestion);
    this.app.use("/user", rutasUsuario);
    this.app.use("/becas", rutasBeca);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }
}

export default Server;
