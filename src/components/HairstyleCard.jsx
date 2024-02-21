import React from 'react';

function HairstyleCard({ hairstyle }) {
  return (
    <div className="hairstyle-card">
      <img src={hairstyle.imageUrl} alt={hairstyle.name} />
      <div className="hairstyle-details">
        <h3>{hairstyle.name}</h3>
        <p>{hairstyle.description}</p>
        <p>Price: ${hairstyle.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default HairstyleCard;