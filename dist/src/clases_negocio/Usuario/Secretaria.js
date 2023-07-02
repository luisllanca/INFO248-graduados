"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secretaria = void 0;
const PersonalAdministrativo_1 = require("./PersonalAdministrativo");
class Secretaria extends PersonalAdministrativo_1.PersonalAdministrativo {
    constructor(id, nombre, apellido, email, password, cargo, estudiantes) {
        super(id, nombre, apellido, email, password, cargo, estudiantes);
    }
    asignarBeca(est, beca) {
        var bec = est.getBecas();
        bec.push(beca);
        est.setBecas(bec);
    }
    eliminarBeca(est, beca) {
        console.log("Eliminando beca..." + beca.id);
        est.becas.splice(beca.id, 1);
    }
    verMatriculasEstudiante(estudiante) {
        console.log("Visualizando matrículas de estudiantes...");
    }
    revisarComprobantesEstudiante(estudiante) {
        console.log("Visualizando comprobantes de estudiante...");
    }
    revisarHistorialPagos(estudiante) {
        console.log("Visualizar historial de pagos...");
    }
    verBecasAsignadas(estudiante) {
        console.log("Visualizar becas asignadas a estudiante...");
    }
    filtrarPorNombre(nombre) {
        console.log("Filtrando estudiantes por nombre...");
        return [];
    }
    filtrarPorPrograma(programa) {
        console.log("Filtrando estudiantes por programa...");
        return [];
    }
    filtrarPorRut(rut) {
        console.log("Filtrando estudiantes por rut...");
        return [];
    }
    filtrarPorApellido(apellido) {
        console.log("Filtrando estudiantes por apellido...");
        return [];
    }
}
exports.Secretaria = Secretaria;
