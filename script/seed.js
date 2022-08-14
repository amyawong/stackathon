"use strict";

const {
  db,
  models: { Cell, CellCategory, Organ, Organelle, OrganSystem },
} = require("../server/db");

// const cells = [
//   {
//     cell: 'motor neuron',
//     image: 'https://biologydictionary.net/wp-content/uploads/2020/05/Motor_neuron_diagram.jpg',
//     purpose: 'takes messages from the spinal cord to the muscles',
//     locatedIn: 'brain and spinal cord',
//     category: 'nerve'
//   },
//   {
//     cell: 'adipocyte',
//     image: 'https://biologydictionary.net/wp-content/uploads/2021/05/Fat-cell-structure.jpg',
//     purpose: 'insulates body and cushions and protects internal organs',
//     locatedIn: 'under skin, between muscles, and around organs',
//     category: 'fat'
//   },
//   {
//     cell: 'osteocyte',
//     image: 'https://media.istockphoto.com/vectors/osteocyte-vector-id842653290?k=20&m=842653290&s=612x612&w=0&h=jBf9stCcM-taS0U_wBvmcAJ9-E9HBBOozYpZTgkeSYQ=',
//     purpose: 'responds to mechanical strain and sends signals of bone formation or bone resorption to the bone surface, modifies their microenvironment, and regulates both local and systemic mineral homeostasis',
//     locatedIn: 'bones',
//     category: 'bone'
//   },
//   // diff types of white blood cells
// ];

// const cellCategories = [
//   {
//     category: "muscle",
//     examples: "smooth, cardiac, skeletal",
//   },
//   {
//     category: "bone",
//     examples: "osteoblasts, osteoclasts, osteocyte",
//   },
//   {
//     category: "blood",
//     examples: "hemoglobin, white blood cells",
//   },
// ];

// const organs = [
//   {
//     organ: "liver",
//     image:
//       "https://images.medicinenet.com/images/image_collection/webmd_anatomy/liver-anatomy.jpg",
//     purpose:
//       "disposes worn out red blood cells, produces bile, stores glycogen, maintains blood sugar levels, and produces blood proteins",
//   },
//   {
//     organ: "pancreas",
//     image:
//       "https://images.medicinenet.com/images/image_collection/webmd_anatomy/liver-anatomy.jpg",
//     purpose:
//       "produces and secretes pancretic juice to digest food in the small intestine and secretes insulin and glucagon to regulate blood glucose levels",
//   },
//   {
//     organ: "gallbladder",
//     image:
//       "https://www.drugwatch.com/wp-content/uploads/Gallbladder-Diagram-1-640x0-c-default.jpg",
//     purpose: "stores and releases bile to aid in the breakdown of fat",
//   },
//   // {
//   //   name: 'kidneys',
//   //   image: '',
//   //   purpose: 'regulates blood volume and pressure, regulates pH levels of blood, and excretes nitrogenous wastes'
//   // },
// ];

// const organelles = [
//   {
//     organelle: "ribosomes",
//     image:
//       "https://cdn.britannica.com/79/117279-050-3AE0F00F/membrane-system-Endoplasmic-reticulum-cells-biosynthesis-transport.jpg?w=400&h=300&c=crop",
//     description: "carry out protein synthesis and translation",
//   },
//   {
//     organelle: "endoplasmic recticulum",
//     image:
//       "https://c8.alamy.com/comp/BB46TC/the-endoplasmic-reticulum-plays-an-important-role-in-the-biosynthesis-BB46TC.jpg",
//     description:
//       "found on ribosomes and are responsible for processing and transporting proteins and the synthesis of lipids",
//   },
//   {
//     organelle: "lysosomes",
//     image:
//       "https://biologyease.com/wp-content/uploads/2020/07/Structure-of-Lysosomes.jpg",
//     description: "vescicles that digest molecules or portions of a cell",
//   },
// ];

// const organSystems = [
//   {
//     system: "respiratory system",
//     image:
//       "http://pressbooks.oer.hawaii.edu/humannutrition2/wp-content/uploads/sites/14/2019/06/major-respiratory-structures.jpeg",
//     purpose:
//       "invovled in breathing; helps get oxygen into lungs and moves oxygen through body",
//     organsInvolved: "epiglottis, larynx, trachea, nasopharynx, glottis, lungs",
//   },
//   {
//     system: "lymphatic system",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/f/f4/Blausen_0623_LymphaticSystem_Female.png",
//     purpose: "drains waste from tissues and plays a role in immune response",
//     organsInvolved: "thymus, appendix, spleen",
//   },
//   {
//     system: "cardiovascular system",
//     image:
//       "https://www.thoughtco.com/thmb/_sJelWZ2fsE_-KTo_vGg_s4pfdQ=/2239x1259/smart/filters:no_upscale()/GettyImages-97537745-59efa47d6f53ba0011c0070b.jpg",
//     purpose:
//       "thermoregulation, maintains fluid balance within body, and transports nutrients, gases, and wastes within body",
//     organsInvolved: "heart and blood vessels",
//   },
//   // {
//   //   system: 'nervous system',
//   //   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/TE-Nervous_system_diagram.svg/1200px-TE-Nervous_system_diagram.svg.png',
//   //   purpose: 'coordination',
//   //   organsInvolved: 'brain and spinal cord',
//   // },
// ];

const seed = async () => {
  try {
    await db.sync({ force: true });
    // await Promise.all(
    //   cells.map((cell) => {
    //     return Cell.create(cell)
    //   })
    // );
    // await Promise.all(
    //   cellCategories.map((cellCategory) => {
    //     return CellCategory.create(cellCategory)
    //   })
    // );
    // await Promise.all(
    //   organs.map((organ) => {
    //     return Organ.create(organ)
    //   })
    // );
    // await Promise.all(
    //   organelles.map((organelle) => {
    //     return Organelle.create(organelle)
    //   })
    // );
    // await Promise.all(
    //   organSystems.map((organSystem) => {
    //     return OrganSystem.create(organSystem)
    //   })
    // );

    await Cell.bulkCreate([
      {
        cell: "motor neuron",
        image:
          "https://biologydictionary.net/wp-content/uploads/2020/05/Motor_neuron_diagram.jpg",
        purpose: "takes messages from the spinal cord to the muscles",
        locatedIn: "brain and spinal cord",
        category: "nerve",
      },
      {
        cell: "adipocyte",
        image:
          "https://biologydictionary.net/wp-content/uploads/2021/05/Fat-cell-structure.jpg",
        purpose: "insulates body and cushions and protects internal organs",
        locatedIn: "under skin, between muscles, and around organs",
        category: "fat",
      },
      {
        cell: "osteocyte",
        image:
          "https://media.istockphoto.com/vectors/osteocyte-vector-id842653290?k=20&m=842653290&s=612x612&w=0&h=jBf9stCcM-taS0U_wBvmcAJ9-E9HBBOozYpZTgkeSYQ=",
        purpose:
          "responds to mechanical strain and sends signals of bone formation or bone resorption to the bone surface, modifies their microenvironment, and regulates both local and systemic mineral homeostasis",
        locatedIn: "bones",
        category: "bone",
      },
    ]);

    await CellCategory.bulkCreate([
      {
        id: 1,
        category: "muscle",
        examples: "smooth, cardiac, skeletal",
      },
      {
        id: 2,
        category: "bone",
        examples: "osteoblasts, osteoclasts, osteocyte",
      },
      {
        id: 3,
        category: "blood",
        examples: "hemoglobin, white blood cells",
      },
    ]);

    await Organ.bulkCreate([
      {
        organ: "liver",
        image:
          "https://images.medicinenet.com/images/image_collection/webmd_anatomy/liver-anatomy.jpg",
        purpose:
          "disposes worn out red blood cells, produces bile, stores glycogen, maintains blood sugar levels, and produces blood proteins",
      },
      {
        organ: "pancreas",
        image:
          "https://images.medicinenet.com/images/image_collection/webmd_anatomy/liver-anatomy.jpg",
        purpose:
          "produces and secretes pancretic juice to digest food in the small intestine and secretes insulin and glucagon to regulate blood glucose levels",
      },
      {
        organ: "gallbladder",
        image:
          "https://www.drugwatch.com/wp-content/uploads/Gallbladder-Diagram-1-640x0-c-default.jpg",
        purpose: "stores and releases bile to aid in the breakdown of fat",
      }
    ]);

    await Organelle.bulkCreate([
      {
        organelle: "ribosomes",
        image:
          "https://cdn.britannica.com/79/117279-050-3AE0F00F/membrane-system-Endoplasmic-reticulum-cells-biosynthesis-transport.jpg?w=400&h=300&c=crop",
        description: "carry out protein synthesis and translation",
      },
      {
        organelle: "endoplasmic recticulum",
        image:
          "https://c8.alamy.com/comp/BB46TC/the-endoplasmic-reticulum-plays-an-important-role-in-the-biosynthesis-BB46TC.jpg",
        description:
          "found on ribosomes and are responsible for processing and transporting proteins and the synthesis of lipids",
      },
      {
        organelle: "lysosomes",
        image:
          "https://biologyease.com/wp-content/uploads/2020/07/Structure-of-Lysosomes.jpg",
        description: "vescicles that digest molecules or portions of a cell",
      },
    ]);

    await OrganSystem.bulkCreate([
      {
        system: "respiratory system",
        image:
          "http://pressbooks.oer.hawaii.edu/humannutrition2/wp-content/uploads/sites/14/2019/06/major-respiratory-structures.jpeg",
        purpose:
          "invovled in breathing; helps get oxygen into lungs and moves oxygen through body",
        organsInvolved: "epiglottis, larynx, trachea, nasopharynx, glottis, lungs",
      },
      {
        system: "lymphatic system",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f4/Blausen_0623_LymphaticSystem_Female.png",
        purpose: "drains waste from tissues and plays a role in immune response",
        organsInvolved: "thymus, appendix, spleen",
      },
      {
        system: "cardiovascular system",
        image:
          "https://www.thoughtco.com/thmb/_sJelWZ2fsE_-KTo_vGg_s4pfdQ=/2239x1259/smart/filters:no_upscale()/GettyImages-97537745-59efa47d6f53ba0011c0070b.jpg",
        purpose:
          "thermoregulation, maintains fluid balance within body, and transports nutrients, gases, and wastes within body",
        organsInvolved: "heart and blood vessels",
      },
    ]);

    console.log("Cell Magic Methods: \n", Object.keys(Cell.prototype));
    console.log(
      "CellCategory Magic Methods: \n",
      Object.keys(CellCategory.prototype)
    );
    console.log("Organ Magic Methods: \n", Object.keys(Organ.prototype));
    console.log(
      "Organelle Magic Methods: \n",
      Object.keys(Organelle.prototype)
    );
    console.log(
      "OrganSystem Magic Methods: \n",
      Object.keys(OrganSystem.prototype)
    );
  } catch (err) {
    console.error(err);
  }
};

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
