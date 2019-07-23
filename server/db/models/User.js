const Sequelize = require('sequelize');
const db = require('../connection');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
