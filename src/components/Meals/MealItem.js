import React from 'react';
import ReactDOM from 'react-dom';
import {MealItemForm} from './MealItemForm';

export const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
    
    return (
        <>
        <li key={props.id} className="meal">
            <div>
            <h3>{props.name}</h3>
            <div className="description">{props.description}</div>
            <div className="price">{price}</div>
            </div>  
            <div>
            <MealItemForm id={props.id} />
            </div>
        </li>
        </>
    );
};