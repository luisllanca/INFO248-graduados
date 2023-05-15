export class Beca {
  id: number;
  tipo: string;
  monto: number;
  fechaAsi: string;
  fechaExp: string;

  constructor(
    id: number,
    tipo: string,
    monto: number,
    fechaAsignacion: string,
    fechaExpiracion: string
  ) {
    this.id = id;
    this.tipo = tipo;
    this.monto = monto;
    this.fechaAsi = fechaAsignacion;
    this.fechaExp = fechaExpiracion;
  }

  getTipo(){
    return this.tipo;
  }
  setTipo(tipo: string){
    this.tipo = tipo;
  }

  getMonto(){
    return this.monto;
  }
  setMonto(monto: number){
    this.monto = monto;
  }

  getFechaAsi(){
    return this.fechaAsi;
  }
  setFechaAsi(fechaAsi: string){
    this.fechaAsi = fechaAsi;
  }

  getFechaExp(){
    return this.fechaExp;
  }
  setFechaExp(fechaExp: string){
    this.fechaExp = fechaExp;
  }
}
