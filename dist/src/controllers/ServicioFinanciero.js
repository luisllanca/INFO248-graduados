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
exports.ServicioFinanciero = void 0;
const ComprobanteModel_1 = __importDefault(require("../models/ComprobanteModel"));
class ServicioFinanciero {
    getPagosTotales(est) {
        return console.log("retornando los pagos totales del estudiante...");
    }
    HistorialPagos(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const comprobante = yield ComprobanteModel_1.default.findAll({
                    where: { id_estudiante: id },
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "id", "tipo", "img"],
                    },
                });
                if (!comprobante) {
                    throw new Error("Comprobante no encontrado");
                }
                return comprobante;
            }
            catch (error) {
                return JSON.stringify(error);
            }
        });
    }
    getPorPagar(est) {
        return console.log("retornando los pagos faltantes del estudiante...");
    }
}
exports.ServicioFinanciero = ServicioFinanciero;
