import { Beca } from "../clases_negocio/Beca";

export class ServiciosBecas {
  becas: Beca[];

  constructor(becas: Beca[]) {
    this.becas = becas;
  }

  getBeca(id: number) {
    console.log("Retornando beca...+" + id);
  }

  crearBeca(
    id: number,
    description: string,
    tipo: string,
    monto: number,
    fechaAsi: Date,
    fechaExp: Date
  ) {
    console.log("Generando beca...");
    const beca = new Beca(id, tipo, monto, description, fechaAsi, fechaExp);
    this.becas.push(beca);
  }

  eliminarBeca(id: number) {
    this.becas.splice(id, 1);
  }

  modificarBeca(
    id: number,
    description: string,
    tipo: string,
    monto: number,
    fechaAsi: Date,
    fechaExp: Date
  ) {
    this.eliminarBeca(id);
    this.crearBeca(id, description, tipo, monto, fechaAsi, fechaExp);
  }
}
