import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import TableGLB from "./table.glb";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(TableGLB);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_id5.geometry}
        material={materials["70"]}
        position={[0, 0.23, 0.39]}
        scale={0}
      />
    </group>
  );
}

useGLTF.preload(TableGLB);
