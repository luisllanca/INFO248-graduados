"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorAlerta = void 0;
class DecoratorAlerta {
    constructor(alerta) {
        this.alerta = alerta;
    }
    send() {
        return this.alerta.send();
    }
}
exports.DecoratorAlerta = DecoratorAlerta;
