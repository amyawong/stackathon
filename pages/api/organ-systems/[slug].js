import nextConnect from 'next-connect';
// const { models: Cell, CellCategory, Organ, Organelle, OrganSystem } = require('../../../server/db');
const OrganSystem = require('../../../server/db/models/OrganSystem');

const handler = nextConnect();
handler.get(async(req, res) => {
  const { slug } = req.query;
  try {
    const system = await OrganSystem.findOne({
      where: {
        system: slug
      }
    })
    res.send(system)
  } catch (err) {
    console.error(err)
  }
})

export default handler