import React from "react";
import "./CardGroup.css";

const CardGroup = ({ cards }) => {
  if (!Array.isArray(cards) || cards.length === 0) {
    return null; // or you can render a message or fallback content
  }

  return (
    <>
      <div className="card-group">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardGroup;
