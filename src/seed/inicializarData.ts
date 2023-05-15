import { Estudiante } from "../Classes/models/Estudiante";
import { Comprobante } from "../Classes/models/Comprobante";
import { Beca } from "../Classes/models/Beca";
import { data } from "./data";

export function inicializarData() {
  return data.map((estudianteData) => {
    const comprobantes = estudianteData.comprobante.map((comprobanteData) => {
      return new Comprobante(
        comprobanteData.id,
        comprobanteData.fecha,
        comprobanteData.tipo,
        comprobanteData.monto,
        comprobanteData.img
      );
    });
    const becas = estudianteData.becas.map((becaData) => {
      return new Beca(
        becaData.id,
        becaData.tipo,
        becaData.monto,
        becaData.fechaAsi,
        becaData.fechaExp
      );
    });
    return new Estudiante(
      estudianteData.id,
      estudianteData.nombre,
      estudianteData.email,
      estudianteData.password,
      estudianteData.rut,
      estudianteData.carrera,
      comprobantes,
      becas
    );
  });
}
