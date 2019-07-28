const db = require('./connection');
const Product = require('../db/models/Product');
const Supplier = require('../db/models/Supplier');
const Category = require('../db/models/Category');
const Order = require('../db/models/Order');
const User = require('../db/models/User');
const Session = require('../db/models/Session');

// Associations Here
Product.belongsTo(Supplier);
Product.belongsTo(Category);
Supplier.hasMany(Product);
Category.hasMany(Product);
User.hasMany(Session);
Session.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(User);

module.exports = {
  db,
  Product,
  User,
  Session,
  Supplier,
  Category,
  Order,
};
