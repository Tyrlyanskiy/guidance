interface CardProps {
  renderHeader: () => React.ReactNode;
  renderBody: () => React.ReactNode;
}

//LSP - Liskov Substitution Principle

const CommonCard: React.FC<CardProps> = ({ renderBody, renderHeader }) => (
  <div className=" bg-white/90 rounded mt-4 shadow-md">
    <h3 className="text-xl">{renderHeader()}</h3>
    <div>{renderBody()}</div>
  </div>
);

export default CommonCard;
