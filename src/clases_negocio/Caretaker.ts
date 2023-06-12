import { Memento } from "./Memento";

export class Caretaker {
    history: Memento[];

    constructor(history? : Memento[]){
        this.history = history ?? [];
    }

    addMemento(m : Memento) {
        this.history.push(m);
    }

    getMemento(index: number) : Memento {
        return this.history[index];
    }
}