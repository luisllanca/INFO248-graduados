import { Model, DataTypes } from "sequelize";
import ComprobanteModel from "./ComprobanteModel";
import UsuarioModel from "./UsuarioModel";
import db from "./connection";

class EstudianteModel extends Model {
  public readonly comprobantes?: ComprobanteModel[];
  public usuario!: UsuarioModel;
}

EstudianteModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rut: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    programa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carrera: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, tableName: "estudiantes" }
);
EstudianteModel.belongsTo(UsuarioModel, {
  foreignKey: "id_usuario",
  as: "usuario",
});

export default EstudianteModel;
