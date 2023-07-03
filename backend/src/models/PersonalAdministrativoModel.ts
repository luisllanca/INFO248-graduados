import { Model, DataTypes } from "sequelize";
import UsuarioModel from "./UsuarioModel";
import db from "./connection";

class PersonalAdministrativoModel extends Model {
  public usuario!: UsuarioModel;
  public id!: number;
  public cargo!: string;
}

PersonalAdministrativoModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "personal_administrativo",
    sequelize: db,
    timestamps: false
  }
);
PersonalAdministrativoModel.belongsTo(UsuarioModel, {
  foreignKey: "id_usuario",
  as: "usuario",
});
export default PersonalAdministrativoModel;