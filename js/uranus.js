import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 120;

scene.background = new THREE.TextureLoader().load( "../assets/background.jpg" );

const uranusGeometry = new THREE.SphereGeometry( 65 );
const uranusTexture = new THREE.TextureLoader().load('../public/uranus-texture.jpg')
const uranusMaterial = new THREE.MeshBasicMaterial( { map: uranusTexture } );
const uranus = new THREE.Mesh( uranusGeometry, uranusMaterial );
uranus.position.x = -110
uranus.position.y = -5
uranus.position.z = -45

scene.add( uranus );

function animate() {
	requestAnimationFrame( animate );
	uranus.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

