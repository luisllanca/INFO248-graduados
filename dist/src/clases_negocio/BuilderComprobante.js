"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderComprobante = void 0;
const Comprobante_1 = require("./Comprobante");
class BuilderComprobante {
    constructor(comprobante) {
        this.comprobante = comprobante !== null && comprobante !== void 0 ? comprobante : new Comprobante_1.Comprobante();
    }
    reset() {
        this.comprobante = new Comprobante_1.Comprobante();
    }
    Build() {
        return this.comprobante;
    }
    setId(id) {
        this.comprobante.id = id;
    }
    setMonto(monto) {
        this.comprobante.monto = monto;
    }
    setFecha(fecha) {
        this.comprobante.fecha = fecha;
    }
    setImg(img) {
        this.comprobante.img = img;
    }
    setTipo(tipo) {
        this.comprobante.tipo = tipo;
    }
}
exports.BuilderComprobante = BuilderComprobante;
