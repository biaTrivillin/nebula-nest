import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 120;

scene.background = new THREE.TextureLoader().load( "../assets/background.jpg" );

const jupterGeometry = new THREE.SphereGeometry( 65 );
const jupterTexture = new THREE.TextureLoader().load('../public/jupter-texture.jpg')
const jupterMaterial = new THREE.MeshBasicMaterial( { map: jupterTexture } );
const jupter = new THREE.Mesh( jupterGeometry, jupterMaterial );
jupter.position.x = -110
jupter.position.y = -5
jupter.position.z = -45

scene.add( jupter );

function animate() {
	requestAnimationFrame( animate );
	jupter.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

