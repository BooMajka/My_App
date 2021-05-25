import React from 'react';
import {useState} from 'react';
import {CartIcon} from './CartIcon';
import {Cart} from './Cart';


export const HeaderCartButton = ({cart}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    

    const result = cart.reduce((prev, curr) => {
       return prev + parseInt(curr.amount)
    },0);
    
    return (
        <>
    <button onClick={()=> setModalOpen(true)} className="button">
        <span className="icon">
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{result}</span>
    </button>
    {isModalOpen && <div className="back-plate" onClose={setModalOpen}/>}
    {isModalOpen && <Cart cart={cart} onClose={setModalOpen}/>}
    </>
    )
}