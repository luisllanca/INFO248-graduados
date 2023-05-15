import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

import dbEst from "./connectionEstudiante";
import { Gestion } from "../controllers/Gestion";
import { Estudiante } from "../controllers/Estudiante";

const ModeloGestion = dbEst.define<Gestion>(
  "gestion",
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
    estudiantes: {
      type: Array<Estudiante>,
      allowNull: true,
    },
  },
  { paranoid: true }
);

export default ModeloGestion;
