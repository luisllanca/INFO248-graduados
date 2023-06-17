import { Memento } from "./Memento";

export class Comprobante {
  id: number;
  monto: number;
  fecha: string;
  img: string;
  tipo: string;

  constructor(
    id?: number,
    monto?: number,
    fecha?: string,
    tipo?: string,
    img?: string
  ) {
    this.id = id ?? 0;
    this.fecha = fecha ?? "";
    this.tipo = tipo ?? "";
    this.monto = monto ?? 0;
    this.img = img ?? "";
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
  setFecha(fecha: string) {
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

  save() : Memento {
    return new Memento(this.id,this.monto, this.fecha, this.tipo, this.img)
  }

  restore(m : Memento) {
    this.id = m.getId();
    this.monto = m.getMonto();
    this.fecha = m.getFecha();
    this.img = m.getImg();
    this.tipo = m.getTipo();
  }

}
