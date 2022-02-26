type modalParamTypes = {
  modalTitle: JSX.Element;
  ModalBody: Function;
  modalFooter: JSX.Element;
};

const Modal = ({ modalTitle, ModalBody, modalFooter }: modalParamTypes) => {
  return (
    <>
      <div
        className={"modal fade"}
        id={"staticBackdrop"}
        data-bs-backdrop={"static"}
        data-bs-keyboard={false}
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="staticBackdropLabel">
                {modalTitle}
              </span>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">{<ModalBody />}</div>
            <div className="modal-footer">{modalFooter}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
