const BootstrapCard = ({
  key,
  onClick,
  threeDModel,
  textContent,
}: cardPropType) => {
  return (
    <div
      key={key}
      onClick={onClick}
      className="card"
      style={{ width: "18rem", backgroundColor:'var(--default-background-color)' }}
    >
      {threeDModel}
      <div className="card-body">{textContent || <p>Hello There!</p>}</div>
    </div>
  );
};

export default BootstrapCard;

// Type Definations
type cardPropType = {
  key: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  threeDModel?: JSX.Element;
  textContent?: JSX.Element | string;
};
