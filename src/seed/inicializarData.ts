import { Estudiante } from "../Classes/models/Estudiante";
import { data } from "./data";

export function inicializarData() {
  const est: Array<Estudiante> = [];
  for (let i = 0; i < data.length; i++) {
    const estudiante1 = new Estudiante(
      data[i].id,
      data[i].nombre,
      data[i].email,
      data[i].password,
      data[i].rut,
      data[i].carrera,
      data[i].comprobante,
      data[i].becas
    );
    est.push(estudiante1);
  }
  return est;
}
