import { PersonalAdministrativo } from "./PersonalAdministrativo";
import { ServiciosVisualizacion } from "./ServiciosVisualizacion";
import { Estudiante } from "./Estudiante";

export class DirectorPrograma extends PersonalAdministrativo implements ServiciosVisualizacion {
    constructor(id: number, nombre: string,email: string, password: string, cargo: string) {
        super(id, nombre, email, password,cargo);
    }
    // verBecasAsignadas(estudiante: Estudiante) {
    //     console.log("Visualizando becas del estudiante...");
    // }
    // verMatriculasEstudiantes(estudiante: Estudiante) {
    //     console.log("Visualizando matrículas del estudiante...");
    // }
    // revisarComprobantesEstudiante(estudiante: Estudiante) {
    //     if (estudiante && estudiante.comprobantes) {
    //         return estudiante.comprobantes;
    //     }
    //     return null;
    // }
    // filtrarEstudiante(id: number) {
    //     const estudiant = this.estudiantes?.filter(
    //         (estudiante) => estudiante.id === id
    //     );
    //     if (estudiant) {
    //         return this.estudiantes?.filter((estudiante) => estudiante.id === id);
    //     }
    //     return null;
    // }
    // revisarHistorialPagos(id: number) {
    //     const pagos: Array<Array<String>> = [];
    //     const estudiant = this.estudiantes?.find(
    //         (estudiante) => estudiante.id === id
    //     );
    //     if (estudiant && estudiant.comprobantes) {
    //         for (let i = 0; i < estudiant.comprobantes.length; i++) {
    //             let fechasP: Array<String> = [];
    //             fechasP.push(estudiant.comprobantes[i].tipo);
    //             fechasP.push(estudiant.comprobantes[i].fecha);
    //             pagos.push(fechasP);
    //         }
    //         return pagos;
    //     }
    //     return null;
    // }
    // eliminarBecaEstudiante(idEst: number, idBeca: number) {
    // const estudiant = this.estudiantes?.find(
    //     (estudiante) => estudiante.id === idEst
    // );
    // if (estudiant && estudiant.becas) {
    //     const bec = estudiant.becas?.filter((beca) => beca.id === idBeca);
    //     if (bec) {
    //     return console.log("Beca eliminada con exito");
    //     }
    // }
    // return null;
    // }
}