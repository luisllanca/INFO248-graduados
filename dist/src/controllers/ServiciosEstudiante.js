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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiciosEstudiante = void 0;
const EstudianteModel_1 = __importDefault(require("../models/EstudianteModel"));
const Comprobante_1 = require("../clases_negocio/Comprobante");
class ServiciosEstudiante {
    subirComprobante(est, id, monto, fecha, img, tipo) {
        const comps = est.getComprobantes();
        const comp = new Comprobante_1.Comprobante(id, monto, fecha, tipo, img);
        comps.push(comp);
        est.setComprobantes(comps);
    }
    verComprobantes(est) {
        console.log("Visualizando comprobantes...");
        return est.comprobantes;
    }
    especificarMonto(idComp, monto) {
        console.log("Especificando monto " + monto + " para el comprobante " + idComp);
    }
    editarMonto(idComp, monto) {
        console.log("Editando comprobante " + idComp + " con monto " + monto);
    }
    filtrarEstudiante(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const estudiante = yield EstudianteModel_1.default.findByPk(id, {
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                });
                if (!estudiante) {
                    throw new Error("Estudiante no encontrado");
                }
                return estudiante;
            }
            catch (error) {
                return JSON.stringify(error);
            }
        });
    }
    obtenerEstudiantes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const estudiantes = yield EstudianteModel_1.default.findAll({
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                });
                return estudiantes;
            }
            catch (err) {
                return JSON.stringify(err);
            }
        });
    }
}
exports.ServiciosEstudiante = ServiciosEstudiante;
