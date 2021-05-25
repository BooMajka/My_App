import React, {useState} from 'react';
import {Header} from "../Layout/Header";
import {Meals} from "../Meals/Meals";
import {db} from "../../firebase";

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

    const removeItem = oneCart => {
        console.log(oneCart);
        const result = cart.filter(element => {
            console.log(element);
            return element.id !== oneCart.id
        })
        setCart(result);
}
    
    return (
        <>
        <Header cart={cart} removeItem={removeItem}/>
        <Meals getCart={getCart}/>
        </>
    )
}