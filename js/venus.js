import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 120;

scene.background = new THREE.TextureLoader().load( "../assets/background.jpg" );

const venusGeometry = new THREE.SphereGeometry( 65 );
const venusTexture = new THREE.TextureLoader().load('../public/venus-texture.jpg')
const venusMaterial = new THREE.MeshBasicMaterial( { map: venusTexture } );
const venus = new THREE.Mesh( venusGeometry, venusMaterial );
venus.position.x = -110
venus.position.y = -5
venus.position.z = -45

scene.add( venus );

function animate() {
	requestAnimationFrame( animate );
	venus.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

