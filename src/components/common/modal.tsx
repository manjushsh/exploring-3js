import { Modal } from "react-bootstrap";

type modalParamTypes = {
  modalTitle: JSX.Element;
  ModalBody: any;
  modalFooter: JSX.Element;
  showModal: boolean;
  handleClose: Function;
  fullscreen?: any | boolean | string;
};

const customModal = ({
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
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalBody />
        </Modal.Body>
        <Modal.Footer>{modalFooter}</Modal.Footer>
      </Modal>
    </>
  );
};

export default customModal;
