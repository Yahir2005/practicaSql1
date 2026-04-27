const sequalize = require('./sequelize');

const Visitante = require('./visitante')(sequalize);
const Cita = require('./cita')(sequalize);

Visitante.hasMany(Cita, { foreignKey: 'visitanteId' });
Cita.belongsTo(Visitante, { foreignKey: 'visitanteId' });

module.exports = {
  sequelize,
  Visitante,
  Cita
};