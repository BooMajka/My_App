import React from 'react';
import ReactDOM from 'react-dom';
import {MealItemForm} from './MealItemForm';
import {CartStore} from '../Cart/CartStore';

export const MealItem = ({getCart, name, description, price, id}) => {
  const priceNew = `$${price.toFixed(2)}`;
    
    return (
        <>
        <li key={id} className="meal">
            <div>
            <h3>{name}</h3>
            <div className="description">{description}</div>
            <div className="price">{priceNew}</div>
            </div>  
            <div>
            <MealItemForm getCart={getCart} name={name} description={description} price={price} id={id} />
            </div>
        </li>
        </>
    );
};