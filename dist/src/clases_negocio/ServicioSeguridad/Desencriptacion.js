"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desencriptacion = void 0;
const crypto = __importStar(require("crypto"));
class Desencriptacion {
    constructor(metodo) {
        this.metodo = metodo;
    }
    desencriptar(textoEncriptado) {
        console.log("Desencriptando con metodo " + this.getMetodo() + "...");
        const clave = 'c14v3-5e6Ur4';
        const [ivString, encryptedString] = textoEncriptado.split(':');
        const decipher = crypto.createDecipheriv(this.metodo, clave, Buffer.from(ivString, 'hex'));
        let decrypted = decipher.update(encryptedString, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    setMetodo(metodo) {
        this.metodo = metodo;
    }
    getMetodo() {
        return this.metodo;
    }
}
exports.Desencriptacion = Desencriptacion;
