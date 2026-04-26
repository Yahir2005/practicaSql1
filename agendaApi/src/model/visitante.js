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
    fechaCreacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    email:{
        type: DataTypes.STRING(20),
    }
},{
    tableName: 'visitantes',
    timestamps: false,
});

module.exports = Visitante