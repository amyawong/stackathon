import nextConnect from "next-connect";
// const { models: Cell, CellCategory, Organ, Organelle, OrganSystem } = require('../../../server/db');
const Organelle = require("../../../server/db/models/Organelle");

const handler = nextConnect();
handler.get(async (req, res) => {
  const organelles = await Organelle.findAll();
  res.send(organelles);
});

export default handler;
