// components/Card.jsx

const Card = ({ title, body }) => {
  return (
    <div className="custom-card">
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default Card;
