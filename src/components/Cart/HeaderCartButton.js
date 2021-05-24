import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import {useContext} from 'react';
import {CartIcon} from './CartIcon';
import {Cart} from './Cart';


export const HeaderCartButton = ({cart}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    
    return (
        <>
    <button onClick={()=> setModalOpen(true)} className="button">
        <span className="icon">
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">0</span>
    </button>
    {isModalOpen && <div className="back-plate" onClose={setModalOpen}/>}
    {isModalOpen && <Cart cart={cart} onClose={setModalOpen}/>}
    </>
    )
}