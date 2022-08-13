const db = require('./db');

// Imported db [category] models
const Cell = require('./models/Cell');
const CellCategory = require('./models/CellCategory');
const Organ = require('./models/Organ');
const Organelle = require('./models/Organelle');
const OrganSystem = require('./models/OrganSystem');

module.exports = {
  db,
  models: {
    Cell,
    CellCategory,
    Organ,
    Organelle,
    OrganSystem,
  }
}

// set up associations here
// hasOne = one-to-one (user has one phone)
// belongsTo = one-to-one (phone belongs to user)
// hasMany = one-to-many
// belongsToMany = many-to-many

OrganSystem.hasMany(Organ) // Respiratory system consists of lungs, pharynx, larynx, trachea, bronchi, nose, mouth
Organ.belongsTo(OrganSystem)

Organ.hasMany(Cell) // Lung has cilia, goblet, basal, brush, neuroendocrine cells
Cell.belongsTo(Organ)

Organelle.belongsToMany(Cell, { through: 'cell_instance'}) // same organelles can be found in different cells
Cell.belongsToMany(Organelle, { through: 'cell_instance'})

Cell.hasOne(CellCategory) // muscle cells are a type of cell
CellCategory.belongsTo(Cell) 
