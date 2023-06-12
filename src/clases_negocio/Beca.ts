export class Beca {
  id: number;
  description: string;
  tipo: string;
  monto: number;
  fechaAsi: Date;
  fechaExp: Date;

  constructor(
    id: number,
    tipo: string,
    monto: number,
    description: string,
    fechaAsignacion: Date,
    fechaExpiracion: Date
  ) {
    this.id = id;
    this.tipo = tipo;
    this.monto = monto;
    this.fechaAsi = fechaAsignacion;
    this.fechaExp = fechaExpiracion;
    this.description = description;
  }

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }
  getTipo() {
    return this.tipo;
  }
  setTipo(tipo: string) {
    this.tipo = tipo;
  }
  getDescription() {
    return this.description;
  }
  setDescription(description: string) {
    this.description = description;
  }

  getMonto() {
    return this.monto;
  }
  setMonto(monto: number) {
    this.monto = monto;
  }

  getFechaAsi() {
    return this.fechaAsi;
  }
  setFechaAsi(fechaAsi: Date) {
    this.fechaAsi = fechaAsi;
  }

  getFechaExp() {
    return this.fechaExp;
  }
  setFechaExp(fechaExp: Date) {
    this.fechaExp = fechaExp;
  }
}
