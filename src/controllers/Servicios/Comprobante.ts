export class Comprobante {
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
    foto: string
  ) {
    this.id = id;
    this.fecha = fecha;
    this.tipo = tipo;
    this.monto = monto;
    this.img = foto;
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

}
