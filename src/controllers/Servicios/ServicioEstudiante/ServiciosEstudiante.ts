import type { Estudiante } from "../../Usuario/Estudiante";
import { Comprobante } from "../ServicioFinanciero/Comprobante";
export class ServiciosEstudiante {
  subirComprobante(
    est: Estudiante,
    id: number,
    monto: number,
    fecha: string,
    img: string,
    tipo: string
  ) {
    const comps = est.getComprobantes();
    const comp = new Comprobante(id, monto, fecha, tipo, img);
    comps.push(comp);
    est.setComprobantes(comps);
  }
  verComprobantes(est: Estudiante) {
    console.log("Visualizando comprobantes...");
    return est.comprobantes;
  }
  especificarMonto(idComp: number, monto: number) {
    console.log(
      "Especificando monto " + monto + " para el comprobante " + idComp
    );
  }
  editarMonto(idComp: number, monto: number) {
    console.log("Editando comprobante " + idComp + " con monto " + monto);
  }
}
