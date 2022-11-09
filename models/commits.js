'use strict';
module.exports = (sequelize, DataTypes) => {
  const commits = sequelize.define('commits', {
    content: DataTypes.STRING,
    score: DataTypes.INTEGER,
    created_at: DataTypes.DATE
  }, {});
  commits.associate = function(models) {
    // associations can be defined here
  };
  return commits;
};