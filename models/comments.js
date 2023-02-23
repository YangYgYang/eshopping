'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const comments = sequelize.define('comments', {
//     content: DataTypes.STRING,
//     score: DataTypes.INTEGER,
//     created_at: DataTypes.DATE
//   }, {});
//   comments.associate = function(models) {
//     // associations can be defined here
//   };
//   return comments;
// };

const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    static associate (models) {
      Comments.belongsTo(models.Products, { foreignKey: 'product_id' })
    }
  }
  Comments.init({
    // Model attributes are defined here
    content: DataTypes.STRING,
    score: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Comments', // We need to choose the model name
    tableName: 'comments',
    underscored: true
  })
  return Comments
}