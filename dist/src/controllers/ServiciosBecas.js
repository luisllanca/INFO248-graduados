"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiciosBecas = void 0;
const Beca_1 = require("../clases_negocio/Beca");
class ServiciosBecas {
    constructor(becas) {
        this.becas = becas;
    }
    getBeca(id) {
        console.log("Retornando beca...+" + id);
    }
    crearBeca(id, description, tipo, monto, fechaAsi, fechaExp) {
        console.log("Generando beca...");
        const beca = new Beca_1.Beca(id, tipo, monto, description, fechaAsi, fechaExp);
        this.becas.push(beca);
    }
    eliminarBeca(id) {
        this.becas.splice(id, 1);
    }
    modificarBeca(id, description, tipo, monto, fechaAsi, fechaExp) {
        this.eliminarBeca(id);
        this.crearBeca(id, description, tipo, monto, fechaAsi, fechaExp);
    }
}
exports.ServiciosBecas = ServiciosBecas;
