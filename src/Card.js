// components/Card.jsx
import { useState } from "react";

const Card = ({ title, body }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`custom-card ${isExpanded ? "expanded" : ""}`} onClick={!isExpanded ? toggleCard : undefined}>
      {isExpanded && (
        <button className="close-button" onClick={toggleCard}>
          &times;
        </button>
      )}
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Card;
