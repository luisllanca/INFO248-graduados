"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const UsuarioModel_1 = __importDefault(require("./UsuarioModel"));
const connection_1 = __importDefault(require("./connection"));
class EstudianteModel extends sequelize_1.Model {
}
EstudianteModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    rut: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    programa: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    carrera: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { sequelize: connection_1.default, tableName: "estudiantes" });
EstudianteModel.belongsTo(UsuarioModel_1.default, {
    foreignKey: "id_usuario",
    as: "usuario",
});
exports.default = EstudianteModel;
