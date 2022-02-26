import { useState } from "react";
import canvasMapping from "./canvas-mapping";
import BootstrapCard from "../common/card";
import Modal from "../common/modal";

import "./index.css";

const Scene = () => {
  const [state, setState] = useState({ canvasId: "", showModal: false });

  const emptyDataFunction = () => <></>;
  const emptyFunction = () => {};
  const handleClose = () => setState({ ...state, showModal: false });
  const onCardClicked = (canvasId: string) =>
    setState({ ...state, showModal: canvasId ? true : false, canvasId });
  const camvasIdInState: string = state?.canvasId;
  return (
    <>
      <Modal
        fullscreen
        modalTitle={
          <span>Left click drag to rotate and right click drag to pan</span>
        }
        ModalBody={
          canvasMapping[camvasIdInState as keyof typeof canvasMapping] ||
          emptyDataFunction
        }
        modalFooter={<span>Controls here</span>}
        showModal={state?.showModal || false}
        handleClose={handleClose}
      />
      <div className="common-render">
        {Object.keys(canvasMapping).map((canvas) => {
          const RenderCanvas =
            canvasMapping[canvas as keyof typeof canvasMapping];
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
