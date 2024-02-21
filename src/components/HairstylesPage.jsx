import React, { useState, useEffect } from 'react';
import HairstyleCard from './HairstyleCard';

function Hairstyles() {
  const [hairstyles, setHairstyles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/hairstyles')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to get hairstyles');
        }
        return response.json();
      })
      .then(data => {
        setHairstyles(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching hairstyles:', error)
        setLoading(false)
      });
  }, []);

  return (
    <div>
      <h2>Hairstyles</h2>
      <ul>
        {hairstyles.map((hairstyle, index) => (
          <li key={index}>
            <h3>{hairstyle.name}</h3>
            <p>{hairstyle.description}</p>
            <img src={hairstyle.imageUrl} alt={hairstyle.name} />
            <p>{hairstyle.category}</p>
            <p>{hairstyle.price}</p>
            <p>{hairstyle.reviews}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hairstyles;