const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Cita = sequelize.define('Citas',{
    idCita: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fechaCita: {
        type: DataTypes.DATE,
    },
    horaCita: {
        type: DataTypes.TIME,
    },
    motivo: {
        type: DataTypes.STRING(255),
    },
    obserbvaciones: {
        type: DataTypes.STRING(255),
    },
    estado: {
        type: DataTypes.ENUM('programada', 'confirmada', 'completada', 'cancelada'),
    },
    fechaCreacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
},{
    tableName: 'Citas',
    timestamps: false,
});

module.exports = Cita;