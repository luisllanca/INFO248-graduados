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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ServicioCuenta_1 = require("../controllers/ServicioCuenta");
const servicio = new ServicioCuenta_1.ServicioCuenta();
const rutasUsuarios = (0, express_1.Router)();
rutasUsuarios.get("/estudiantes/:id/change-password/:pass", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, pass } = req.params;
        const estudiantes = yield servicio.cambiarContraseña(parseInt(id), pass);
        res.json({
            Estudiantes: estudiantes,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error en cambio de contraseña" });
    }
}));
rutasUsuarios.post("/registrar", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, apellido, password, email } = req.body;
        const usuario = yield servicio.registrarUsuario(nombre, apellido, password, email);
        if (usuario) {
            return res.status(201).json({
                mensaje: "Usuario registrado correctamente",
                usuario,
            });
        }
        else {
            return res.status(400).json({
                mensaje: "El usuario ya está registrado",
            });
        }
    }
    catch (error) {
        console.error("Error al registrar usuario:", error);
        res.status(500).json({ mensaje: "Error al registrar usuario" });
    }
}));
exports.default = rutasUsuarios;
