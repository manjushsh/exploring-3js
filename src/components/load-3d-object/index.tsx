import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // for gLTF 3d object loading

const Main3DSceneView = () => {
    const sceneParentNode = React.createRef() as React.RefObject<HTMLDivElement>;
    useEffect(() => InsideWareHouse3D(sceneParentNode));
    return (
        <div ref={sceneParentNode} className='3d-node'></div>
    );
};

const InsideWareHouse3D = (parentNodeRef: React.RefObject<HTMLDivElement>) => {
    const renderer = new THREE.WebGLRenderer();
    const loader = new GLTFLoader();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 10);
    scene.background = new THREE.Color(0xdddddd);
    loader.load('src/assets/huracan.gltf', function (gltf) {
        // renderer.setSize(window.innerWidth, window.innerHeight);
        // use ref as a mount point of the Three.js scene instead of the document.body
        const canvasNode = parentNodeRef.current!;
        canvasNode?.appendChild(renderer.domElement);
        scene.add(gltf.scene);
        renderer.render(scene, camera);
    }, undefined, function (error) {
        console.error(error);
    });
}

export default Main3DSceneView;