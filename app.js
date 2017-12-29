'use strict';

let scene, camera, renderer;

setupViewer();
loadMeshes();

window.addEventListener('resize', adaptViewerToWindow);

function setupViewer() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera();
	renderer = new THREE.WebGLRenderer({antialias: true});
	camera.fov = 20;
	camera.position.set(-50, -20, -20);
	camera.up = new THREE.Vector3(0, 0, 1);
	camera.lookAt(new THREE.Vector3(0, -2, 2));
	renderer.setClearColor(0xffffff, 1);
	adaptViewerToWindow();
	document.body.appendChild(renderer.domElement);
	let controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.addEventListener('change', render);
	render();
}

function adaptViewerToWindow() {
	let w = window.innerWidth;
	let h = window.innerHeight;
	camera.aspect = w / h;	
	camera.updateProjectionMatrix();
	renderer.setSize(w, h);
}

function render() {
	renderer.render(scene, camera);
}

function loadMeshes() {
	let loader = new THREE.STLLoader();
	loader.load('data/CA1.stl', onLoad);
	loader.load('data/Cerebellum.stl', onLoad);
	loader.load('data/Olfactory bulb.stl', onLoad);
}

function onLoad(geometry) {
	let material = new THREE.MeshNormalMaterial();
	let mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);
	render();
}

