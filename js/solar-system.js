import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 240;

scene.background = new THREE.TextureLoader().load( "../assets/background.jpg" );

const mercuryGeometry = new THREE.SphereGeometry( 10 );
const mercuryTexture = new THREE.TextureLoader().load('../public/mercury-texture.jpg')
const mercuryMaterial = new THREE.MeshBasicMaterial( { map: mercuryTexture } );
const mercury = new THREE.Mesh( mercuryGeometry, mercuryMaterial );
mercury.position.x = - 340  

const venusGeometry = new THREE.SphereGeometry( 27 );
const venusTexture = new THREE.TextureLoader().load('../public/venus-texture.jpg')
const venusMaterial = new THREE.MeshBasicMaterial( { map: venusTexture } );
const venus = new THREE.Mesh( venusGeometry, venusMaterial );
venus.position.x = -270

const earthGeometry = new THREE.SphereGeometry( 30 );
const earthTexture = new THREE.TextureLoader().load('../public/earth-texture.jpg')
const earthMaterial = new THREE.MeshBasicMaterial( { map: earthTexture } );
const earth = new THREE.Mesh( earthGeometry, earthMaterial );
earth.position.x = -180

const marsGeometry = new THREE.SphereGeometry( 27 );
const marsTexture = new THREE.TextureLoader().load('../public/mars-texture.jpg')
const marsMaterial = new THREE.MeshBasicMaterial( { map: marsTexture } );
const mars = new THREE.Mesh( marsGeometry, marsMaterial );
mars.position.x = -100

const jupterGeometry = new THREE.SphereGeometry( 55 );
const jupterTexture = new THREE.TextureLoader().load('../public/jupter-texture.jpg')
const jupterMaterial = new THREE.MeshBasicMaterial( { map: jupterTexture } );
const jupter = new THREE.Mesh( jupterGeometry, jupterMaterial );
jupter.position.x = -2

const saturnGeometry = new THREE.SphereGeometry( 35 );
const saturnTexture = new THREE.TextureLoader().load('../public/saturn-texture.jpg')
const saturnMaterial = new THREE.MeshBasicMaterial( { map: saturnTexture } );
const saturn = new THREE.Mesh( saturnGeometry, saturnMaterial );
saturn.position.x = 105

const uranusGeometry = new THREE.SphereGeometry( 25 );
const uranusTexture = new THREE.TextureLoader().load('../public/uranus-texture.jpg')
const uranusMaterial = new THREE.MeshBasicMaterial( { map: uranusTexture } );
const uranus = new THREE.Mesh( uranusGeometry, uranusMaterial );
uranus.position.x = 185

const neptuneGeometry = new THREE.SphereGeometry( 40 );
const neptuneTexture = new THREE.TextureLoader().load('../public/neptune-texture.jpg')
const neptuneMaterial = new THREE.MeshBasicMaterial( { map: neptuneTexture } );
const neptune = new THREE.Mesh( neptuneGeometry, neptuneMaterial );
neptune.position.x = 290

const solarSystem = new THREE.Group();

solarSystem.add(earth, mercury, jupter, uranus, saturn, neptune, venus, mars)

scene.add( solarSystem );


function animate() {
	requestAnimationFrame( animate );
	mercury.rotation.y += 0.005;
    venus.rotation.y += 0.002;
    earth.rotation.y += 0.01;
    mars.rotation.y += 0.009;
    jupter.rotation.y += 0.04;
    saturn.rotation.y += 0.03;
    uranus.rotation.y += 0.02;
    neptune.rotation.y += 0.025;

	renderer.render( scene, camera );
}

animate();

