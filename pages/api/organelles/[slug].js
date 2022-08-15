import nextConnect from "next-connect";
const Organelle = require("../../../server/db/models/Organelle");

const handler = nextConnect();
handler.get(async (req, res) => {
  const { slug } = req.query;
  try {
    const organelle = await Organelle.findOne({
      where: {
        organelle: slug,
      },
    });
    res.send(organelle);
  } catch (err) {
    console.error(err);
  }
});

export default handler;
