export class Comprobante {
  id: number;
  fecha: string;
  tipo: string;
  monto: string;
  img: string;
  constructor(id: number, fecha: string, tipo: string, monto: string, foto: string) {
    this.id = id;
    this.fecha = fecha;
    this.tipo = tipo;
    this.monto = monto;
    this.img = foto;
  }
}
