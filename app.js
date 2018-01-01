'use strict';

let atlasApp = new Vue({
  el: "#atlas-app",
  data: {
    // Defined in data.js
    structures: structures,
  },
  // Defined in viewer.js
  mounted: setupViewer,
  watch: {
    structures: {
      // Also defined in viewer.js
      handler: updateMeshes,
      deep: true,
    },
  },
});
