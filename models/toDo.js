const { DataTypes, Model } = require("sequelize");
const sequelize = require("../util/db");
const Account = require ("./account")
class ToDo extends Model {}
ToDo.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nameTask: { type: DataTypes.STRING, allowNull: false },
    haderTask: { type: DataTypes.STRING, allowNull: true },
    bodyTask: { type: DataTypes.STRING, allowNull: true },

    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "ToDo", // We need to choose the model name
    timestamps: true,
  }
);

Account.hasOne(ToDo);
ToDo.belongsTo(Account, { constraints: true });

module.exports = ToDo;
