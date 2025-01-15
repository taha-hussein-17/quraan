import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import
import App from './App';
import './index.css';

// Use the createRoot API for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
