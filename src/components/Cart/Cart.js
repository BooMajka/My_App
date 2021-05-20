import React from 'react';
import ReactDOM from 'react-dom';

export const Cart = ({onClose}) => {
    const cartItems = [
        {id: "c1", name: "Sushi", amount: 2, price: 12.99},
        {id: "c1", name: "Sushi", amount: 2, price: 12.99},
        {id: "c1", name: "Sushi", amount: 2, price: 12.99}]
    .map(el => <li>{el.name} {el.amount} `${el.price}`</li>);
    
    return (
        <>
<section className="wrapper">
    <div className="cart-section">
        <div>
            <ul className="cart-items">
           {cartItems}
           </ul>
        </div>
        <div className="total">
            <span>Todal Amount</span>
            <span>$36.62</span>
        </div>
        <div className="actions">
          <button onClick={()=> onClose(false)} className="button--alt">Close</button>  
          <button className="button">Order</button>  
        </div>
    </div>
</section>
        </>
    );
};