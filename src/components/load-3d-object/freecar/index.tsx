import { useRef, Suspense } from "react";
import * as THREE from "three";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "@react-three/fiber";
import FREECAR from "./freecar.gltf";

type GLTFResult = GLTF & {
  nodes: {
    car_body: THREE.Mesh;
    door_l: THREE.Mesh;
    win_door_l001: THREE.Mesh;
    door_r: THREE.Mesh;
    win_door_r001: THREE.Mesh;
    free_number: THREE.Mesh;
    interior: THREE.Mesh;
    wheel_bl: THREE.Mesh;
    wheel_br: THREE.Mesh;
    wheel_fl: THREE.Mesh;
    wheel_fr: THREE.Mesh;
    windows: THREE.Mesh;
  };
  materials: {
    MAIN: THREE.MeshStandardMaterial;
    WINDOW: THREE.MeshPhysicalMaterial;
  };
};

const FreeCarCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <OrbitControls enableZoom={true} enablePan={true} />
        <Environment preset="city" background />
      </Suspense>
    </Canvas>
  );
};

export default FreeCarCanvas;

const Model = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FREECAR) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="car_body"
          castShadow
          receiveShadow
          geometry={nodes.car_body.geometry}
          material={nodes.car_body.material}
          userData={{ name: "car body" }}
        >
          <mesh
            name="door_l"
            castShadow
            receiveShadow
            geometry={nodes.door_l.geometry}
            material={nodes.door_l.material}
            position={[0.91399, 0.683452, 0.637519]}
            userData={{ name: "door l" }}
          >
            <mesh
              name="win_door_l001"
              castShadow
              receiveShadow
              geometry={nodes.win_door_l001.geometry}
              material={nodes.win_door_l001.material}
              position={[-0.154762, 0.696329, -0.734913]}
              userData={{ name: "win door l.001" }}
            />
          </mesh>
          <mesh
            name="door_r"
            castShadow
            receiveShadow
            geometry={nodes.door_r.geometry}
            material={nodes.door_r.material}
            position={[-0.91399, 0.683452, 0.637519]}
            userData={{ name: "door r" }}
          >
            <mesh
              name="win_door_r001"
              castShadow
              receiveShadow
              geometry={nodes.win_door_r001.geometry}
              material={nodes.win_door_r001.material}
              position={[0.154762, 0.696329, -0.734913]}
              userData={{ name: "win door r.001" }}
            />
          </mesh>
          <mesh
            name="free_number"
            castShadow
            receiveShadow
            geometry={nodes.free_number.geometry}
            material={nodes.free_number.material}
            position={[0, 0.793315, -1.768327]}
            userData={{ name: "free number" }}
          />
          <mesh
            name="interior"
            castShadow
            receiveShadow
            geometry={nodes.interior.geometry}
            material={nodes.interior.material}
            position={[0.941368, 0.600132, -0.074447]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.444777, 0.39817, 0.39817]}
            userData={{ name: "interior" }}
          />
          <mesh
            name="wheel_bl"
            castShadow
            receiveShadow
            geometry={nodes.wheel_bl.geometry}
            material={nodes.wheel_bl.material}
            position={[0.781709, 0.325247, -1.240854]}
            rotation={[0, 1.570535, 0]}
            scale={0.324878}
            userData={{ name: "wheel bl" }}
          />
          <mesh
            name="wheel_br"
            castShadow
            receiveShadow
            geometry={nodes.wheel_br.geometry}
            material={nodes.wheel_br.material}
            position={[-0.781709, 0.325247, -1.240854]}
            rotation={[0, 1.570535, 0]}
            scale={0.324878}
            userData={{ name: "wheel br" }}
          />
          <mesh
            name="wheel_fl"
            castShadow
            receiveShadow
            geometry={nodes.wheel_fl.geometry}
            material={nodes.wheel_fl.material}
            position={[0.781709, 0.325247, 1.07147]}
            rotation={[0, 1.570535, 0]}
            scale={0.324878}
            userData={{ name: "wheel fl" }}
          />
          <mesh
            name="wheel_fr"
            castShadow
            receiveShadow
            geometry={nodes.wheel_fr.geometry}
            material={nodes.wheel_fr.material}
            position={[-0.781709, 0.325247, 1.07147]}
            rotation={[0, 1.570535, 0]}
            scale={0.324878}
            userData={{ name: "wheel fr" }}
          />
          <mesh
            name="windows"
            castShadow
            receiveShadow
            geometry={nodes.windows.geometry}
            material={nodes.windows.material}
            userData={{ name: "windows" }}
          />
        </mesh>
      </group>
    </group>
  );
};

useGLTF.preload(FREECAR);
