import type { Estudiante } from "../../Usuario/Usuario/Estudiante";
import type { Beca } from "../../Servicios/ServicioFinanciero/Beca";

export interface ServiciosEdicion {
    asignarBeca(est: Estudiante, bec: Beca): void;
    eliminarBeca(est: Estudiante, bec: Beca): void;
}