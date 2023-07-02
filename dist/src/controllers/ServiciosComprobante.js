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
exports.ServiciosComprobantes = void 0;
const ComprobanteModel_1 = __importDefault(require("../models/ComprobanteModel"));
const BuilderComprobante_1 = require("../clases_negocio/BuilderComprobante");
class ServiciosComprobantes {
    //comprobantes: Comprobante[];
    //constructor(comprobantes: Comprobante[]){
    //    this.comprobantes = comprobantes;
    //}
    getComprobante(id) {
        return console.log("Retornando comprobante " + id); //listo
    }
    sacarComprobante(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const comprobante = yield ComprobanteModel_1.default.findAll({
                    where: { id_estudiante: id },
                    attributes: { exclude: ["createdAt", "updatedAt"] },
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
    makeComprobante(builder, id, monto, fecha, img, tipo) {
        builder.reset();
        builder.setId(id);
        builder.setMonto(monto);
        builder.setFecha(fecha);
        builder.setImg(img);
        builder.setTipo(tipo);
        const comp = builder.Build();
        //this.comprobantes.push(comp);
    }
    eliminarComprobante(id) {
        console.log("Eliminando comprobante...");
        //this.comprobantes.splice(id, 1);
    }
    modificarComprobante(id, monto, fecha, img, tipo) {
        this.eliminarComprobante(id);
        const builder = new BuilderComprobante_1.BuilderComprobante();
        this.makeComprobante(builder, id, monto, fecha, img, tipo);
    }
}
exports.ServiciosComprobantes = ServiciosComprobantes;
exports.default = ServiciosComprobantes;
