export class Beca {
  tipo: string;
  monto: string;
  fechaAsi: string;
  fechaExp: string;

  constructor(
    tipo: string,
    monto: string,
    fechaAsignacion: string,
    fechaExpiracion: string
  ) {
    this.tipo = tipo;
    this.monto = monto;
    this.fechaAsi = fechaAsignacion;
    this.fechaExp = fechaExpiracion;
  }
}
