/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "react-three-fiber";
const HeadSet = `${process.env.REACT_APP_S3_BASE_URL}/headset0001.gltf`;

type GLTFResult = GLTF & {
  nodes: {
    headset0001: THREE.Mesh;
  };
  materials: Record<string, never>;
};

const HeadphoneCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <OrbitControls enableZoom={true} enablePan={true} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
};

export default HeadphoneCanvas;

const Model = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>();
  const { nodes } = useGLTF(HeadSet) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          name="headset0001"
          castShadow
          receiveShadow
          geometry={nodes.headset0001.geometry}
          material={nodes.headset0001.material}
          userData={{ name: "headset0001" }}
        />
      </group>
    </group>
  );
};

useGLTF.preload(HeadSet);
