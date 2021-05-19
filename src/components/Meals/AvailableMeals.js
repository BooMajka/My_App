import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from "react";
import {db} from "../../firebase";
import {Card} from "../UI/Card";
import {MealItem} from "./MealItem";

export const AvailableMeals = () => {
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
        {food.map(({name, description, price, id}) => <MealItem name={name} description={description} price={price} id={id}/>
      )}
      </ul>
      </Card>
        </section>
    );
};