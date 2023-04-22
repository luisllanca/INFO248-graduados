"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gestion = void 0;
const Estudiante_1 = require("./Estudiante");
const Usuario_1 = require("./Usuario");
class Gestion extends Usuario_1.Usuario {
    constructor(email, password, estudiante) {
        super(email, password);
        this.email = email;
        this.password = password;
        this.estudiantes = estudiante;
    }
    registrarse() {
        super.registrarse();
    }
    logearse() {
        super.logearse();
    }
    desloguearse() {
        super.desloguearse();
    }
    crearEstudiante(id, nombre, email, password, rut, carrera) {
        this.estudiantes.push(new Estudiante_1.Estudiante(id, nombre, email, password, rut, carrera, [], []));
        return console.log("Estudiante creado");
    }
    verMatriculasEstudiantes(id) {
        var _a;
        const matriculas = [];
        const estudiant = (_a = this.estudiantes) === null || _a === void 0 ? void 0 : _a.find((estudiante) => estudiante.id === id);
        if (estudiant && estudiant.becas) {
            for (let i = 0; i < estudiant.becas.length; i++) {
                if (estudiant.becas[i].tipo == "matricula") {
                    matriculas.push(estudiant.becas[i].fechaAsi);
                }
            }
            return matriculas;
        }
        return null;
    }
    revisarComprobantesEstudiante(id) {
        var _a;
        const estudiant = (_a = this.estudiantes) === null || _a === void 0 ? void 0 : _a.find((estudiante) => estudiante.id === id);
        if (estudiant && estudiant.comprobantes) {
            return estudiant.comprobantes;
        }
        return null;
    }
    asignarBecaEstudiante(id) {
        var _a;
        const estudiant = (_a = this.estudiantes) === null || _a === void 0 ? void 0 : _a.filter((estudiante) => estudiante.id === id);
        if (estudiant) {
            return console.log("Asignando beca a estudiante");
        }
        return null;
    }
    filtrarEstudiantes(id) {
        var _a, _b;
        const estudiant = (_a = this.estudiantes) === null || _a === void 0 ? void 0 : _a.filter((estudiante) => estudiante.id === id);
        if (estudiant) {
            return (_b = this.estudiantes) === null || _b === void 0 ? void 0 : _b.filter((estudiante) => estudiante.id === id);
        }
        return null;
    }
    revisarHistorialPagos(id) {
        var _a;
        const pagos = [];
        const estudiant = (_a = this.estudiantes) === null || _a === void 0 ? void 0 : _a.find((estudiante) => estudiante.id === id);
        console.log(estudiant);
        if (estudiant && estudiant.comprobantes) {
            for (let i = 0; i < estudiant.comprobantes.length; i++) {
                pagos.push(estudiant.comprobantes[i].fecha);
            }
            return pagos;
        }
        return null;
    }
    eliminarBecaEstudiante(idEst, idBeca) {
        var _a, _b;
        const estudiant = (_a = this.estudiantes) === null || _a === void 0 ? void 0 : _a.find((estudiante) => estudiante.id === idEst);
        if (estudiant && estudiant.becas) {
            const bec = (_b = estudiant.becas) === null || _b === void 0 ? void 0 : _b.filter((beca) => beca.id === idBeca);
            if (bec) {
                return console.log("Beca eliminada con exito");
            }
        }
        return null;
    }
}
exports.Gestion = Gestion;
