const BootstrapCard = ({ key, onClick, threeDModel, textContent }: any) => {
  return (
    <div
      key={key}
      onClick={onClick}
      className="card"
      style={{ width: "18rem" }}
    >
      {threeDModel}
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default BootstrapCard;
