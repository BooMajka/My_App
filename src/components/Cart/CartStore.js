import React, {useState} from 'react';
import {Header} from "../Layout/Header";
import {Meals} from "../Meals/Meals";

export const CartStore = () => {
    
    const [cart, setCart] = useState([]);

    const getCart = (id, name, price, amount) => {
        setCart(prev => [...prev, {
            id: id,
            name: name,
            price: price,
            amount:amount,
        }]);
    }
    const removeItem = (id) => { 
        cart.filter(el => {
        
        return el.id !== id;
    });
    
    // setCart(removeItem);
}
    
    return (
        <>
        <Header cart={cart}/>
        <Meals getCart={getCart}/>
        </>
    )
}