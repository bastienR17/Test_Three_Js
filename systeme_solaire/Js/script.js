//crée un systeme solaire en three.js

//crée la scene
const scene = new THREE.Scene();

//crée la camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//crée le renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//donner au fond de la scene une image
const loader = new THREE.TextureLoader();
const texture = loader.load('./map/etoile.jpg');
scene.background = texture;




//crée le soleil et le definir comme le point central de la scène

const sun = new THREE.Mesh(
    new THREE.SphereGeometry(1.2, 32, 32),
    //donner la texture au soleil
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./map/planette/soleil/sunmap.jpg')})



);
sun.position.set(0, 0, 0);

//crée les 5 premiere planète

const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 32, 32),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./map/planette/mercur/mercury.jpg')})

);
mercury.position.set(1.5, 0, 0);

const venus = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 32, 32),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./map/planette/venus/venus_surface.jpg')})

);
venus.position.set(2.5, 0, 0);

const earth = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 32, 32),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./map/planette/terre/Terre_daymap.jpg')})



);

earth.position.set(3.3, 0, 0);
//crée la lune
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.05, 32, 32),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./map/planette/moon/moon.jpg')})

);


const mars = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 32, 32),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./map/planette/mars/mars.jpg')})

);



mars.position.set(4, 0, 0);

const jupiter = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./map/planette/jupiter/jupiter.jpg')})

);
jupiter.position.set(5, 0, 0);


const saturn = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./map/planette/saturn/saturn.jpg')})

);
saturn.position.set(7.5, 0, 0);

//faire l'anneaux de saturne
const ring = new THREE.Mesh(
    new THREE.RingGeometry(1, 0.7, 30),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./map/planette/saturn/saturn_ring_alpha.png')})

);




//ajouter les planète a la scene
scene.add(sun);
scene.add(mercury);
scene.add(venus);
scene.add(earth);
scene.add(moon);
scene.add(mars);
scene.add(jupiter);
scene.add(saturn);
scene.add(ring);



//position de la caméra
camera.position.z = 15;
//changer la camera d'axe
camera.up = new THREE.Vector3(1, 1, 1);
camera.lookAt(new THREE.Vector3(0, 0 , 0));




















