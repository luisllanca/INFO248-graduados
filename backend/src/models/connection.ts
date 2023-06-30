import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbGest = new Sequelize(
  process.env.NAMEDB || "egresados",
  process.env.USERDB || "root",
  process.env.PASSWORD || "benja123",
  {
    host: process.env.HOSTDB || "localhost",
    dialect: "mysql",
    port: Number(process.env.PORTDB),
  }
);

export default dbGest;
