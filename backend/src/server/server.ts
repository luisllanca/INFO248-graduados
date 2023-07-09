import express, { Application } from "express";
import cors from "cors";
import rutasAdmin from "../routes/personaladministrativo.route";
import rutasUsuario from "../routes/usuario.route";
import rutasEstudiante from "../routes/estudiante.route";
// import rutasBecas from "../routes/beca.route";
import rutasComprobantes from "../routes/comprobantes.route";
const bodyParser = require('body-parser');
class Server {
  public app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    //this.app.use(express.json());
    this.app.use(bodyParser.json({limit: '10mb', extended: true}))
    this.app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
  }

  routes() {
    this.app.use("/admin", rutasAdmin);
    this.app.use("/user", rutasUsuario);
    this.app.use("/estudiantes", rutasEstudiante);
    // this.app.use("/becas", rutasBecas);
    this.app.use("/comprobantes", rutasComprobantes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }
}

export default Server;

const s = new Server();
const app = s.app;
export {app};
