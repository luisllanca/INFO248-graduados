export class Comprobante {
  id: number;
  fecha: string;
  monto: string;
  img: string;
  constructor(id: number, fecha: string, monto: string, foto: string) {
    this.id = id;
    this.fecha = fecha;
    this.monto = monto;
    this.img = foto;
  }
}
