"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaDecorator = void 0;
const DecoratorAlerta_1 = require("./DecoratorAlerta");
class SistemaDecorator extends DecoratorAlerta_1.DecoratorAlerta {
    constructor(alerta) {
        super(alerta);
    }
    send() {
        return `${this.alerta.send()} - por sistema`;
    }
}
exports.SistemaDecorator = SistemaDecorator;
