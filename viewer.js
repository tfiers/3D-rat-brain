'use strict';

let container, scene, camera, renderer;

let meshes = {};

function setupViewer() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera();
  renderer = new THREE.WebGLRenderer({antialias: true});
  camera.fov = 50;
  camera.position.set(-24.1, 18.2, -31.9);
  camera.rotation.set(-2.6, -0.54, -2.43);
  camera.up = new THREE.Vector3(0, 0, 1);
  camera.lookAt(new THREE.Vector3(0, -2, 2));
  camera.zoom = 1.8;
  renderer.setClearColor(0xffffff, 1);
  container = document.getElementById('viewer');
  container.appendChild(renderer.domElement);
  window.addEventListener('resize', resizeViewer);
  let controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', render);
  resizeViewer();
  updateMeshes();
}

function resizeViewer() {
  let w = container.offsetWidth;
  let h = container.offsetHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  render();
}

function render() {
  renderer.render(scene, camera);
}

function getMesh(structure) {
  return meshes[structure.ID];
}

function updateMeshes() {
  // `ontology_parsed` is defined in data.js
  ontology_parsed.forEach((group) => {
    group.structures.forEach((structure) => {
        let mesh = getMesh(structure);
        if (mesh) {
          mesh.visible = structure.visible;
        }
        else if (structure.visible && !structure.loading) {
          loadMesh(structure);
        }
      });
  })
  render();
}

function loadMesh(structure) {
  let loader = new THREE.STLLoader();
  let onLoad = (geometry) => {
    addMesh(structure, geometry);
  }
  structure.loading = true;
  loader.load(structure.filename, onLoad);
}

function addMesh(structure, geometry) {
  let material = new THREE.MeshNormalMaterial();
  let mesh = new THREE.Mesh(geometry, material);
  // We do not store the mesh in the structure object,
  // as Vue would then crash trying to see if this
  // object has changed.
  meshes[structure.ID] = mesh;
  scene.add(mesh);
  render();
  structure.loading = false;
}
