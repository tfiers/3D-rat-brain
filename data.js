'use strict';

//          [   ID,  *, Name of the structure,                                        R,    G,    B,     α],
//                   * = visible at start
const ontology = [
    {
        name: "Neocortex",
        structures: [
            [   92,  0, "Neocortex",                                                  3,  193,   45,     1],
            [   77,  0, "Frontal association cortex",                               206,  211,    7,     1],
        ],
    },
    {
        name: "Corpus callosum and associated subcortical white matter",
        structures: [
            [   67,  0, "Corpus callosum and associated subcortical white matter",  255,  110,    0,     1],
        ]
    },
    {
        name: "Hippocampus",
        structures: [
            [   98,  0, "CA1",                                                      217,  104,   13,     1],
            [   97,  0, "CA2",                                                      255,  255,    0,     1],
            [   95,  0, "CA3",                                                      165,  131,  107,     1],
            [   96,  1, "Dentate gyrus",                                             91,   45,   10,     1],
            [  100,  0, "Subiculum",                                                255,  192,    0,     1],
            [   99,  0, "Fasciola cinereum",                                        255,   82,   82,     1],
            [    6,  0, "Alveus of the hippocampus",                                255,    0,  255,     1],
            [   59,  0, "Fimbria of the hippocampus",                                 0,  255,   29,     1],
            [   38,  0, "Ventral hippocampal commissure",                           174,    0,  232,     1],
        ],
    },
    {
        name: "Entorhinal cortex",
        structures: [
            [  109,  0, "Presubiculum",                                              80,  123,  175,     1],
            [  110,  1, "Parasubiculum",                                             23,   54,   96,     1],
            [  114,  0, "Entorhinal cortex",                                         12,   92,    8,     1],
            [  115,  0, "Lateral entorhinal cortex",                                221,  166,   36,     1],
            [  108,  0, "Postrhinal cortex",                                         40,  112,  130,     1],
            [  112,  0, "Perirhinal area 35",                                       205,   51,  255,     1],
            [  113,  0, "Perirhinal area 36",                                       112,   48,  160,     1],
        ],
    },
    {
        name: "Basal ganglia",
        structures: [
            [   30,  0, "Striatum",                                                 129,   79,  255,     1],
            [   31,  0, "Globus pallidus",                                          255,  145,  186,     1],
            [   32,  0, "Entopeduncular nucleus",                                    26,  231,  255,     1],
            [    2,  1, "Substantia nigra",                                         255,  186,    0,     1],
            [    3,  0, "Subthalamic nucleus",                                        0,    0,  255,     1],
            //           = GPi analogue in rodents
        ],
    },
    {
        name: "Thalamus",
        structures: [
            [   39,  0, "Thalamus",                                                   0,  100,    0,     1],
        ],
    },
    {
        name: "Cerebellum",
        structures: [
            [    4,  0, "Molecular layer of the cerebellum",                        255,  255,    0,     1],
            [    5,  0, "Granule cell level of the cerebellum",                       0,  255,  255,     1],
            [    7,  0, "Inferior cerebellar peduncle",                              52,  255,   13,     1],
            [   78,  0, "Middle cerebellar peduncle",                               134,  204,   76,     1],
        ],
    },
    {
        name: "Olfactory bulb",
        structures: [
            [   66,  0, "Olfactory bulb",                                           255,  135,    0,     1],
            [   65,  0, "Glomerular layer of the olfactory bulb",                   255,  227,    0,     1],
            [   64,  0, "Glomerular layer of the accessory olfactory bulb",          15,  109,  230,     1],
        ],
    },
    {
        name: "Optic nerve/tract",
        structures: [
            [   41,  0, "Optic nerve",                                               48,  218,    0,     1],
            [   42,  0, "Optic tract and optic chiasm",                              38,  126,  255,     1],
        ],
    },
    {
        name: "Superior colliculus",
        structures: [
            [   46,  0, "Commissure of the superior colliculus",                     33,  230,  255,     1],
            [   50,  0, "Superficial gray layer of the superior colliculus",         86,    0,  221,     1],
            [   55,  0, "Deeper layers of the superior colliculus",                 225,  151,   15,     1],
            [   68,  0, "Brachium of the superior colliculus",                      188,   32,  173,     1],


        ],
    },
    {
        name: "Inferior colliculus",
        structures: [
            [   49,  0, "Inferior colliculus",                                      238,   47,   44,     1],
            [   69,  0, "Commissure of the inferior colliculus",                    147,  255,   39,     1],
        ],
    },
    {
        name: "Facial nerve",
        structures: [
            [   35,  0, "Facial nerve",                                               0,  176,   63,     1],
            [   57,  0, "Genu of the facial nerve",                                 250,  244,  247,     1],
            [   72,  0, "Ascending fibers of the facial nerve",                     179,   28,   53,     1],
        ],
    },
    {
        name: "Other",
        structures: [
            [    1,  0, "Descending corticofugal pathways",                         255,   52,   39,     1],

            [   10,  0, "Cingulate cortex, area 2",                                  29,  104,  235,     1],

            [   33,  0, "Ventricular system",                                         2,   44,  255,     1],
            [   34,  0, "Medial lemniscus",                                         212,  255,    0,     1],

            [   36,  0, "Anterior commissure, anterior part",                       124,  252,    0,     1],
            [   37,  0, "Anterior commissure, posterior part",                      255,  186,    0,     1],

            [   40,  0, "Septal region",                                            255,    8,    0,     1],

            [   43,  0, "Pineal gland",                                             218,  170,   62,     1],

            [   44,  0, "Inner ear",                                                  0,  165,   21,     1],

            [   45,  0, "Spinal cord",                                              134,  255,   90,  0.68],

            [   47,  0, "Brainstem",                                                153,   83,  255,     1],
            [   48,  0, "Hypothalamic region",                                      226,  120,  161,     1],

            [   51,  0, "Periaqueductal gray",                                        7,  255,   89,     1],
            [   52,  0, "Fornix",                                                    21,  192,  255,     1],
            [   53,  0, "Mammillothalamic tract",                                   238,  186,    0,     1],
            [   54,  0, "Commissural stria terminalis",                             173,  255,   47,     1],

            [   56,  0, "Periventricular gray",                                     235,   87,  255,     1],

            [   58,  0, "Pontine nuclei",                                             0,  215,   11,     1],
            // The nuclei in the pons (which lies above / in front of medulla)

            [   60,  0, "Fasciculus retroflexus",                                   244,   67,   69,     1],
            [   61,  0, "Stria medullaris of the thalamus",                         255,  252,    0,     1],
            [   62,  0, "Stria terminalis",                                         238,  117,   51,     1],
            [   63,  0, "Posterior commissure",                                     255,    0,  218,     1],

            [   70,  0, "Central canal",                                             39,  244,  253,     1],
            // = CSF canal in spinal cord

            [   71,  0, "Interpeduncular nucleus",                                   63,  192,  255,     1],
            // at base of midbrain tegmentum (floor). Unpaired.

            [   73,  0, "Anterior commissure",                                      255,   79,  206,     1],

            [   74,  0, "Inferior olive",                                             0,  246,   14,     1],
            // ∈ medulla

            [   75,  0, "Spinal trigeminal nuclus",                                  91,  241,  255,     1],
            [   76,  0, "Spinal trigeminal tract",                                  250,  128,  114,     1],

            [   79,  0, "Transverse fibers of the pons",                            128,  170,  255,     1],
            [   80,  0, "Habenular commissure",                                      69,  235,  202,     1],
            [   81,  0, "Nucleus of the stria medullaris",                          222,    7,  237,     1],
            [   82,  0, "Basal forebrain region",                                   225,  240,   13,     1],
            [   83,  0, "Supraoptic decussation",                                   250,  170,   64,     1],
            [   84,  0, "Medial lemniscus decussation",                              65,  150,  255,     1],
            [   85,  0, "Pyramidal decussation",                                    114,    9,  212,     1],
            [   93,  0, "Bed nucleus of the stria terminalis",                        0,    8,  182,     1],
            [   94,  0, "Pretectal region",                                         255,   87,   30,     1],
        ],
    },
]

const parseRow = (row) => ({
    ID: String(row[0]),
    filename: toFilename(row[0]),
    visible: Boolean(row[1]),
    name: row[2],
    color: row.slice(3, 6),
    alpha: row[6],
    loading: false,
  })

const toFilename = (labelNr) => {
    const padded = String(labelNr).padStart(5, "0");
    return "data/meshes/label_"+padded+".stl";
}

const transformGroup = ({name, structures}) => ({
    name,
    visible: false,
    collapsed: true,
    structures: structures.map(parseRow),
    singleton: structures.length == 1,
})

const ontology_parsed = ontology.map(transformGroup)
