import React from 'react';
import {HeaderCartButton} from '../Cart/HeaderCartButton';




export const Header = ({cart}) => {
    return (
        <>
        <header className="header">
            <h1>Shell Shack</h1>
            <HeaderCartButton cart={cart}/>
        </header>
        </>
    );
};