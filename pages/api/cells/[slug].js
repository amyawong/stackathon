import nextConnect from "next-connect";
const Cell = require("../../../server/db/models/Cell");

const handler = nextConnect();
handler.get(async (req, res) => {
  const { slug } = req.query;
  try {
    const cell = await Cell.findOne({
      where: {
        cell: slug,
      },
    });
    res.send(cell);
  } catch (err) {
    console.error(err);
  }
});

export default handler;
