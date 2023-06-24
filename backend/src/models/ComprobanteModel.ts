import { DataTypes, Model } from "sequelize";
import db from "./connection";
import EstudianteModel from "./EstudianteModel";

export default class ComprobanteModel extends Model {
  public id!: number;
  public fecha!: Date;
  public tipo!: string;
  public monto!: number;
  public img!: string;
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
      type: DataTypes.STRING,
      allowNull: false,
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
