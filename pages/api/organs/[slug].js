import nextConnect from "next-connect";
const Organ = require("../../../server/db/models/Organ");

const handler = nextConnect();
handler.get(async (req, res) => {
  const { slug } = req.query;
  try {
    const organ = await Organ.findOne({
      where: {
        organ: slug,
      },
    });
    res.send(organ);
  } catch (err) {
    console.error(err);
  }
});

export default handler;
