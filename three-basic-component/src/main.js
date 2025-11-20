import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
// to create a scene object we need a renderer, camera and a scene.

// setting a renderer.

const v = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias : true })
renderer.setSize(v,h);
document.body.appendChild(renderer.domElement);

// setting a camera;

const fov = 75;
const aspect = v/h;
const near = 0.1;
const far = 100;    

const camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
camera.position.z = 2;

// setting a scene;

const scene = new THREE.Scene(); 

// // setting orbitcontrol;

const controls = new OrbitControls(camera,renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

// Mesh = Material + Geometry

const geo = new THREE.IcosahedronGeometry(1.0,2);
const mat = new THREE.MeshStandardMaterial({
    color : 0xffffff,
    flatShading : true
});
const mesh = new THREE.Mesh(geo,mat);
scene.add(mesh);

const hemilight = new THREE.HemisphereLight(0x0099ff,0xaa5500);
scene.add(hemilight);


const wireMat = new THREE.MeshBasicMaterial({
    color : 0xffffff,
    wireframe : true
})

const wireMesh = new THREE.Mesh(geo,wireMat);
wireMesh.scale.setScalar(10);
mesh.add(wireMesh);

const wireMat2 = new THREE.MeshBasicMaterial({
    color : 0xffffff,
    wireframe : true
})

const wireMesh2 = new THREE.Mesh(geo,wireMat2);
wireMesh2.scale.setScalar(1.0001);
mesh.add(wireMesh2);
 

function animate(t = 1) {
    requestAnimationFrame(animate);
    mesh.rotation.y = t * 0.0001
    renderer.render(scene,camera);
    controls.update();
}

animate();
renderer.render(scene,camera);
