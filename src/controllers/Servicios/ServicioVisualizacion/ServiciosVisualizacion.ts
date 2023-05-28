import { Estudiante } from "../../Usuario/Usuario/Estudiante"

export interface ServiciosVisualizacion {
    verMatriculasEstudiante(estudiante: Estudiante): void
    revisarComprobantesEstudiante(estudiante: Estudiante): void
    revisarHistorialPagos(estudiante: Estudiante): void
    verBecasAsignadas(estudiante: Estudiante): void
}