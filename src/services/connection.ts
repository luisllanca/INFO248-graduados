import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(
  process.env.NAMEDB || "graduados",
  process.env.USERDB || "root",
  process.env.PASSWORD || "",
  {
    host: process.env.HOSTDB,
    dialect: "mysql",
    port: Number(process.env.PORTDB) || 3306,
  }
);

export default db;
