const Sequelize = require('sequelize');
const db = require('../connection');

const Session = db.define('Session', {
  sid: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  expires: {
    type: Sequelize.DATE,
  },
  data: {
    type: Sequelize.STRING(50000),
  },
});

module.exports = Session;
