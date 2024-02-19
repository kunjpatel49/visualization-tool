import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import your publishable key
const PUBLISHABLE_KEY = process.env.REACT_APP_PUBLISHABLE_KEY;
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
