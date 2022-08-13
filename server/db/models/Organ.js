const Sequelize = require("sequelize");
const db = require("../db");

const Organ = db.define("organ", {
  organ: {
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
  // location: {
  //   type: Sequelize.ENUM('internal', 'external')
  // },
});

module.exports = Organ;

// associated conditions/diseases

// organ -> part -> sub-parts & purposes
// heart -> blood vessels -> capillaries, arteries, veins (significance, diameter)
// kidney -> lobes -> filtration, reabsorption, secretion