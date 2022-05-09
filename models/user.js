const { DataTypes, Model } = require("sequelize");
const sequelize = require("../util/db");


class User extends Model {}
User.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
    timestamps: true,
  }
);
module.exports = User;
