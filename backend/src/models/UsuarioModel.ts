import { Model, DataTypes } from "sequelize";
import db from "./connection";
import EstudianteModel from "./EstudianteModel";
import PersonalAdministrativoModel from "./PersonalAdministrativoModel";
class UsuarioModel extends Model {
  public id!: number;
  public nombre!: string;
  public apellido!: string;
  // public password!: string;
  public rol!: string;
  public email!: string;
  public rut!: string;
}

UsuarioModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "usuarios",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    timestamps: false,
  }
);
export default UsuarioModel;
