const { DataTypes, Model } = require("sequelize");
const sequelize = require("../util/db");
const User = require("./user.js");

class Account extends Model {}
Account.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Account", // We need to choose the model name
    timestamps: true,
  }
);

User.hasOne(Account);
Account.belongsTo(User, { constraints: true });

module.exports = Account;
