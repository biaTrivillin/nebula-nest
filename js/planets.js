import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 120;

scene.background = new THREE.TextureLoader().load( "../assets/background.jpg" );

const sunGeometry = new THREE.SphereGeometry( 40 );
const sunTexture = new THREE.TextureLoader().load('../public/earth-texture.jpg')
const sunMaterial = new THREE.MeshBasicMaterial( { map: sunTexture } );
const sun = new THREE.Mesh( sunGeometry, sunMaterial );

const solarSystem = new THREE.Group();

// camera.lookAt( 0, 0, 0 );
// sun.position.y = 2
solarSystem.add(sun)
scene.add( solarSystem );



function animate() {
	requestAnimationFrame( animate );


	sun.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

