import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import UsuarioModel from "../Usuario/UsuarioModel";
import db from "../connection";

class PersonalAdministrativoModel extends Model {}

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
  }
);
PersonalAdministrativoModel.belongsTo(UsuarioModel, {
  foreignKey: "id_usuario",
});
export default PersonalAdministrativoModel;
