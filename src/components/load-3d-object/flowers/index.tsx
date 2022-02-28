import { useRef, Suspense } from "react";
import * as THREE from "three";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "@react-three/fiber";
const FLOWERS = `${process.env.REACT_APP_S3_BASE_URL}/flowers.gltf`;

type GLTFResult = GLTF & {
  nodes: {
    PLANTS_ON_TABLE_10K_1: THREE.Mesh;
    PLANTS_ON_TABLE_10K_2: THREE.Mesh;
    PLANTS_ON_TABLE_10K_3: THREE.Mesh;
    PLANTS_ON_TABLE_10K_4: THREE.Mesh;
  };
  materials: {
    desk_top: THREE.MeshStandardMaterial;
    caps: THREE.MeshStandardMaterial;
    legs: THREE.MeshStandardMaterial;
    _auto_: THREE.MeshStandardMaterial;
  };
};

const FlowerCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <OrbitControls enableZoom={true} enablePan={true} />
        <Environment preset="warehouse" background />
      </Suspense>
    </Canvas>
  );
};

export default FlowerCanvas;

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
const Model = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FLOWERS) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="PLANTS_ON_TABLE_10K"
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "PLANTS_ON_TABLE_10K" }}
        >
          <mesh
            name="PLANTS_ON_TABLE_10K_1"
            castShadow
            receiveShadow
            geometry={nodes.PLANTS_ON_TABLE_10K_1.geometry}
            material={materials.desk_top}
          />
          <mesh
            name="PLANTS_ON_TABLE_10K_2"
            castShadow
            receiveShadow
            geometry={nodes.PLANTS_ON_TABLE_10K_2.geometry}
            material={materials.caps}
          />
          <mesh
            name="PLANTS_ON_TABLE_10K_3"
            castShadow
            receiveShadow
            geometry={nodes.PLANTS_ON_TABLE_10K_3.geometry}
            material={materials.legs}
          />
          <mesh
            name="PLANTS_ON_TABLE_10K_4"
            castShadow
            receiveShadow
            geometry={nodes.PLANTS_ON_TABLE_10K_4.geometry}
            material={materials._auto_}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload(FLOWERS);
