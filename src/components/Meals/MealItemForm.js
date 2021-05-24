import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Input} from '../UI/Input';

export const MealItemForm = ({getCart, name, description, price, id}) => {
  const [inputAmount, setInputAmount] = useState([1]);
  
  const changeImputAmount = (e) => {
    const {value} = e.target;
    setInputAmount(value);
  };
    
    const submitHandler = event => {
        event.preventDefault();
        
        getCart(id, name, price, amount.value);
    };
    
    return (
      <form className="form" onSumbit={submitHandler}>
        <Input
        onChange={changeImputAmount}
          label='Amount'
          input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          }}
        />
        <button>+ Add</button>
      </form>
    );
  };