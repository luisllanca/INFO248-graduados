"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caretaker = void 0;
class Caretaker {
    constructor(history) {
        this.history = history !== null && history !== void 0 ? history : [];
    }
    addMemento(m) {
        this.history.push(m);
    }
    getMemento(index) {
        return this.history[index];
    }
}
exports.Caretaker = Caretaker;
