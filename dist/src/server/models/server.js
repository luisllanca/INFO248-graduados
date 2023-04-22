"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Estudiante_1 = require("../../Classes/models/Estudiante");
const data_1 = require("../../seed/data");
const Gestion_1 = require("../../Classes/models/Gestion");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "9000";
        this.estudiantes = this.createEstudiante();
        this.gestion = new Gestion_1.Gestion("gestion@em.cl", "123soygestion", this.estudiantes);
        this.middlewares();
        this.routes();
    }
    createEstudiante() {
        const est = [];
        for (let i = 0; i < data_1.data.length; i++) {
            const estudiante1 = new Estudiante_1.Estudiante(data_1.data[i].id, data_1.data[i].nombre, data_1.data[i].email, data_1.data[i].password, data_1.data[i].rut, data_1.data[i].carrera, data_1.data[i].comprobante, data_1.data[i].becas);
            est.push(estudiante1);
        }
        return est;
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.get("/gestion/estudiantes/:id", (req, res) => {
            const { id } = req.params;
            res.json({
                Estudiantes: this.gestion.filtrarEstudiantes(+id),
            });
        });
        this.app.get("/gestion/estudiantes/:id/comprobantes", (req, res) => {
            const { id } = req.params;
            res.json({
                Comprobantes: this.gestion.revisarComprobantesEstudiante(+id),
            });
        });
        this.app.get("/gestion/estudiantes/:id/pagos", (req, res) => {
            const { id } = req.params;
            res.json({
                Pagos: this.gestion.revisarHistorialPagos(+id),
            });
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto " + this.port);
        });
    }
}
exports.default = Server;
