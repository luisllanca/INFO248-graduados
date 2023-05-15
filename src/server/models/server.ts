import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import rutasGestion from "../../routes/GestionRoutes";
import rutasUsuario from "../../routes/UsuarioRoutes";
class Server {
  private app: Application;
  private port: string;

  constructor() {
    dotenv.config();
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
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }
}

export default Server;
