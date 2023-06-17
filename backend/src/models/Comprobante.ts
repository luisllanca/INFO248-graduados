import { DataType, DataTypes } from "sequelize";
import db from "./connection";

const Comprobante = db.define('Comprobante',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    monto: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    fecha: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },


},{ paranoid: true} )

export default Comprobante;