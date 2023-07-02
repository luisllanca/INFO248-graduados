"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbGest = new sequelize_1.Sequelize(process.env.NAMEDB || "egresados", process.env.USERDB || "root", "test", {
    host: 'localhost',
    dialect: "mysql",
    port: Number(process.env.PORTDB) || 3306,
});
exports.default = dbGest;
