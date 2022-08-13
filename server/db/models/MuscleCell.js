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
  },
  striated: {
    type: Sequelize.BOOLEAN
  },
  voluntary: {
    type: Sequelize.BOOLEAN
  },
  nucleus: {
    type: Sequelize.ENUM("single", "multinucleated"),
  },
});

module.exports = MuscleCell;

// striated means it contains light and dark bands that are caused by the arrangement of contractile filaments (actin and myosin filaments) in muscle cells often called fibers
// involuntary means contraction does not require conscious effor
