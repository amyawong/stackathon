import nextConnect from "next-connect";
const Cell = require("../../../server/db/models/Cell");

const handler = nextConnect();
handler.get(async (req, res) => {
  const cells = await Cell.findAll();
  res.send(cells);
});

export default handler;
