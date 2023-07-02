"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { PersonalAdminisitrativo } from "../controllers/Usuario/PersonalAdministrativo";
// import { inicializarData } from "../seed/inicializarData";
const ServiciosEstudiante_1 = require("../controllers/ServiciosEstudiante");
const ServiciosComprobante_1 = require("../controllers/ServiciosComprobante");
const ServicioFinanciero_1 = require("../controllers/ServicioFinanciero");
const rutasPersonalAdminisitrativo = (0, express_1.Router)();
const estudiante = new ServiciosEstudiante_1.ServiciosEstudiante();
const comprobante = new ServiciosComprobante_1.ServiciosComprobantes();
const financiero = new ServicioFinanciero_1.ServicioFinanciero();
rutasPersonalAdminisitrativo.get("/estudiantes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const estudiantes = yield estudiante.obtenerEstudiantes();
        res.json({
            Estudiantes: estudiantes,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al obtener los estudiantes" });
    }
}));
rutasPersonalAdminisitrativo.get("/estudiantes/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const estudiantes = yield estudiante.filtrarEstudiante(+id);
        const response = JSON.parse(JSON.stringify(estudiantes));
        if (estudiantes == "{}") {
            res.status(500).json({ mensaje: "Error al filtrar el estudiante" });
        }
        else {
            res.json({
                Estudiante: response,
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al filtrar el estudiante" });
    }
}));
rutasPersonalAdminisitrativo.get("/estudiantes/comprobantes/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const comprobantes = yield comprobante.sacarComprobante(+id);
        const response = yield JSON.parse(JSON.stringify(comprobantes));
        if (comprobantes == "{}") {
            res.status(500).json({ mensaje: "Error al filtrar comprobantes" });
        }
        else {
            res.json({
                Comprobantes: response,
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al mostrar comprobantes" });
    }
}));
rutasPersonalAdminisitrativo.get("/estudiantes/pagos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const comprobantes = yield financiero.HistorialPagos(+id);
        const response = yield JSON.parse(JSON.stringify(comprobantes));
        if (comprobantes == "{}") {
            res.status(500).json({ mensaje: "Error al filtrar comprobantes" });
        }
        else {
            res.json({
                Pagos: response,
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al mostrar comprobantes" });
    }
}));
// rutasGestion.get(
//   "/estudiantes/:id/comprobantes",
//   (req: Request, res: Response) => {
//     const { id } = req.params;
//     res.json({
//       Comprobantes: gestion.revisarComprobantesEstudiante(+id),
//     });
//   }
// );
// rutasGestion.get("/estudiantes/:id/pagos", (req: Request, res: Response) => {
//   const { id } = req.params;
//   res.json({
//     Pagos: gestion.revisarHistorialPagos(+id),
//   });
// });
exports.default = rutasPersonalAdminisitrativo;
