const Sequelize = require("sequelize");
const db = require("../db");

const OrganSystem = db.define("cartItem", {
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
  //   type: Sequelize.ENUM('respiratory', 'digestive and excretory', 'circulatory', 'urinary', 'integumentary', 'skeletal', 'muscular', 'endocrine', 'lymphatic', 'nervous', 'reproductive')
  // },
});

module.exports = OrganSystem;
