const Sequelize = require("sequelize");
const db = require("../db");

const MuscleCell = db.define("muscleCell", {
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
  shape: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  location: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    nucleus: {
      type: Sequelize.ENUM("single nucleus", "multinucleated"),
    },
  },
});

module.exports = MuscleCell;

// skeletal, cardiac, smooth
// https://www.kenhub.com/en/library/anatomy/types-of-muscle-cells
