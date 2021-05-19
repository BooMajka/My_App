import React from 'react';
import ReactDOM from 'react-dom';

export const MealItemForm = () => {
    const input = {
        id: "Math.floor(Math.random()*100)",
       type: "number", 
       min: "1",
       max: "5",
       step: "1",
       defaultValue: "1",
    };
    
    return (
        <form className="form">
            <div className="input">
                <label name={input.id}>Amount</label>
                <input name="input" {...input}/>
            </div>
            <button>+ Add</button>
        </form>
    );
};