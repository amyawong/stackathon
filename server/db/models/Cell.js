const Sequelize = require("sequelize");
const db = require("../db");

const Cell = db.define("cell", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  image: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  purpose: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  // category: {
  //   type: Sequelize.ENUM('stem', 'bone', 'blood', 'muscle', 'fat', 'skin', 'nerve', 'endothelial', 'gamete', 'pancreatic', 'cancer')
  // }
});

module.exports = Cell;

// glands, hormones, bones