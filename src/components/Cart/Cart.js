import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {OrderForm} from './OrderForm';



export const Cart = ({onClose}) => {
    
    const [isFormOpen, setFormOpen] = useState(false);
    
    const cartItems = [
        {id: "c1", name: "Sushi", amount: 2, price: 12.99},
        {id: "c1", name: "Oysters", amount: 1, price: 10.22},
        {id: "c1", name: "Fish", amount: 3, price: 14.99}
    ]
    .map(el => <li className="cart-li">{el.name}  (Qty: {el.amount}) ${el.price}
    <svg xmlns="http://www.w3.org/2000/svg" opacity="0.5" width="20" height="20" viewBox="0 0 24 24"><path d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"/></svg></li>);
    
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