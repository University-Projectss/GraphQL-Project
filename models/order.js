'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.hasMany(models.OrderProduct, {as: 'products'})
    }
  }
  Order.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
    },
    userId: DataTypes.INTEGER,
    date: DataTypes.STRING,
    price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    address: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};