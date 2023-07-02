"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memento = void 0;
class Memento {
    constructor(id, monto, fecha, tipo, img) {
        this.id = id;
        this.fecha = fecha;
        this.tipo = tipo;
        this.monto = monto;
        this.img = img;
    }
    getId() {
        return this.id;
    }
    getFecha() {
        return this.fecha;
    }
    getTipo() {
        return this.tipo;
    }
    getMonto() {
        return this.monto;
    }
    getImg() {
        return this.img;
    }
}
exports.Memento = Memento;
