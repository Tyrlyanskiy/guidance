interface CardProps {
  renderHeader: () => React.ReactNode;
  renderBody: () => React.ReactNode;
}

//LSP - Liskov Substitution Principle

const Card: React.FC<CardProps> = ({ renderBody, renderHeader }) => (
  <div className="Card">
    <h3>{renderHeader()}</h3>
    <h3>{renderBody()}</h3>
  </div>
);

export default Card;
