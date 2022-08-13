"use strict";

const {
  db,
  models: { Cell, MuscleCell, Organ, Organelle, OrganSystem },
} = require('../server/db')

const cells = [
  {
    name: 'motor neuron',
    image: 'https://biologydictionary.net/wp-content/uploads/2020/05/Motor_neuron_diagram.jpg',
    purpose: 'takes messages from the spinal cord to the muscles',
    locatedIn: 'brain and spinal cord',
    category: 'nerve'
  }, 
  {
    name: 'adipocyte',
    image: 'https://biologydictionary.net/wp-content/uploads/2021/05/Fat-cell-structure.jpg',
    purpose: 'insulates body and cushions and protects internal organs',
    locatedIn: 'under skin, between muscles, and around organs',
    category: 'fat'
  }, 
  {
    name: 'osteocyte',
    image: 'https://media.istockphoto.com/vectors/osteocyte-vector-id842653290?k=20&m=842653290&s=612x612&w=0&h=jBf9stCcM-taS0U_wBvmcAJ9-E9HBBOozYpZTgkeSYQ=',
    purpose: 'responds to mechanical strain and sends signals of bone formation or bone resorption to the bone surface, modifies their microenvironment, and regulates both local and systemic mineral homeostasis',
    locatedIn: 'bones',
    category: 'bone'
  }, 
];

const muscleCells = [
  {
    name: 'skeletal',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Skeletal_striated_muscle.jpg',
    shape: 'cylindrical',
    location: 'muscles attached to bones of skeleton',
    striated: true,
    voluntary: true,
    nucleus: 'multinucleated',
  },
  {
    name: 'cardiac',
    image: 'https://media.sciencephoto.com/image/c0286611/400wm',
    shape: 'rectangular',
    location: 'heart',
    striated: true,
    voluntary: false,
    nucleus: 'single',
  },
  {
    name: 'smooth',
    image: 'https://www.azonano.com/images/news/ImageForNews_38337_16389630591236377.jpg',
    shape: 'spindle',
    location: 'walls of internal organs (i.e. small intestine) and blood vessels',
    striated: false,
    voluntary: false,
    nucleus: 'single',
  },
];

const organs = [
  {
    name: 'liver',
    image: 'https://images.medicinenet.com/images/image_collection/webmd_anatomy/liver-anatomy.jpg',
    purpose: 'disposes worn out red blood cells, produces bile, stores glycogen, maintains blood sugar levels, and produces blood proteins',
  },
  {
    name: 'pancreas',
    image: 'https://images.medicinenet.com/images/image_collection/webmd_anatomy/liver-anatomy.jpg',
    purpose: 'produces and secretes pancretic juice to digest food in the small intestine and secretes insulin and glucagon to regulate blood glucose levels',
  },
  {
    name: 'gallbladder',
    image: 'https://www.drugwatch.com/wp-content/uploads/Gallbladder-Diagram-1-640x0-c-default.jpg',
    purpose: 'stores and releases bile to aid in the breakdown of fat',
  },
  // {
  //   name: 'kidneys',
  //   image: '',
  //   purpose: 'regulates blood volume and pressure, regulates pH levels of blood, and excretes nitrogenous wastes'
  // },
];

const organelles = [
  {
    name: 'ribosomes',
    image: 'https://cdn.britannica.com/79/117279-050-3AE0F00F/membrane-system-Endoplasmic-reticulum-cells-biosynthesis-transport.jpg?w=400&h=300&c=crop',
    description: 'carry out protein synthesis and translation',
  },
  {
    name: 'endoplasmic recticulum',
    image: 'https://c8.alamy.com/comp/BB46TC/the-endoplasmic-reticulum-plays-an-important-role-in-the-biosynthesis-BB46TC.jpg',
    description: 'found on ribosomes and are responsible for processing and transporting proteins and the synthesis of lipids',
  },
  {
    name: 'lysosomes',
    image: 'https://biologyease.com/wp-content/uploads/2020/07/Structure-of-Lysosomes.jpg',
    description: 'vescicles that digest molecules or portions of a cell',
  },
];

const organSystems = [
  {
    name: 'respiratory system',
    image: 'http://pressbooks.oer.hawaii.edu/humannutrition2/wp-content/uploads/sites/14/2019/06/major-respiratory-structures.jpeg',
    purpose: 'invovled in breathing; helps get oxygen into lungs and moves oxygen through body',
    organsInvolved: 'epiglottis, larynx, trachea, nasopharynx, glottis, lungs',
  },
  {
    name: 'lymphatic system',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Blausen_0623_LymphaticSystem_Female.png',
    purpose: 'drains waste from tissues and plays a role in immune response',
    organsInvolved: 'thymus, appendix, spleen',
  },
  {
    name: 'cardiovascular system',
    image: 'https://www.thoughtco.com/thmb/_sJelWZ2fsE_-KTo_vGg_s4pfdQ=/2239x1259/smart/filters:no_upscale()/GettyImages-97537745-59efa47d6f53ba0011c0070b.jpg',
    purpose: 'thermoregulation, maintains fluid balance within body, and transports nutrients, gases, and wastes within body',
    organsInvolved: 'heart and blood vessels',
  },
  // {
  //   name: 'nervous system',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/TE-Nervous_system_diagram.svg/1200px-TE-Nervous_system_diagram.svg.png',
  //   purpose: 'coordination',
  //   organsInvolved: 'brain and spinal cord',
  // },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      cells.map((cell) => {
        return Cell.create(cell)
      })
    );
    await Promise.all(
      muscleCells.map((muscleCell) => {
        return MuscleCell.create(muscleCell)
      })
    );
    await Promise.all(
      organs.map((organ) => {
        return Organ.create(organ)
      })
    );
    await Promise.all(
      organelles.map((organelle) => {
        return Organelle.create(organelle)
      })
    );
    await Promise.all(
      organSystems.map((organSystem) => {
        return OrganSystem.create(organSystem)
      })
    );

  } catch (err) {
    console.error(err)
  }
}


async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
