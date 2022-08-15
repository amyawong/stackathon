import nextConnect from "next-connect";
const CellCategory = require("../../../server/db/models/CellCategory");

const handler = nextConnect();
handler.get(async (req, res) => {
  const categories = await CellCategory.findAll();
  res.send(categories);
});

export default handler;
