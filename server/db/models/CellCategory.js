const Sequelize = require("sequelize");
const db = require("../db");

const CellCategory = db.define("cellCategory", {
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  examples: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  }
})

// stem, bone, blood, muscle, fat, skin, nerve, endothelial, gamete, pancreatic, cancer
module.exports = CellCategory;
