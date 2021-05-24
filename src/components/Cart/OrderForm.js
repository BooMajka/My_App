import React, {useState} from "react";
import ReactDOM from 'react-dom';


export const OrderForm = () => {
    const [inputs, setInputs] = useState({
        user: "",
        surname: "",
        address: "",
        phone: "",
    });
    // const [error, setError] = useState();
    
    const handleInputChange = (e) => {
        const {value} = e.target;
        setInputs(value);
        };
        
        const handleSubmit = e => {
            e.preventDefault();
            
            if(inputs.name.length < 2 || inputs.surname.length < 2 || inputs.address.length < 2 ) {
            return <p>Text is too short</p>
            } 
            return <p>Your order has been submitted</p>
        }
    
    return (
        <form className="order-form" onSubmit={handleSubmit}>
            <input value={inputs.user} name="name" placeholder="name" onChange={handleInputChange} />
            <input value={inputs.surname} name="surname" placeholder="surname" onChange={handleInputChange} />
            <input value={inputs.address} name="address" placeholder="address" onChange={handleInputChange} />
            <input value={inputs.phone} name="phone" placeholder="phone number" onChange={handleInputChange} />
            <button className="button">Submit</button>
        </form>
    )
}