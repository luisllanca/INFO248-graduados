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
exports.ServicioCuenta = void 0;
const EstudianteModel_1 = __importDefault(require("../models/EstudianteModel"));
const UsuarioModel_1 = __importDefault(require("../models/UsuarioModel"));
class ServicioCuenta {
    loguearse(id) {
        console.log("Login...");
    }
    desloguearse(id) {
        console.log("Cerrando sesión...");
    }
    cambiarContraseña(id, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Buscar el estudiante en la base de datos por su ID
                const estudiante = yield EstudianteModel_1.default.findByPk(id, {
                    include: [
                        {
                            model: UsuarioModel_1.default,
                            as: "usuario",
                            attributes: {
                                exclude: ["createdAt", "updatedAt"],
                            },
                        },
                    ],
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                });
                if (estudiante) {
                    // Obtener el usuario asociado al estudiante
                    const usuario = estudiante.usuario;
                    if (usuario) {
                        // Cambiar la contraseña del usuario
                        usuario.password = password;
                        // Guardar los cambios en la base de datos
                        yield usuario.save();
                        console.log("Contraseña actualizada correctamente: ", password);
                        return usuario;
                    }
                    else {
                        console.log("Usuario no encontrado");
                    }
                }
                else {
                    console.log("Estudiante no encontrado");
                }
            }
            catch (error) {
                console.error("Error al cambiar la contraseña:", error);
            }
        });
    }
    registrarUsuario(nombre, apellido, password, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Verificar si el usuario ya existe en la base de datos
                const usuarioExistente = yield UsuarioModel_1.default.findOne({
                    where: { email: email },
                });
                if (usuarioExistente) {
                    console.log("El usuario ya está registrado");
                    return null;
                }
                const usuario = yield UsuarioModel_1.default.create({
                    nombre,
                    apellido,
                    password,
                    email,
                });
                console.log("Usuario registrado:", usuario.toJSON());
                return usuario;
            }
            catch (error) {
                console.error("Error al registrar usuario:", error);
            }
        });
    }
}
exports.ServicioCuenta = ServicioCuenta;
