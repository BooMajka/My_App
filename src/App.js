import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './components/Layout/Header';
import {Meals} from './components/Meals/Meals';
import {CartProvider} from './store/CartProvider';



export const App = () => {

  return (
    
    <CartProvider>
        <Header/>
        <Meals/>
    </CartProvider>
  
  );
};

