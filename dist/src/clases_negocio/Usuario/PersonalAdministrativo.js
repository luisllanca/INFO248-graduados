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
exports.PersonalAdministrativo = void 0;
const Usuario_1 = require("./Usuario");
const EstudianteModel_1 = __importDefault(require("../../models/EstudianteModel"));
class PersonalAdministrativo extends Usuario_1.Usuario {
    constructor(id, nombre, apellido, email, password, cargo, estudiantes) {
        super(id, nombre, apellido, email, password);
        this.cargo = cargo;
        this.estudiantes = estudiantes;
    }
    // visualizarPerfilPersonal(): void {
    //   console.log(this.cargo);
    // }
    // cambiarDatosPersonales(id: number, password: string) {
    //   console.log("Cambiando datos de admin...");
    //   super.setPassword(password);
    // }
    getCargo() {
        return this.cargo;
    }
    setCargo(cargo) {
        this.cargo = cargo;
    }
    getEstudiantes() {
        return this.estudiantes;
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
    setEstudiantes(estudiantes) {
        this.estudiantes = estudiantes;
    }
}
exports.PersonalAdministrativo = PersonalAdministrativo;
