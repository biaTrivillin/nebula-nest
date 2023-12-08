import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 120;

scene.background = new THREE.TextureLoader().load( "../assets/background.jpg" );

const sunGeometry = new THREE.SphereGeometry( 65 );
const sunTexture = new THREE.TextureLoader().load('../public/earth-texture.jpg')
const sunMaterial = new THREE.MeshBasicMaterial( { map: sunTexture } );
const sun = new THREE.Mesh( sunGeometry, sunMaterial );
sun.position.x = -110
sun.position.y = -5
sun.position.z = -45

const solarSystem = new THREE.Group();

solarSystem.add(sun)
scene.add( solarSystem );



function animate() {
	requestAnimationFrame( animate );


	sun.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

