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
    observaciones: {
        type: DataTypes.STRING(255),
    },
    estado: {
        type: DataTypes.ENUM('programada', 'confirmada', 'completada', 'cancelada'),
        defaultValue: 'programada',
        allowNull: false,
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
    tableName: 'citas',
    timestamps: false,
});

module.exports = Cita;