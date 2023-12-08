import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 120;

scene.background = new THREE.TextureLoader().load( "../assets/background.jpg" );

const mercuryGeometry = new THREE.SphereGeometry( 65 );
const mercuryTexture = new THREE.TextureLoader().load('../public/mercury-texture.jpg')
const mercuryMaterial = new THREE.MeshBasicMaterial( { map: mercuryTexture } );
const mercury = new THREE.Mesh( mercuryGeometry, mercuryMaterial );
mercury.position.x = -110
mercury.position.y = -5
mercury.position.z = -45

scene.add( mercury );

function animate() {
	requestAnimationFrame( animate );
	mercury.rotation.y += 0.005;

	renderer.render( scene, camera );
}

animate();

