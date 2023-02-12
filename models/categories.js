'use strict';
const {
  Model
} = require('sequelize')
// module.exports = (sequelize, DataTypes) => {
//   const Category = sequelize.define('Categories', {
//     name: DataTypes.STRING,
//     img: DataTypes.STRING,
//     parent_id: DataTypes.INTEGER,
//     sort: DataTypes.INTEGER
//   }, {
//     underscored: true,
//   });
//   Categories.associate = function(models) {
//     // associations can be defined here
//     console.log(models)
//     models.Categories.hasMany(models.Products, { foreignKey: 'categoryId' })
//   };
//   return Categories;
// };

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate (models) {
      Category.hasMany(models.Products, { foreignKey: 'categoryId' })
    }
  };
  Category.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    parent_id: DataTypes.INTEGER,
    sort: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
    underscored: true
  })
  return Category
}

