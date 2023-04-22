"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comprobante = void 0;
class Comprobante {
    constructor(id, fecha, tipo, monto, foto) {
        this.id = id;
        this.fecha = fecha;
        this.tipo = tipo;
        this.monto = monto;
        this.img = foto;
    }
}
exports.Comprobante = Comprobante;
