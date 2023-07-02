"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectorPrograma = void 0;
const PersonalAdministrativo_1 = require("./PersonalAdministrativo");
const EstudianteModel_1 = __importDefault(require("../../models/EstudianteModel"));
class DirectorPrograma extends PersonalAdministrativo_1.PersonalAdministrativo {
    constructor(id, nombre, apellido, email, password, cargo, estudiantes) {
        super(id, nombre, email, apellido, password, cargo, estudiantes);
    }
    verMatriculasEstudiante(estudiante) {
        console.log("Visualizando matrículas de estudiantes...");
    }
    obtenerEstudiantes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const estudiantes = yield EstudianteModel_1.default.findAll({
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                });
                return estudiantes;
            }
            catch (err) {
                return JSON.stringify(err);
            }
        });
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
    filtrarEstudiante(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const estudiante = yield EstudianteModel_1.default.findByPk(id, {
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                });
                if (!estudiante) {
                    throw new Error("Estudiante no encontrado");
                }
                return estudiante;
            }
            catch (error) {
                return JSON.stringify(error);
            }
        });
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
exports.DirectorPrograma = DirectorPrograma;
