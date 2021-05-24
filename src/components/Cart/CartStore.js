import React, {useState} from 'react';


export const CartStore = () => {
    const getCart = ({id, name, price, amount}) => {
        console.log(id, name, price, amount );
    }
    
    return (
        <>
        <Header/>
        <Meals getCart={getCart}/>
        </>
    )
}