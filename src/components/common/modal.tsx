import { Modal } from "react-bootstrap";

type modalParamTypes = {
  modalTitle: JSX.Element;
  ModalBody: Function;
  modalFooter: JSX.Element;
};

const customModal = ({
  modalTitle,
  ModalBody,
  modalFooter,
}: modalParamTypes) => {
  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalBody />
        </Modal.Body>
        <Modal.Footer>
          {modalFooter}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default customModal;
