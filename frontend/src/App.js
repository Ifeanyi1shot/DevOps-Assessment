import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/api/products')
    //axios.get('http://localhost:5236/api/Products')

      .then(response => setProducts(response.data))
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Could not fetch products from backend.');
      });
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
