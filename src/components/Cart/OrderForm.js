import React, {useState} from "react";



export const OrderForm = () => {
    const [error, setError] = useState([]);
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
            
            const errors = [];
            
            if(inputs.user.length < 2 ) {
            errors.push("Name is too short");
            } 
            
            if(inputs.surname.length < 2 ) {
            errors.push("Surname is too short"); 
            }
            
            if(inputs.address.length < 2 ) {
            errors.push("Address is too short"); 
            }
            
            setError(errors);
        };
        
    
    return (
        <form className="order-form" onSubmit={handleSubmit}>
            <input value={inputs.user} name="name" placeholder="name" onChange={handleInputChange} />
            <input value={inputs.surname} name="surname" placeholder="surname" onChange={handleInputChange} />
            <input value={inputs.address} name="address" placeholder="address" onChange={handleInputChange} />
            <input value={inputs.phone} name="phone" placeholder="phone number" onChange={handleInputChange} />
            <button className="button">Submit</button>
             {error.map(el => <p className="error">{el}</p>)} 
        </form>
    )
}