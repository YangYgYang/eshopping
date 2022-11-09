'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    short_des: DataTypes.STRING,
    discount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    sales: DataTypes.INTEGER,
    create_at: DataTypes.DATE,
    update_at: DataTypes.DATE,
    img: DataTypes.STRING
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};