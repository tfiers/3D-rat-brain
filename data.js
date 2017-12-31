'use strict';

let meshes = [
  // // label  name                                                             R     G     B    alpha
  // [      1,  "Descending corticofugal pathways",                             255,   52,   39,     1],
  // [      2,  "Substantia nigra",                                             255,  186,    0,     1],
  // [      3,  "Subthalamic nucleus",                                            0,    0,  255,     1],
  // [      4,  "Molecular layer of the cerebellum",                            255,  255,    0,     1],
  // [      5,  "Granule cell level of the cerebellum",                           0,  255,  255,     1],
  // [      6,  "Alveus of the hippocampus",                                    255,    0,  255,     1],
  // [      7,  "Inferior cerebellar peduncle",                                  52,  255,   13,     1],
  // [     10,  "Cingulate cortex, area 2",                                      29,  104,  235,     1],
  // [     30,  "Striatum",                                                     129,   79,  255,     1],
  // [     31,  "Globus pallidus",                                              255,  145,  186,     1],
  // [     32,  "Entopeduncular nucleus",                                        26,  231,  255,     1],
  // [     33,  "Ventricular system",                                             2,   44,  255,     1],
  [     34,  "Medial lemniscus",                                             212,  255,    0,     1],
  // [     35,  "Facial nerve",                                                   0,  176,   63,     1],
  // [     36,  "Anterior commissure, anterior part",                           124,  252,    0,     1],
  // [     37,  "Anterior commissure, posterior part",                          255,  186,    0,     1],
  // [     38,  "Ventral hippocampal commissure",                               174,    0,  232,     1],
  // [     39,  "Thalamus",                                                       0,  100,    0,     1],
  // [     40,  "Septal region",                                                255,    8,    0,     1],
  // [     41,  "Optic nerve",                                                   48,  218,    0,     1],
  // [     42,  "Optic tract and optic chiasm",                                  38,  126,  255,     1],
  // [     43,  "Pineal gland",                                                 218,  170,   62,     1],
  // [     44,  "Inner ear",                                                      0,  165,   21,     1],
  // [     45,  "Spinal cord",                                                  134,  255,   90,  0.68],
  // [     46,  "Commissure of the superior colliculus",                         33,  230,  255,     1],
  // [     47,  "Brainstem",                                                    153,   83,  255,     1],
  // [     48,  "Hypothalamic region",                                          226,  120,  161,     1],
  // [     49,  "Inferior colliculus",                                          238,   47,   44,     1],
  // [     50,  "Superficial gray layer of the superior colliculus",             86,    0,  221,     1],
  // [     51,  "Periaqueductal gray",                                            7,  255,   89,     1],
  // [     52,  "Fornix",                                                        21,  192,  255,     1],
  // [     53,  "Mammillothalamic tract",                                       238,  186,    0,     1],
  // [     54,  "Commissural stria terminalis",                                 173,  255,   47,     1],
  // [     55,  "Deeper layers of the superior colliculus",                     225,  151,   15,     1],
  // [     56,  "Periventricular gray",                                         235,   87,  255,     1],
  // [     57,  "Genu of the facial nerve",                                     250,  244,  247,     1],
  // [     58,  "Pontine nuclei",                                                 0,  215,   11,     1],
  // [     59,  "Fimbria of the hippocampus",                                     0,  255,   29,     1],
  // [     60,  "Fasciculus retroflexus",                                       244,   67,   69,     1],
  // [     61,  "Stria medullaris of the thalamus",                             255,  252,    0,     1],
  // [     62,  "Stria terminalis",                                             238,  117,   51,     1],
  // [     63,  "Posterior commissure",                                         255,    0,  218,     1],
  // [     64,  "Glomerular layer of the accessory olfactory bulb",              15,  109,  230,     1],
  // [     65,  "Glomerular layer of the olfactory bulb",                       255,  227,    0,     1],
  // [     66,  "Olfactory bulb",                                               255,  135,    0,     1],
  // [     67,  "Corpus callosum and associated subcortical white matter",      255,  110,    0,     1],
  // [     68,  "Brachium of the superior colliculus",                          188,   32,  173,     1],
  // [     69,  "Commissure of the inferior colliculus",                        147,  255,   39,     1],
  // [     70,  "Central canal",                                                 39,  244,  253,     1],
  // [     71,  "Interpeduncular nucleus",                                       63,  192,  255,     1],
  // [     72,  "Ascending fibers of the facial nerve",                         179,   28,   53,     1],
  // [     73,  "Anterior commissure",                                          255,   79,  206,     1],
  // [     74,  "Inferior olive",                                                 0,  246,   14,     1],
  // [     75,  "Spinal trigeminal nuclus",                                      91,  241,  255,     1],
  // [     76,  "Spinal trigeminal tract",                                      250,  128,  114,     1],
  // [     77,  "Frontal associiation cortex",                                  206,  211,    7,     1],
  // [     78,  "Middle cerebellar peduncle",                                   134,  204,   76,     1],
  // [     79,  "Transverse fibers of the pons",                                128,  170,  255,     1],
  // [     80,  "Habenular commissure",                                          69,  235,  202,     1],
  // [     81,  "Nucleus of the stria medullaris",                              222,    7,  237,     1],
  // [     82,  "Basal forebrain region",                                       225,  240,   13,     1],
  // [     83,  "Supraoptic decussation",                                       250,  170,   64,     1],
  // [     84,  "Medial lemniscus decussation",                                  65,  150,  255,     1],
  // [     85,  "Pyramidal decussation",                                        114,    9,  212,     1],
  // [     92,  "Neocortex",                                                      3,  193,   45,     1],
  // [     93,  "Bed nucleus of the stria terminalis",                            0,    8,  182,     1],
  // [     94,  "Pretectal region",                                             255,   87,   30,     1],
  // [     95,  "CA3",                                                          165,  131,  107,     1],
  // [     96,  "Dentate gyrus",                                                 91,   45,   10,     1],
  // [     97,  "CA2",                                                          255,  255,    0,     1],
  // [     98,  "CA1",                                                          217,  104,   13,     1],
  // [     99,  "Fasciola cinereum",                                            255,   82,   82,     1],
  // [    100,  "Subiculum",                                                    255,  192,    0,     1],
  // [    108,  "Postrhinal cortex",                                             40,  112,  130,     1],
  // [    109,  "Presubiculum",                                                  80,  123,  175,     1],
  // [    110,  "Parasubiculum",                                                 23,   54,   96,     1],
  // [    112,  "Perirhinal area 35",                                           205,   51,  255,     1],
  // [    113,  "Perirhinal area 36",                                           112,   48,  160,     1],
  // [    114,  "Entorhinal cortex",                                             12,   92,    8,     1],
  // [    115,  "Lateral entorhinal cortex",                                    221,  166,   36,     1],
]

function toFileName(entry) {
  let label = entry[0];
  let padded = String(label).padStart(5, "0");
  let fileName = "data/meshes/label_"+padded+".stl";
  return fileName;
}

function getFileNames() {
  return meshes.map(toFileName);
}
