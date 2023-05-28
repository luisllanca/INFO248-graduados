export class Memento {
  id: number;
  monto: number;
  fecha: string;
  img: string;
  tipo: string;

  constructor(
    id: number,
    monto: number,
    fecha: string,
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
  getFecha() {
    return this.fecha;
  }
  getTipo() {
    return this.tipo;
  }
  getMonto() {
    return this.monto;
  }
  getImg() {
    return this.img;
  }
}