import React from 'react';
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