import nextConnect from "next-connect";
const Organ = require("../../../server/db/models/Organ");

const handler = nextConnect();
handler.get(async (req, res) => {
  const organs = await Organ.findAll();
  res.send(organs);
});

export default handler;
