"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const UsuarioModel_1 = __importDefault(require("./UsuarioModel"));
const connection_1 = __importDefault(require("./connection"));
class PersonalAdministrativoModel extends sequelize_1.Model {
}
PersonalAdministrativoModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cargo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "personal_administrativo",
    sequelize: connection_1.default,
});
PersonalAdministrativoModel.belongsTo(UsuarioModel_1.default, {
    foreignKey: "id_usuario",
});
exports.default = PersonalAdministrativoModel;
