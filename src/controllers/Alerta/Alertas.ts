export class Alertas {
    descripcion : string

    constructor(descripcion : string) {
        this.descripcion = descripcion;
    }

    getDescripcion() {
        return this.descripcion;
    }
    setDescripcion(descripcion : string) {
        this.descripcion = descripcion;
    }
}