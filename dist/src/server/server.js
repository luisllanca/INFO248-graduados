"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const personaladministrativo_route_1 = __importDefault(require("../routes/personaladministrativo.route"));
const usuario_route_1 = __importDefault(require("../routes/usuario.route"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "9000";
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use("/gestion", personaladministrativo_route_1.default);
        this.app.use("/user", usuario_route_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto " + this.port);
        });
    }
}
exports.default = Server;
