const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Quote extends Model {}

Quote.init(
    {
        userId: {
          type: DataTypes.INTEGER,
          references: {
              model: "user",
              key: "id",
          },
          // allowNull:false
        },
        topic: {
          type: DataTypes.STRING,
          allowNull:false
        },
        author_name: {
            type: DataTypes.STRING,
            allowNull:false
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
        sequelize,
        freezeTableName: true,
        timestamps: true,
        underscored: true,
        modelName: "quote"
    
      }
    );
    
module.exports = Quote;