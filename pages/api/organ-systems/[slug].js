import nextConnect from 'next-connect';
const { models: Cell, CellCategory, Organ, Organelle, OrganSystem } = require('../../../server/db');

const handler = nextConnect();
handler.get('/organ-system/:slug', async(req, res) => {
  // const { slug } = req.query;
  // const = slug;

  // const system = await OrganSystem.findOne({
  //   where: {
  //     system: req.query,
  //   },
  //   attributes: ['system', 'image', 'purpose', 'organsInvolved'],
  // });
  try {
    const system = await OrganSystem.findOne({
      where: {
        system: req.params.slug
      }
    })
    res.send(system)
  } catch (err) {
    console.error(err)
  }
})

export default handler