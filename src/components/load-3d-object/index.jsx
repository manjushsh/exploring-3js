import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import FlowerModel from "./flowers";
// import FreeCarModel from "./freecar";

import "./index.css";

const Scene = () => {
  return (
    <div className="common-render">
      <Canvas>
        <Suspense fallback={null}>
          {/* <FreeCarModel /> */}
          <FlowerModel />
          <OrbitControls />
          <Environment preset="lobby" background />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
