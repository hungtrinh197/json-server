import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {CartProvider} from 'react-use-cart'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);


