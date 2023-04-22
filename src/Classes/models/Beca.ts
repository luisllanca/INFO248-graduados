export class Beca {
  id: number;
  tipo: string;
  monto: string;
  fechaAsi: string;
  fechaExp: string;

  constructor(
    id: number,
    tipo: string,
    monto: string,
    fechaAsignacion: string,
    fechaExpiracion: string
  ) {
    this.id = id;
    this.tipo = tipo;
    this.monto = monto;
    this.fechaAsi = fechaAsignacion;
    this.fechaExp = fechaExpiracion;
  }
}
