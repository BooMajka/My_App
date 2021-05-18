import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from "react";
import {db} from "../../firebase";


export const Meals = () => {
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
          <section>
  
          <ul>
          {food.map(({name, description, price, id}) => <li name={name} description={description} price={price} id={id}></li>
        )}
        </ul>
  
          </section>
      )
    
}