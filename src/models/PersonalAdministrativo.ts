import { DataType, DataTypes } from "sequelize";
import db from "./connection";

const PersonalAdministrativo = db.define('PersonalAdministrativo',{
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },


},{ paranoid: true} )

export default PersonalAdministrativo;