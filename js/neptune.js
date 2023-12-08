import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 120;

scene.background = new THREE.TextureLoader().load( "../assets/background.jpg" );

const neptuneGeometry = new THREE.SphereGeometry( 65 );
const neptuneTexture = new THREE.TextureLoader().load('../public/neptune-texture.jpg')
const neptuneMaterial = new THREE.MeshBasicMaterial( { map: neptuneTexture } );
const neptune = new THREE.Mesh( neptuneGeometry, neptuneMaterial );
neptune.position.x = -110
neptune.position.y = -5
neptune.position.z = -45

scene.add( neptune );

function animate() {
	requestAnimationFrame( animate );
	neptune.rotation.y += 0.025;

	renderer.render( scene, camera );
}

animate();

