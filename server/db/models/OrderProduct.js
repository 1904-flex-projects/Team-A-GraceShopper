const Sequelize = require('sequelize');
const db = require('../connection');

const OrderProduct = db.define('orderProduct', {
  // id: {
  //     type: Sequelize.UUID,
  //     defaultValue: Sequelize.UUIDV4,
  //     primaryKey: true,
  //   },
  productQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = OrderProduct;
