document.addEventListener('DOMContentLoaded', () => {
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / (0.9 * window.innerHeight), 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
    
const background = document.getElementById('background');
renderer.setSize(window.innerWidth, 0.9 * window.innerHeight);
background.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x999999, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 1.5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, (0.9 * window.innerHeight));
    camera.aspect = window.innerWidth / (0.9 * window.innerHeight);
    camera.updateProjectionMatrix();
});
});