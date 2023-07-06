import { DataTypes, Model } from "sequelize";
import db from "./connection";
import EstudianteModel from "./EstudianteModel";

export default class ComprobanteModel extends Model {
  public id!: number;
  public fecha!: Date;
  public tipo!: string;
  public monto!: number;
  public img!: string | null; // Cambiado a tipo 'string'
  public extension!: string | null; //extension archivo
  public estudiante!: EstudianteModel;
}

ComprobanteModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT, // Cambiado a 'TEXT'
      allowNull: true,
    },
    extension: {
      type: DataTypes.STRING, // Cambiado a 'TEXT'
      allowNull: true,
    },
    id_estudiante: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "comprobantes",
    timestamps: false,
  }
);