import { DataTypes, Model } from "sequelize";
import db from "./connection";
import EstudianteModel from "./EstudianteModel";

export default class BecaModel extends Model {
  public id!: number;
  public tipo!: string;
  public monto!: number;
  public fechaAsi!: Date;
  public fechaExp!: Date;
  public descripcion!: string;
  public estudiante!: EstudianteModel;
}

BecaModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fechaAsi: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fechaExp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    id_estudiante: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "becas",
    timestamps: false,
  }
);
