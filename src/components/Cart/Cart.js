import React from 'react';
import ReactDOM from 'react-dom';

export const Cart = (props) => {
    const cartItems = [{id: "c1", name: "Sushi", amount: 2, price: 12.99}]
    .map(el => <li>{el.name}</li>);
    
    return (
        <>
        <div>
            <ul className="cart-items">
           {cartItems}
           </ul>
        </div>
        <div className="total">
            <span>Todal Amount</span>
            <span>36.62</span>
        </div>
        <div className="actions">
          <button className="button--alt">Close</button>  
          <button className="button">Order</button>  
        </div>
        </>
    );
};