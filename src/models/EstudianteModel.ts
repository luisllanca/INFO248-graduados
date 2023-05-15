import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

import dbEst from "./connectionEstudiante";
import { Estudiante } from "../controllers/Estudiante";
import { Comprobante } from "../controllers/Comprobante";
import { Beca } from "../controllers/Beca";

const ModeloEstudiante = dbEst.define<Estudiante>(
  "estudiantes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rut: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carrera: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comprobantes: {
      type: Array<Comprobante>,
      allowNull: true,
    },
    becas: {
      type: Array<Beca>,
      allowNull: true,
    },
  },
  { paranoid: true }
);

export default ModeloEstudiante;
