import { useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
const TableGLB = `${process.env.REACT_APP_S3_BASE_URL}/table.glb`; //"./table.glb";

type GLTFResult = GLTF & {
  nodes: {
    node_id5: THREE.Mesh;
  };
  materials: {
    ["70"]: THREE.MeshStandardMaterial;
  };
};

const TableCanvas = () => {
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

export default TableCanvas;

const Model = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(TableGLB) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="root" userData={{ name: "root" }}>
          <mesh
            name="node_id5"
            castShadow
            receiveShadow
            geometry={nodes.node_id5.geometry}
            material={materials["70"]}
            position={[0, 0.22701885, 0.38641506]}
            scale={0.00096604}
            userData={{ name: "node_id5" }}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload(TableGLB);
