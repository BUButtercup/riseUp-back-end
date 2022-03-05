const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}

Post.init(
  {
    topic:{
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      // CHANGE BACK TO UUID WHEN DONE? DOESN'T WORK WITH UUID RIGHT NOW
      // allowNull:false
    },
    body: {
      type: DataTypes.STRING,
      allowNull:false
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull:false,
      default: Sequelize.NOW()
    }
  },
  {
    sequelize
  }
);

module.exports = Post;