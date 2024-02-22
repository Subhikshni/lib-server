const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db.js");

const bookdata = sequelize.define("bookdata", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publish_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  num_available: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { bookdata };
