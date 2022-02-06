import * as THREE from 'three';
import gsap from 'gsap';


const scene = new THREE.Scene();

const object = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color : 0xff0000,  wireframe: true});
const cube = new THREE.Mesh(object,material);
cube.position.set(0.5,0.5,0 );
cube.scale.set(0.5,0.5,0.5);
// cube.rotation.set(0.5,0.5,0.5);
cube.rotation.reorder('YXZ')
scene.add(cube);


const axes_helper = new THREE.AxesHelper();
scene.add(axes_helper);


const size = {
    width : 900,
    height : 900
}
const camera = new THREE.PerspectiveCamera(75,size.width / size.height);
// camera.position.set(0.7,1,3);
camera.position.z = 3;   
camera.position.y = 0.5;   
camera.position.x = 0.5;   
scene.add(camera);


const canvas = document.querySelector('#canvas') 
const rendere = new THREE.WebGLRenderer({
    canvas : canvas
});
rendere.setSize(size.width , size.height);


// gsap.to(cube.position , {duration : 2 , delay: 1 , y : 2});
// gsap.to(cube.position , {duration : 2 , delay: 3.1 , y : 0});

let clock = new THREE.Clock();
const tick = () => {

    const time = clock.getElapsedTime();
    // console.log(time);

    cube.rotation.y += Math.sin(0.01) ;
    // camera.position.y = Math.sin(time);
    // camera.position.x = Math.cos(time);
    // camera.lookAt(cube.position);

    rendere.render(scene , camera);
    window.requestAnimationFrame(tick);
}

tick();
