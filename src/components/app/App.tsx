// import CubeSpinView from '../three-v1/';
// import ThreeDSceneView from '../load-3d-object/old-index';
import React from "react";
import NavBar from "./nav";
import LoadMesh from "../load-3d-object";

const App = () => {
  return (
    <>
      <NavBar />
      <LoadMesh />
      {/* <CubeSpinView /> */}
      {/* <ThreeDSceneView /> */}
    </>
  );
};

export default App;
