import { useState } from "react";
import canvasMapping from "./canvas-mapping";
import BootstrapCard from "../common/card";
import Modal from "../common/modal";

import "./index.css";

const Scene = () => {
  const [state, setState] = useState({});

  const emptyDataFunction = () => <></>;
  const emptyFunction = () => {};
  const onCardClicked = (canvasId) =>
    setState({ ...state, showModal: true, canvasId });

  console.warn("Canavas ", canvasMapping[state?.canvasId]);

  return (
    <>
      {/* <Modal
        modalTitle={
          <span>Left click drag to rotate and right click drag to pan</span>
        }
        modalBody={canvasMapping[state?.canvasId] || emptyDataFunction}
        modalFooter={<span>Controls here</span>}
      /> */}
      <div className="common-render">
        {Object.keys(canvasMapping).map((canvas) => {
          const RenderCanvas = canvasMapping[canvas];
          return (
            <BootstrapCard
              key={canvas}
              onClick={() => onCardClicked(canvas)}
              childComponent={<RenderCanvas />}
            />
          );
        })}
      </div>
    </>
  );
};

export default Scene;
