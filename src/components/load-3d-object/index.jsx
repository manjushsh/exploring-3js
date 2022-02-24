import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import TableModel from "./table";

const Scene = () => {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <TableModel />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
