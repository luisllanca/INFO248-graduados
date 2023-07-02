"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Beca = void 0;
class Beca {
    constructor(id, tipo, monto, description, fechaAsignacion, fechaExpiracion) {
        this.id = id;
        this.tipo = tipo;
        this.monto = monto;
        this.fechaAsi = fechaAsignacion;
        this.fechaExp = fechaExpiracion;
        this.description = description;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    getMonto() {
        return this.monto;
    }
    setMonto(monto) {
        this.monto = monto;
    }
    getFechaAsi() {
        return this.fechaAsi;
    }
    setFechaAsi(fechaAsi) {
        this.fechaAsi = fechaAsi;
    }
    getFechaExp() {
        return this.fechaExp;
    }
    setFechaExp(fechaExp) {
        this.fechaExp = fechaExp;
    }
}
exports.Beca = Beca;
