"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comprobante = void 0;
const Memento_1 = require("./Memento");
class Comprobante {
    constructor(id, monto, fecha, tipo, img) {
        this.id = id !== null && id !== void 0 ? id : 0;
        this.fecha = fecha !== null && fecha !== void 0 ? fecha : "";
        this.tipo = tipo !== null && tipo !== void 0 ? tipo : "";
        this.monto = monto !== null && monto !== void 0 ? monto : 0;
        this.img = img !== null && img !== void 0 ? img : "";
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getFecha() {
        return this.fecha;
    }
    setFecha(fecha) {
        this.fecha = fecha;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getMonto() {
        return this.monto;
    }
    setMonto(monto) {
        this.monto = monto;
    }
    getImg() {
        return this.img;
    }
    setImg(img) {
        this.img = img;
    }
    save() {
        return new Memento_1.Memento(this.id, this.monto, this.fecha, this.tipo, this.img);
    }
    restore(m) {
        this.id = m.getId();
        this.monto = m.getMonto();
        this.fecha = m.getFecha();
        this.img = m.getImg();
        this.tipo = m.getTipo();
    }
}
exports.Comprobante = Comprobante;
