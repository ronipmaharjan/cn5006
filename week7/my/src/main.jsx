
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import Welcome from './myapp.jsx'
import DiscountCalculator from './discount.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Week 7 React Portfolio</h1>
    <DiscountCalculator
      productName="Laptop"
      price={800}
    />
  </React.StrictMode>
);
