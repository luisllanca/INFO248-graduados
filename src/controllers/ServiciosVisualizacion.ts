import { Estudiante } from "./Estudiante";
export interface ServiciosVisualizacion {
    verMatriculasEstudiantes(estudiante: Estudiante): void
    revisarComprobantesEstudiante(id: number): void
    filtrarEstudiante(): Estudiante
    revisarHistorialPagos(estudiante: Estudiante): void
    verBecasAsignadas(estudiante: Estudiante): void
}