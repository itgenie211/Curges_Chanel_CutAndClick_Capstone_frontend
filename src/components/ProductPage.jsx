import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

function Products() {
  //State to hold product details
  const [products, setProducts] = useState([]);
  // State to handle loading state
  const [loading, setLoading] = useState(true);
  // Extract product ID from URL parameters
  const { productId } = useParams();

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to get product details');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [productId]);

  return (
    <div>
      <h2>Our Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
      <ul>
        {products.map(product  => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default Products;
