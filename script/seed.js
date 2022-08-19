"use strict";

const {
  db,
  models: { Cell, CellCategory, Organ, Organelle, OrganSystem },
} = require("../server/db");

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Organelle.bulkCreate([
      {
        id: 1,
        organelle: "ribosomes",
        image:
          "https://cdn.kastatic.org/googleusercontent/Hz4CmMjGQXUEmzQ8ORzSm1ya0PhTtDzBGAg1AUbSiu1TMxQFZgZ4HsoEU97aiz5sSo5MAq4CHLOzTAAK0wNg64oQ",
        description: "found on rough endoplasmic reticulum and are responsible for processing and transporting proteins and the synthesis of lipids",
      },
      {
        id: 2,
        organelle: "rough endoplasmic recticulum",
        image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2016/6/Endoplasmic_reticulum_shutterstock_289251920.jpg",
        description: "studded with ribosomes and forms transport vescicles going to Golgi apparatus"
      },
      {
        id: 3,
        organelle: "smooth endoplasmic reticulum",
        image:
          "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2016/6/Endoplasmic_reticulum_shutterstock_289251920.jpg",
        description: "continuous with rough endoplasmic reticulum and is responsible for the synthesis of lipids (e.g. phospholipids and steroids)",
      },
      {
        id: 4,
        organelle: "lysosomes",
        image:
          "https://biologyease.com/wp-content/uploads/2020/07/Structure-of-Lysosomes.jpg",
        description: "vescicles that digest molecules or old cell parts",
      },
      {
        id: 5,
        organelle: "nucleus",
        image:
          "https://www.coolaboo.com/wp-content/uploads/2018/12/Nucleus.jpg",
        description: "command center of the cell that houses chromatin and DNA",
      },
      {
        id: 6,
        organelle: "nucleolus",
        image:
          "https://cdn1.byjus.com/wp-content/uploads/2019/04/Nucleolus.png",
        description: "region where ribosomal RNA (rRNA) is made",
      },
      {
        id: 7,
        organelle: "nuclear envelope",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Diagram_human_cell_nucleus.svg/1200px-Diagram_human_cell_nucleus.svg.png",
        description: "double membrane containing pores that control what goes into and leaves the nucleus",
      },
      {
        id: 8,
        organelle: "golgi apparatus",
        image:
          "https://www.news-medical.net/image.axd?picture=2016%2F6%2FGolgi_body_shutterstock_300259154.jpg",
        description: "a stack of flattened saccules that serve as a transfer station that receives vescicles from the endoplasmic reticulum and modifies molecules within the vescicles and proceeds to repackage for new destination",
      },
      {
        id: 9,
        organelle: "vacuoles",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Biological_cell_vacuole.svg/300px-Biological_cell_vacuole.svg.png",
        description: "membranous sacs that rid a cell of excess water",
      },
      {
        id: 10,
        organelle: "mitochondria",
        image:
          "https://s3-us-west-1.amazonaws.com/contentlab.studiod/8/8/8d7a9e0ce84547eca9033313423de7f1.png",
        description: "powerhouse of teh cell - breaks down carbohydrates to produce ATP and is site of cellular respiration",
      },
      {
        id: 11,
        organelle: "peroxisome",
        image:
          "https://i.ytimg.com/vi/jiAZ12RYclY/maxresdefault.jpg",
        description: "small vescicles that break down toxic materials in the cell and oxidative enzymes",
      },
      {
        id: 12,
        organelle: "centrosome",
        image:
          "https://www.genome.gov/sites/default/files/tg/en/illustration/centriole.jpg",
        description: "serves as the main microtubule organizing center and a regulator of cell-cycle progression",
      },
      {
        id: 13,
        organelle: "centriole",
        image:
          "http://www.guyhowto.com/wp-content/uploads/2020/12/87_4-Centrioles-Functions.jpg",
        description: "organizes microtubules that serve as the cell's skeletal system and determine the locations of the nucleus and other organelles within the cell",
      },
    ]);

    await Cell.bulkCreate([
      {
        id: 1,
        cell: "motor neuron",
        image:
          "https://biologydictionary.net/wp-content/uploads/2020/05/Motor_neuron_diagram.jpg",
        purpose: "takes messages from the spinal cord to the muscles",
        locatedIn: "brain and spinal cord",
        category: "nerve",
      },
      {
        id: 2,
        cell: "adipocyte",
        image:
          "https://biologydictionary.net/wp-content/uploads/2021/05/Fat-cell-structure.jpg",
        purpose: "insulates body and cushions and protects internal organs",
        locatedIn: "under skin, between muscles, and around organs",
        category: "fat",
      },
      {
        id: 3,
        cell: "osteocyte",
        image:
          "https://media.istockphoto.com/vectors/osteocyte-vector-id842653290?k=20&m=842653290&s=612x612&w=0&h=jBf9stCcM-taS0U_wBvmcAJ9-E9HBBOozYpZTgkeSYQ=",
        purpose:
          "responds to mechanical strain and sends signals of bone formation or bone resorption to the bone surface, modifies their microenvironment, and regulates both local and systemic mineral homeostasis",
        locatedIn: "bones",
        category: "bone",
      },
      {
        id: 4,
        cell: 'neutrophil',
        image: 'https://nursing.unboundmedicine.com/nursingcentral/repview?type=539-140&name=N17',
        purpose: 'a type of white blood cell that protects the body from infection',
        locatedIn: ' produced in the bone marrow and released into the bloodstream to travel to wherever they are needed',
        category: 'blood',
      },
      // {
      //   id: 5,
      //   cell: "",
      //   image: "",
      //   purpose: "",
      //   locatedIn: "",
      //   category: "",
      // },
      // {
      //   id: 6,
      //   cell: "",
      //   image: "",
      //   purpose: "",
      //   locatedIn: "",
      //   category: "",
      // },
      // {
      //   id: 7,
      //   cell: "",
      //   image: "",
      //   purpose: "",
      //   locatedIn: "",
      //   category: "",
      // },
      // {
      //   id: ,
      //   cell: "",
      //   image: "",
      //   purpose: "",
      //   locatedIn: "",
      //   category: "",
      // },
    ]);

    await CellCategory.bulkCreate([
      {
        id: 1,
        category: "muscle",
        image: "https://static.sciencelearn.org.nz/images/images/000/002/357/embed/Types-of-muscle-tissue20161111-16640-1c2x74o.jpg?1522307930",
        examples: "smooth, cardiac, skeletal",
      },
      {
        id: 2,
        category: "bone",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXciylsnof97k4Yvqn318JUpoCSnVafVd-tDjBRMtq9tUb-_jNOAPN5-yleKaGm-JhU8&usqp=CAU",
        examples: "osteoblasts, osteoclasts, osteocyte",
      },
      {
        id: 3,
        category: "blood",
        image: "https://www.ncbi.nlm.nih.gov/books/NBK65951/bin/CDR0000503952.jpg",
        examples: "monocytes, lymphocytes, neutrophils",
      },
      {
        id: 4,
        category: "stem",
        image: "https://www.yourgenome.org/wp-content/uploads/2022/04/stem_cell_division_yourgenome.png",
        examples: "epithelial, neural, mesenchymal",
      },
      {
        id: 5,
        category: "skin",
        image: "https://biologydictionary.net/wp-content/uploads/2021/05/Epidermis-layers.jpg",
        examples: "squamous, basal, melanocytes",
      },
      {
        id: 6,
        category: "sex",
        image: "http://tomvangelder.antrovista.com/afbembryoengels/83eicelzaadcel.jpg",
        examples: "sperm and egg cells",
      },
      {
        id: 7,
        category: "nerve",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Blausen_0657_MultipolarNeuron.png/640px-Blausen_0657_MultipolarNeuron.png",
        examples: "sensory neurons, interneurons, and motor neurons",
      },
      {
        id: 8,
        category: "endothelial",
        image: "https://www.lifelinecelltech.com/wp-content/uploads/2020/10/Blood-Vessel-Endo-Cells-blog.jpg",
        examples: "lining of blood vessels",
      },
      {
        id: 9,
        category: "pancreatic",
        image: "http://www.biospace.com/getasset/38678103-78ea-4045-834a-b466d6d1dcf9/",
        examples: "alpha, beta, delta, and c cells",
      },
      {
        id: 10,
        category: "cancer",
        image: "https://cdn.kastatic.org/ka-perseus-images/3ce36e4344afc09823195b45d8ca765191f2e0d0.png",
        examples: "maturable and non-maturable cells",
      },
      {
        id: 11,
        category: "fat",
        image: "https://www.nfpt.com/wp-content/uploads/fat-cell_adipose-tissue.jpg",
        examples: "white, brown, and beige adipose cells",
      },
    ]);

    await Organ.bulkCreate([
      {
        id: 1,
        organ: "liver",
        image:
          "https://images.medicinenet.com/images/image_collection/webmd_anatomy/liver-anatomy.jpg",
        purpose:
          "disposes worn out red blood cells, produces bile, stores glycogen, maintains blood sugar levels, and produces blood proteins",
      },
      {
        id: 2,
        organ: "pancreas",
        image:
          "https://pathology.jhu.edu/build/assets/pancreas/_image600/pancreas-location-illustration.jpg",
        purpose:
          "produces and secretes pancretic juice to digest food in the small intestine and secretes insulin and glucagon to regulate blood glucose levels",
      },
      {
        id: 3,
        organ: "gallbladder",
        image:
          "https://www.drugwatch.com/wp-content/uploads/Gallbladder-Diagram-1-640x0-c-default.jpg",
        purpose: "stores and releases bile to aid in the breakdown of fat",
      },
      {
        id: 4,
        organ: 'kidneys',
        image: 'https://www.news-medical.net/image.axd?picture=2018%2F10%2Fshutterstock_1027902178.jpg',
        purpose: 'regulates blood volume and pressure, regulates pH levels of blood, and excretes nitrogenous wastes'
      },
      {
        id: 5,
        organ: 'lungs',
        image: 'https://img.freepik.com/premium-vector/human-lung-anatomy-diagram-illness-respiratory-cancer-graphics_124894-214.jpg?w=2000',
        purpose: 'brings oxygen into body and removes carbon dioxide'
      },
      // {
      //   id: 6,
      //   organ: "",
      //   image: "",
      //   purpose: "",
      // },
      // {
      //   id: 7,
      //   organ: "",
      //   image: "",
      //   purpose: "",
      // },
      // {
      //   id: 8,
      //   organ: "",
      //   image: "",
      //   purpose: "",
      // },
      // {
      //   id: 9,
      //   organ: "",
      //   image: "",
      //   purpose: "",
      // },
      // {
      //   id: 10,
      //   organ: "",
      //   image: "",
      //   purpose: "",
      // },
      // {
      //   id: ,
      //   organ: "",
      //   image: "",
      //   purpose: "",
      // },
    ]);

    await OrganSystem.bulkCreate([
      {
        id: 1,
        system: "respiratory system",
        image: "https://innerbody.imgix.net/respiratory_system.png",
        purpose:
          "invovled in breathing; helps get oxygen into lungs and moves oxygen through body",
        organsInvolved: "epiglottis, larynx, trachea, nasopharynx, glottis, lungs",
      },
      {
        id: 2,
        system: "lymphatic system",
        image: "https://innerbody.imgix.net/immune_lymphatic_systems.png",
        purpose: "drains waste from tissues and plays a role in immune response",
        organsInvolved: "thymus, appendix, spleen",
      },
      {
        id: 3,
        system: "cardiovascular system",
        image: "https://innerbody.imgix.net/cardiovascular_system.png?w=400&auto=format",
        purpose:
          "thermoregulation, maintains fluid balance within body, and transports nutrients, gases, and wastes within body",
        organsInvolved: "heart and blood vessels",
      },
      {
        id: 4,
        system: 'nervous system',
        image: 'https://innerbody.imgix.net/nervous_system.png',
        purpose: 'coordination and sensory input and output',
        organsInvolved: 'brain, spinal cord, and sensory organs',
      },
      {
        id: 5,
        system: 'digestive system',
        image: 'https://innerbody.imgix.net/digestive_system.png',
        purpose: 'processes food for the body to use for energy and removes wastes',
        organsInvolved: 'stomach, liver, gallbladder, small intestines, and large intestines',
      },
      {
        id: 6,
        system: 'muscular system',
        image: 'https://innerbody.imgix.net/muscular_system.png',
        purpose: 'works in conjunction with the skeletal system to allow for movement',
        organsInvolved: 'contribute towards the composition of several organs',
      },
      {
        id: 7,
        system: 'reproductive system',
        image: 'https://cdn.britannica.com/31/94931-050-41A3B5F4/females-puberty-organs-hormones-males-reproduction-egg.jpg',
        purpose: 'produces sex hormones and gametes',
        organsInvolved: 'uterus, ovaries, testes, epididymus',
      },
      {
        id: 8,
        system: 'integumentary system',
        image: 'https://d16qt3wv6xm098.cloudfront.net/X22HoKrkT7WYL-Equkbo1losQACiVDcY/_.jpg',
        purpose: 'encloses body structures to protect interal organs',
        organsInvolved: 'skin',
      },
      {
        id: 9,
        system: 'skeletal system',
        image: 'https://innerbody.imgix.net/skeletal_system.png',
        purpose: 'provides the body with support and works with the muscluar system to allow for movement',
        organsInvolved: 'bones that make up the skeleton',
      },
      {
        id: 10,
        system: 'urinary system',
        image: 'https://innerbody.imgix.net/urinary_system.png',
        purpose: 'controls water balance in the body and removes wastes from blood to excrete them',
        organsInvolved: 'kidneys, urethra, ureter, urinary bladder, and penis/vagina',
      },
      {
        id: 11,
        system: 'endocrine system',
        image: 'https://innerbody.imgix.net/endocrine_system.png',
        purpose: 'secretes hormones and regulates bodily processes',
        organsInvolved: 'brain, thyroid, pancreas, kidneys, and testes/ovaries',
      },
    ]);

    const ribosomes = await Organelle.findByPk(1);
    const roughER = await Organelle.findByPk(2);
    const smoothER = await Organelle.findByPk(3);
    const lysosomes = await Organelle.findByPk(4);
    const nucleus = await Organelle.findByPk(5);
    const nucleolus = await Organelle.findByPk(6);
    const nuclearEnvelope = await Organelle.findByPk(7);
    const golgiApparatus = await Organelle.findByPk(8);
    const vacuoles = await Organelle.findByPk(9);
    const mitochondria = await Organelle.findByPk(10);
    const peroxisome = await Organelle.findByPk(11);
    const centrosome = await Organelle.findByPk(12);
    const centriole = await Organelle.findByPk(13);

    const motorNeuron = await Cell.findByPk(1);
    const adipocyte = await Cell.findByPk(2);
    const osteocyte = await Cell.findByPk(3);
    const neutrophil = await Cell.findByPk(4);

    const muscle = await CellCategory.findByPk(1);
    const bone = await CellCategory.findByPk(2);
    const blood = await CellCategory.findByPk(3);
    const stem = await CellCategory.findByPk(4);
    const skin = await CellCategory.findByPk(5);
    const sex = await CellCategory.findByPk(6);
    const nerve = await CellCategory.findByPk(7);
    const endothelial = await CellCategory.findByPk(8);
    const pancreatic = await CellCategory.findByPk(9);
    const cancer = await CellCategory.findByPk(10);
    const fat = await CellCategory.findByPk(11);

    const liver = await Organ.findByPk(1);
    const pancreas = await Organ.findByPk(2);
    const gallbladder = await Organ.findByPk(3);
    const kidneys = await Organ.findByPk(4);
    const lungs = await Organ.findByPk(5);

    const respiratory = await OrganSystem.findByPk(1);
    const lymphatic = await OrganSystem.findByPk(2);
    const cardiovascular = await OrganSystem.findByPk(3);
    const nervous = await OrganSystem.findByPk(4);
    const digestive = await OrganSystem.findByPk(5);
    const muscular = await OrganSystem.findByPk(6);
    const reproductive = await OrganSystem.findByPk(7);
    const integumentary = await OrganSystem.findByPk(8);
    const skeletal = await OrganSystem.findByPk(9);
    const urinary = await OrganSystem.findByPk(10);
    const endocrine = await OrganSystem.findByPk(11);

    await motorNeuron.setOrganelles([ribosomes, smoothER, roughER, lysosomes, nucleus, nucleolus, nuclearEnvelope, golgiApparatus, vacuoles, mitochondria, peroxisome, centrosome, centriole]);
    await adipocyte.setOrganelles([ribosomes, smoothER, roughER, lysosomes, nucleus, nucleolus, nuclearEnvelope, golgiApparatus, vacuoles, mitochondria, peroxisome, centrosome, centriole]);
    await osteocyte.setOrganelles([ribosomes, smoothER, roughER, lysosomes, nucleus, nucleolus, nuclearEnvelope, golgiApparatus, vacuoles, mitochondria, peroxisome, centrosome, centriole]);
    await neutrophil.setOrganelles([ribosomes, smoothER, roughER, lysosomes, nucleus, nucleolus, nuclearEnvelope, golgiApparatus, vacuoles, mitochondria, peroxisome, centrosome, centriole]);

    await bone.setCell(osteocyte);
    await blood.setCell(neutrophil);
    await fat.setCell(adipocyte);
    await nerve.setCell(motorNeuron);

    await respiratory.setOrgans([lungs]); // await lungs.setOrganSystem(respiratory);
    await digestive.setOrgans([liver, pancreas, gallbladder]);
    await urinary.setOrgans([kidneys])
    
    // console.log(Object.getPrototypeOf(lungs))
    
    // console.log("Cell Magic Methods: \n", Object.keys(Cell.prototype));
    // console.log(
    //   "CellCategory Magic Methods: \n",
    //   Object.keys(CellCategory.prototype)
    // );
    // console.log("Organ Magic Methods: \n", Object.keys(Organ.prototype));
    // console.log(
    //   "Organelle Magic Methods: \n",
    //   Object.keys(Organelle.prototype)
    // );
    // console.log(
    //   "OrganSystem Magic Methods: \n",
    //   Object.keys(OrganSystem.prototype)
    // );
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
