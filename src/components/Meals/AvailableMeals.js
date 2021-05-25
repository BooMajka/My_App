import React from 'react';
import {useState, useEffect} from "react";
import {db} from "../../firebase";
import {Card} from "../UI/Card";
import {MealItem} from "./MealItem";


export const AvailableMeals = ({getCart}) => {
    const[food, setFood] = useState([]);
  
  
  useEffect(() => {
    db.collection("food")
    .get()
    .then((querySnapshot) => {
      const allFood = [];
      
      querySnapshot.forEach((doc) => {
        allFood.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setFood(allFood);
      console.log(allFood);
    
    });
    
  }, []);
  
  
    return (
        <section className="meals">
          <Card>
        <ul>
        {food.map(({name, description, price, id}) => <MealItem  key={id} getCart={getCart} name={name} description={description} price={price} id={id}/>
      )}
      </ul>
      </Card>
        </section>
    );
};