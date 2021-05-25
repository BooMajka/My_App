import React, {useState} from 'react';


export const MealItemForm = ({getCart, name, description, price, id}) => {
    const [amount, setInputAmount] = useState('');
    
    const submitHandler = (event) => {
        event.preventDefault();
    }
    
    return (
        <form className="form" onSubmit={submitHandler}>

            <div className="input">
                <label htmlFor="amount">Amount</label>
                <input onChange={e => setInputAmount(e.target.value)} id="amount" type="number" min="1" max="5" step="1" defaultValue="1" value={amount} />
            </div>
            <button onClick={() => getCart(id, name, price, amount)}>+ Add</button>
        </form>
    );
};