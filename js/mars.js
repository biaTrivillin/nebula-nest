import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 120;

scene.background = new THREE.TextureLoader().load( "../assets/background.jpg" );

const marsGeometry = new THREE.SphereGeometry( 65 );
const marsTexture = new THREE.TextureLoader().load('../public/mars-texture.jpg')
const marsMaterial = new THREE.MeshBasicMaterial( { map: marsTexture } );
const mars = new THREE.Mesh( marsGeometry, marsMaterial );
mars.position.x = -110
mars.position.y = -5
mars.position.z = -45

scene.add( mars );

function animate() {
	requestAnimationFrame( animate );
	mars.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

