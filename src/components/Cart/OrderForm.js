import React, {useState} from "react";
import {db} from "../../firebase";



export const OrderForm = ({cart}) => {
    const [error, setError] = useState([]);
    const [inputs, setInputs] = useState({
        user: "",
        surname: "",
        address: "",
        phone: "",
    });
   
    
    const handleInputChange = (e) => {
        const {value} = e.target;
        setInputs(value);    
        };
        
        const handleSubmit = e => {
            e.preventDefault();
            
            
            // const errors = [];
            
            // if(inputs.user.length < 2 ) {
            // errors.push("Name is too short");
            // } 
            
            // if(inputs.surname.length < 2 ) {
            // errors.push("Surname is too short"); 
            // }
            
            // if(inputs.address.length < 2 ) {
            // errors.push("Address is too short"); 
            // }
            
            // setError(errors);
            
            
            if(db) {
                db.collection("Ordered_food").add({
                id: cart[0].id,
                name: cart[0].name,
                amount: cart[0].amount,
                price: cart[0].price,
            });
            }
        };
        
        console.log(inputs);
    
    return (
        <form className="order-form" onSubmit={handleSubmit}>
            <input value={inputs.user} name="user" placeholder="name" onChange={handleInputChange} />
            <input value={inputs.surname} name="surname" placeholder="surname" onChange={handleInputChange} />
            <input value={inputs.address} name="address" placeholder="address" onChange={handleInputChange} />
            <input value={inputs.phone} name="phone" placeholder="phone number" onChange={handleInputChange} />
            <button className="button">Submit</button>
             {error.map(el => <p className="error">{el}</p>)} 
        </form>
    )
}