import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import {useContext} from 'react';
import {CartIcon} from './CartIcon';
import {Cart} from './Cart';
import {CartContext} from '../../store/cart-context';



export const HeaderCartButton = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const cartCtx = useContext(CartContext);
    
    const numberOdCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    },0);
    
    return (
        <>
    <button onClick={()=> setModalOpen(true)} className="button">
        <span className="icon">
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{numberOdCartItems}</span>
    </button>
    {isModalOpen && <div className="back-plate" onClose={setModalOpen}/>}
    {isModalOpen && <Cart onClose={setModalOpen}/>}
    </>
    )
};