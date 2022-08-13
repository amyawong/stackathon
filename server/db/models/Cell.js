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
  locatedIn: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  category: {
    type: Sequelize.ENUM('stem', 'bone', 'blood', 'muscle', 'fat', 'skin', 'nerve', 'endothelial', 'gamete', 'pancreatic', 'cancer')
  },
  // trait: {
  //   type: Sequelize.TEXT,
  // },
  // components: {
  //   type: Sequelize.TEXT,
  // },
  // exampleOfUsage: {
  //   type: Sequelize.TEXT,
  // },
});

module.exports = Cell;

// glands, hormones, bones, parts of organs, pathways, tissues (epithelial, muscular, nervous, connective), enzymes, anatomy, trigyclerides/cholesterol, key concepts (i.e. homeostasis)