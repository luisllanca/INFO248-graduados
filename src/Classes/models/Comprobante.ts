export class Comprobante {
  id: number;
  fecha: string;
  tipo: string;
  monto: number;
  img: string;
  constructor(
    id: number,
    fecha: string,
    tipo: string,
    monto: number,
    foto: string
  ) {
    this.id = id;
    this.fecha = fecha;
    this.tipo = tipo;
    this.monto = monto;
    this.img = foto;
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
}
