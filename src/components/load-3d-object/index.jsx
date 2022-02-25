import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
// import FlowerModel from "./flowers";
// import FreeCarModel from "./freecar";
import LightModel from './light';

import "./index.css";

const Scene = () => {
  return (
    <div className="common-render">
      <Canvas>
        <Suspense fallback={null}>
          {/* <FreeCarModel /> */}
          <LightModel />
          <OrbitControls enableZoom={true} enablePan={true} />
          <Environment preset="night" background />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
