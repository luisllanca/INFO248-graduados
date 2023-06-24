import { Model, DataTypes } from "sequelize";
import ComprobanteModel from "./ComprobanteModel";
import BecaModel from "./BecaModel";
import UsuarioModel from "./UsuarioModel";
import db from "./connection";

class EstudianteModel extends Model {
  public comprobantes!: ComprobanteModel[];
  public becas!: BecaModel[];
  public usuario!: UsuarioModel;
  public id!: number;
  public rut!: string;
  public programa!: string;
  public carrera!: string;
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
  { sequelize: db, tableName: "estudiantes", timestamps: false }
);
EstudianteModel.belongsTo(UsuarioModel, {
  foreignKey: "id_usuario",
  as: "usuario",
});
EstudianteModel.hasMany(ComprobanteModel, {
  foreignKey: "id_estudiante", // Cambia "id_estudiante" por el nombre correcto de la clave foránea en tu base de datos
  as: "comprobantes",
});
EstudianteModel.hasMany(BecaModel, {
  foreignKey: "id_estudiante", // Cambia "id_estudiante" por el nombre correcto de la clave foránea en tu base de datos
  as: "becas",
});
export default EstudianteModel;
