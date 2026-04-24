const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Visitante = sequelize.define('Visitantes',{
    idVisitante: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.STRING(100),
    },
    apellidos:{
        type: DataTypes.STRING(100),
    },
    telefono: {
        type: DataTypes.STRING(20),
    },
    email:{
        type: DataTypes.STRING(20),
    }
},{
    tableName: 'Visitantes',
    timestamps: false,
});

module.exports = Visitante