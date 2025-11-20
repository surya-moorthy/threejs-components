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

new OrbitControls(camera,renderer.domElement);

// setting a scene;

const scene = new THREE.Scene(); 

const loader = new THREE.TextureLoader();
const boxgeo = new THREE.IcosahedronGeometry(1,20);
const mat = new THREE.MeshStandardMaterial({
   map: loader.load("./textures/00_earthmap1k.jpg")
})

const light = new THREE.HemisphereLight(0xffffff);
scene.add(light);

const mesh = new THREE.Mesh(boxgeo,mat);
scene.add(mesh);


function animate(t = 1) {
    requestAnimationFrame(animate);
    mesh.rotation.y = t * 0.0001;
    renderer.render(scene,camera);
}

animate();
renderer.render(scene,camera);
