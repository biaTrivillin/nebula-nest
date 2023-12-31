import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 120;

scene.background = new THREE.TextureLoader().load( "../assets/background.jpg" );

const saturnGeometry = new THREE.SphereGeometry( 65 );
const saturnTexture = new THREE.TextureLoader().load('../public/saturn-texture.jpg')
const saturnMaterial = new THREE.MeshBasicMaterial( { map: saturnTexture } );
const saturn = new THREE.Mesh( saturnGeometry, saturnMaterial );
saturn.position.x = -110
saturn.position.y = -5
saturn.position.z = -45


const ringTexture = new THREE.TextureLoader().load('../public/ring-texture.jpg')
const saturnRingGeometry = new THREE.RingGeometry( 65, 80, 32 ); 
const ringMaterial = new THREE.MeshBasicMaterial( { map: ringTexture, side: THREE.DoubleSide } );
const ring = new THREE.Mesh( saturnRingGeometry, ringMaterial );
ring.rotation.x = -20
ring.rotation.y = -4
ring.position.x = -99
ring.position.z = -30


scene.add( saturn, ring );

function animate() {
	requestAnimationFrame( animate );
	saturn.rotation.y += 0.03;

	renderer.render( scene, camera );
}

animate();

