import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbGest = new Sequelize(
  process.env.NAMEDB || "egresados",
  process.env.USERDB || "isi",
  process.env.PASSWORD || "teodiomysql",
  {
    host: process.env.HOSTDB || "localhost",
    dialect: "mysql",
    port: Number(process.env.PORTDB) || 3306,
  }
);

export default dbGest;
