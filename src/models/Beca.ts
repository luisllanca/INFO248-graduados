import { DataType, DataTypes } from "sequelize";
import db from "./connection";

const Beca = db.define('Beca',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    monto: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    fechaAsi: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    fechaExp: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },


},{ paranoid: true} )

export default Beca;