import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {OrderForm} from './OrderForm';



export const Cart = ({onClose}) => {
    
    const [isFormOpen, setFormOpen] = useState(false);
    
    const cartItems = [
        {id: "c1", name: "Sushi", amount: 2, price: 12.99},
        {id: "c1", name: "Oysters", amount: 1, price: 10.22},
        {id: "c1", name: "Fish", amount: 3, price: 14.99}]
    .map(el => <li>{el.name} ....Qty: {el.amount}...............${el.price}</li>);
    
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
            <span>Total Amount: </span>
            <span> $36.62</span>
        </div>
        <div className="actions">
          <button onClick={() => onClose(false)} className="button--alt">Close</button>  
          <button onClick={() => setFormOpen(true)} className="button">Order</button>  
          
          {isFormOpen && <OrderForm />}
        </div>
    </div>
</section>
        </>
    );
};