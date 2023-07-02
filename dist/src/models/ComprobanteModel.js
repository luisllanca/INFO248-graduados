"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("./connection"));
class ComprobanteModel extends sequelize_1.Model {
}
exports.default = ComprobanteModel;
ComprobanteModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    monto: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    id_estudiante: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: connection_1.default,
    tableName: "comprobantes",
});
