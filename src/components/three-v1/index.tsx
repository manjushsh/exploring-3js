import React, { useEffect } from 'react';
import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // for gLTF 3d object loading

const Main3DSceneView = () => {
    const sceneParentNode = React.createRef() as React.RefObject<HTMLDivElement>;
    useEffect(() => CubeAnimation(sceneParentNode));
    return (
        <div ref={sceneParentNode} className='3d-node'></div>
    );
};

const CubeAnimation = (parentNodeRef: React.RefObject<HTMLDivElement>) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    const canvasNode = parentNodeRef.current!;
    canvasNode?.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    const animate = function () {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
        renderer.render(scene, camera);
    };
    animate();
}

// const InsideWareHouse3D = (parentNodeRef: React.RefObject<HTMLDivElement>) => {
//     const renderer = new THREE.WebGLRenderer();
//     const loader = new GLTFLoader();
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.set( 0, 0, 10 );
//     scene.background = new THREE.Color(0xdddddd);
//     loader.load('src/assets/huracan.gltf', function (gltf) {
//         // renderer.setSize(window.innerWidth, window.innerHeight);
//         // use ref as a mount point of the Three.js scene instead of the document.body
//         const canvasNode = parentNodeRef.current!;
//         canvasNode?.appendChild(renderer.domElement);
//         scene.add(gltf.scene);
//         renderer.render(scene, camera);
//     }, undefined, function (error) {
//         console.error(error);
//     });
// }

export default Main3DSceneView;