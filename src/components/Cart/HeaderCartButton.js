import React from 'react';
import ReactDOM from 'react-dom';
import {CartIcon} from './CartIcon';


export const HeaderCartButton = (props) => {
  
    return <button className="button">
        <span className="icon">
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">3</span>
    </button>
};