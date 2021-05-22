import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from "react";
import {CartIcon} from './CartIcon';
import {Cart} from './Cart';


export const HeaderCartButton = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);
  
    return (
        <>
    <button onClick={()=> setModalOpen(true)} className="button">
        <span className="icon">
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">3</span>
    </button>
    {isModalOpen && <div className="back-plate" onClose={setModalOpen}/>}
    {isModalOpen && <Cart onClose={setModalOpen}/>}
    </>
    )
};