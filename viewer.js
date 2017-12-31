'use strict';

let scene, camera, renderer;

setupViewer();
loadMeshes();

window.addEventListener('resize', adaptViewerToWindow);

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
	document.body.appendChild(renderer.domElement);
	let controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.addEventListener('change', render);
	adaptViewerToWindow();
}

function adaptViewerToWindow() {
	let w = window.innerWidth;
	let h = window.innerHeight;
	camera.aspect = w / h;	
	camera.updateProjectionMatrix();
	renderer.setSize(w, h);
	render();
}

function render() {
	renderer.render(scene, camera);
}

function loadMeshes() {
	let loader = new THREE.STLLoader();
	let fileNames = getFileNames();
	fileNames.forEach((fileName) => {
		loader.load(fileName, onLoad);
	});
}

function onLoad(geometry) {
	let material = new THREE.MeshNormalMaterial();
	let mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);
	render();
}
