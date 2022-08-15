import nextConnect from 'next-connect';
const OrganSystem = require('../../../server/db/models/OrganSystem');

const handler = nextConnect();
handler.get(async (req, res) => {
  const systems = await OrganSystem.findAll();
  res.send(systems)
})

export default handler