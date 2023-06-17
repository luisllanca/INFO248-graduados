import type { Estudiante } from "../clases_negocio/Usuario/Estudiante";
import type { Beca } from "../clases_negocio/Beca";

export interface ServiciosEdicion {
  asignarBeca(est: Estudiante, bec: Beca): void;
  eliminarBeca(est: Estudiante, bec: Beca): void;
}
