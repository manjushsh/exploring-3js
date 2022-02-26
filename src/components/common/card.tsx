const BootstrapCard = ({ key, onClick, childComponent }: any) => {
  return (
    <div
      key={key}
      onClick={onClick}
      className="card"
      style={{ width: "18rem" }}
    >
      {childComponent}
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
