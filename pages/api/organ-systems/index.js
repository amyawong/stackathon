import nextConnect from 'next-connect';
// const nextConnect = require('next-connect');
const { models: Cell, CellCategory, Organ, Organelle, OrganSystem } = require('../../../server/db');
// import { Cell, CellCategory, Organ, Organelle, OrganSystem } from '../../../server/db';

const handler = nextConnect();
handler.get(async (req, res) => {
  // const { query: { slug } } = req;
  const systems = await OrganSystem.findAll(
    // { attributes: ['system'] }
  );
  console.log('hi')
  res.send(systems)
})

export default handler