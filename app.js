'use strict';

let atlasApp = new Vue({
  el: "#atlas-app",
  data: {
    ontology: ontology_parsed, // Defined in data.js
  },
  mounted: setupViewer,       // Defined in viewer.js
  watch: {
    ontology: {
      handler: updateMeshes,  // Also defined in viewer.js
      deep: true,
    },
  },
});
