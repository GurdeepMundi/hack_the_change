const Sequelize = require('sequelize');
const db = require('../config/database');

const Scam = db.define('scamstable', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  latitude: {
    type: Sequelize.FLOAT,
  },
  longitude: {
    type: Sequelize.FLOAT,
  },
  category: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Scam;
