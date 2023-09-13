'use strict';

let atlasApp = new Vue({
  el: "#atlas-app",
  data: {
    structures: structures,   // Defined in data.js
  },
  mounted: setupViewer,       // Defined in viewer.js
  watch: {
    structures: {

      handler: updateMeshes,  // Also defined in viewer.js
      deep: true,
    },
  },
});
