// const Sequelize = require("sequelize");
// const db = require("../db");

// const MuscleCell = db.define("muscleCell", {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//     },
//   },
//   image: {
//     type: Sequelize.TEXT,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//     },
//   },
//   shape: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//     },
//   },
//   location: {
//     type: Sequelize.TEXT,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//     },
//   },
//   striated: {
//     type: Sequelize.BOOLEAN
//   },
//   voluntary: {
//     type: Sequelize.BOOLEAN
//   },
//   nucleus: {
//     type: Sequelize.ENUM("single", "multinucleated"),
//   },
// });

// module.exports = MuscleCell;

// // striated means it contains light and dark bands that are caused by the arrangement of contractile filaments (actin and myosin filaments) in muscle cells often called fibers
// // involuntary means contraction does not require conscious effor

// const muscleCells = [
//   {
//     name: 'skeletal',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Skeletal_striated_muscle.jpg',
//     shape: 'cylindrical',
//     location: 'muscles attached to bones of skeleton',
//     striated: true,
//     voluntary: true,
//     nucleus: 'multinucleated',
//   },
//   {
//     name: 'cardiac',
//     image: 'https://media.sciencephoto.com/image/c0286611/400wm',
//     shape: 'rectangular',
//     location: 'heart',
//     striated: true,
//     voluntary: false,
//     nucleus: 'single',
//   },
//   {
//     name: 'smooth',
//     image: 'https://www.azonano.com/images/news/ImageForNews_38337_16389630591236377.jpg',
//     shape: 'spindle',
//     location: 'walls of internal organs (i.e. small intestine) and blood vessels',
//     striated: false,
//     voluntary: false,
//     nucleus: 'single',
//   },
// ];
