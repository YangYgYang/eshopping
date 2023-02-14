'use strict';
const {
  Model
} = require('sequelize')

// module.exports = (sequelize, DataTypes) => {
//   const products = sequelize.define('products', {
//     name: DataTypes.STRING,
//     price: DataTypes.INTEGER,
//     short_des: DataTypes.STRING,
//     discount: DataTypes.INTEGER,
//     description: DataTypes.STRING,
//     sales: DataTypes.INTEGER,
//     img: DataTypes.STRING
//   }, {});

//   products.associate = function(models) {
//     // associations can be defined here
//     console.log(models)
//     models.products.belongsTo(models.Category, { foreignKey: 'categoryId' })
//   };
//   return products;
// };

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate (models) {
      // Products.belongsTo(models.Categories, { foreignKey: 'categoryId' })
    }
  };
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    short_des: DataTypes.STRING,
    discount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    sales: DataTypes.INTEGER,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
    tableName: 'products',
    underscored: true
  })
  return Products
}

