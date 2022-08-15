import nextConnect from "next-connect";
const CellCategory = require("../../../server/db/models/CellCategory");

const handler = nextConnect();
handler.get(async (req, res) => {
  const { slug } = req.query;
  try {
    const cellCategory = await CellCategory.findOne({
      where: {
        category: slug,
      },
    });
    res.send(cellCategory);
  } catch (err) {
    console.error(err);
  }
});

export default handler;
