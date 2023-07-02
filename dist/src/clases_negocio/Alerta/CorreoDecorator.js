"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorreoDecorator = void 0;
const DecoratorAlerta_1 = require("./DecoratorAlerta");
class CorreoDecorator extends DecoratorAlerta_1.DecoratorAlerta {
    constructor(alerta) {
        super(alerta);
    }
    send() {
        return `${this.alerta.send()} - por correo`;
    }
}
exports.CorreoDecorator = CorreoDecorator;
