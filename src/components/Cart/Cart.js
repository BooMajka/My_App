import React, {useState} from 'react';
import {OrderForm} from './OrderForm';

export const Cart = ({onClose, cart, removeItem}) => {
    const [isFormOpen, setFormOpen] = useState(false);
    const totalAmount = cart.reduce((prev, curr) => {
        return prev + (curr.amount * curr.price)
    }, 0);
    console.log(cart);
    return (
        <>
            <section className="wrapper">
                <div className="cart-section">
                    <div>
                        <ul className="cart-items">
                            {
                                cart.map(el => {
                                    return (
                                        <>
                                            <li className="cart-li">{el.name} (Qty: {el.amount})
                                                ${(el.amount * el.price).toFixed(2)}
                                                <svg onClick={() => removeItem(el)}
                                                     xmlns="http://www.w3.org/2000/svg" opacity="0.5" width="20"
                                                     height="20" viewBox="0 0 24 24">
                                                    <path
                                                        d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"/>
                                                </svg>
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="total">
                        <span>Total Amount: </span>
                        <span>{totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="actions">
                        <button onClick={() => onClose(false)} className="button--alt">Close</button>
                        <button onClick={() => setFormOpen(true)} className="button">Order</button>
                        {isFormOpen && <OrderForm cart={cart} />}
                    </div>
                </div>
            </section>
        </>
    );
};