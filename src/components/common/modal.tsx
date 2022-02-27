import { Modal } from "react-bootstrap";

type modalParamTypes = {
  modalClasses?: string[];
  modalTitle?: JSX.Element;
  ModalBody?: any;
  modalFooter?: JSX.Element;
  showModal: boolean;
  handleClose: Function;
  fullscreen?: any | boolean | string;
};

const customModal = ({
  modalClasses = ["modal"],
  modalTitle,
  ModalBody,
  modalFooter,
  showModal,
  handleClose,
  fullscreen = false,
}: modalParamTypes) => {
  return (
    <>
      <Modal
        size="lg"
        fullscreen={fullscreen}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={() => handleClose()}
        className={`${modalClasses}`}
      >
        <Modal.Header closeButton>
          {modalTitle ? (
            <Modal.Title id="contained-modal-title-vcenter" as={"section"}>
              {modalTitle}
            </Modal.Title>
          ) : (
            ""
          )}
        </Modal.Header>
        {ModalBody ? (
          <Modal.Body>
            <ModalBody />
          </Modal.Body>
        ) : (
          ""
        )}
        {modalFooter ? <Modal.Footer>{modalFooter}</Modal.Footer> : ""}
      </Modal>
    </>
  );
};

export default customModal;
