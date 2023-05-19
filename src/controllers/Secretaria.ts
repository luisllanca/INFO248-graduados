import { PersonalAdministrativo } from "./PersonalAdministrativo";
import { ServiciosEdicion } from "./serviciosEdicion.controllers";


export class Secretaria extends PersonalAdministrativo implements ServiciosEdicion, ServiciosVisualizacion{
    constructor(id: number, nombre: string,email: string, password: string, cargo: string) {
        super(id, nombre, email, password,cargo);
    };
}