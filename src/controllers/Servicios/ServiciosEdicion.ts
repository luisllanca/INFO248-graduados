import type { Estudiante } from "../Usuario/Estudiante";
import type { Beca } from "./Beca";

export interface ServiciosEdicion {
    asignarBeca(est: Estudiante, bec: Beca): void;
    eliminarBeca(est: Estudiante, bec: Beca): void;
}