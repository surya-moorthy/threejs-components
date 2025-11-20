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

const boxgeo = new THREE.BoxGeometry(1,1,1);
const mat = new THREE.MeshBasicMaterial({
  color: 0xffffff
})

const mesh = new THREE.Mesh(boxgeo,mat);
scene.add(mesh);


function animate(t = 1) {
    requestAnimationFrame(animate);
    mesh.rotation.y = t * 0.0001;
    mesh.rotation.x = t * 0.0001
    renderer.render(scene,camera);
    controls.update();
}

animate();
renderer.render(scene,camera);
