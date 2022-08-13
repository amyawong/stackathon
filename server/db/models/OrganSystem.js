const Sequelize = require("sequelize");
const db = require("../db");

const OrganSystem = db.define("organSystem", {
  system: {
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
  organsInvolved: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  // associatedConditions: {
  //   type: Sequelize.STRING,
  // },
});

module.exports = OrganSystem;

// digestive, respiratory, lymphatic, cardiovascular, urinary, endocrine (85)
