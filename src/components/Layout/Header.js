import React from 'react';
import {HeaderCartButton} from '../Cart/HeaderCartButton';




export const Header = ({cart, removeItem}) => {
    return (
        <>
        <header className="header">
            <h1>Shell Shack</h1>
            <HeaderCartButton removeItem={removeItem} cart={cart}/>
        </header>
        </>
    );
};