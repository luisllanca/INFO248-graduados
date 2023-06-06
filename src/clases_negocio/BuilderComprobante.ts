import { Comprobante } from "./Comprobante";

export class BuilderComprobante {
    comprobante: Comprobante;

    constructor(comprobante? : Comprobante) {
        this.comprobante = comprobante ?? new Comprobante();
    }

    reset() {
        this.comprobante = new Comprobante();
    }

    Build():Comprobante {
        return this.comprobante
    }

    setId(id: number) {
        this.comprobante.id = id;
    }

    setMonto(monto: number) {
        this.comprobante.monto = monto;
    }

    setFecha(fecha: string) {
        this.comprobante.fecha = fecha;
    }

    setImg(img: string) {
        this.comprobante.img = img;
    }

    setTipo(tipo : string) {
        this.comprobante.tipo = tipo;
    }
}