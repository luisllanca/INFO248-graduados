"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("./connection"));
const Comprobante = connection_1.default.define('Comprobante', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    monto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fecha: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { paranoid: true });
exports.default = Comprobante;
