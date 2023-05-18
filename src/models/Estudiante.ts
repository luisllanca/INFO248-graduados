import { DataType, DataTypes } from "sequelize";
import db from "./connection";

const Estudiante = db.define('Estudiante',{
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    rut: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    carrera: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    programa: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },


},{ paranoid: true} )

export default Estudiante;