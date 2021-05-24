import React from 'react';
import ReactDOM from 'react-dom';
import {MealsSummary} from './MealsSummary';
import {AvailableMeals} from './AvailableMeals';


export const Meals = ({getCart}) => {
 
  return (
    <>
        <MealsSummary/>
        <AvailableMeals getCart={getCart}/>
    </>
);
};