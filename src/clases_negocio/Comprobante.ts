import { Memento } from "./Memento";

export class Comprobante {
  id: number;
  monto: number;
  fecha: Date;
  img: string;
  tipo: string;

  constructor(
    id: number,
    monto: number,
    fecha: Date,
    tipo: string,
    img: string
  ) {
    this.id = id;
    this.fecha = fecha;
    this.tipo = tipo;
    this.monto = monto;
    this.img = img;
  }

  getId() {
    return this.id;
  }
  setId(id: number) {
    this.id = id;
  }
  getFecha() {
    return this.fecha;
  }
  setFecha(fecha: Date) {
    this.fecha = fecha;
  }

  getTipo() {
    return this.tipo;
  }
  setTipo(tipo: string) {
    this.tipo = tipo;
  }

  getMonto() {
    return this.monto;
  }
  setMonto(monto: number) {
    this.monto = monto;
  }

  getImg() {
    return this.img;
  }
  setImg(img: string) {
    this.img = img;
  }

  save(): Memento {
    return new Memento(this.id, this.monto, this.fecha, this.tipo, this.img);
  }

  restore(m: Memento) {
    this.id = m.getId();
    this.monto = m.getMonto();
    this.fecha = m.getFecha();
    this.img = m.getImg();
    this.tipo = m.getTipo();
  }
}
