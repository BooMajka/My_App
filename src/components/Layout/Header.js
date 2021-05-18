import React from 'react';
import ReactDOM from 'react-dom';
import {HeaderCartButton} from '../Cart/HeaderCartButton';




export const Header = () => {
    return (
        <>
        <header className="header">
            <h1>Shell Shack</h1>
            <HeaderCartButton />
        </header>
        </>
    );
};