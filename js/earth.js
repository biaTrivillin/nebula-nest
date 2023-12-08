import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 120;

scene.background = new THREE.TextureLoader().load( "../assets/background.jpg" );

const earthGeometry = new THREE.SphereGeometry( 65 );
const earthTexture = new THREE.TextureLoader().load('../public/earth-texture.jpg')
const earthMaterial = new THREE.MeshBasicMaterial( { map: earthTexture } );
const earth = new THREE.Mesh( earthGeometry, earthMaterial );
earth.position.x = -110
earth.position.y = -5
earth.position.z = -45

scene.add( earth );

function animate() {
	requestAnimationFrame( animate );
	earth.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

