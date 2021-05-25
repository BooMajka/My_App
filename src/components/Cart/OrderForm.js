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
    const handleInputName = (e) => {
        const value = e.target.value;
        setInputs({user: value});
    };
    const handleInputSurname = (e) => {
        const value = e.target.value;
        setInputs(prev => ({
            ...prev,
            surname: value}));
    };
    const handleInputAddres = (e) => {
        const value = e.target.value;
        setInputs(prev => ({
            ...prev,
            address: value}));
    };
    const handleInputPhone = (e) => {
        const value = e.target.value;
        setInputs(prev => ({
            ...prev,
            phone: value}));
    };
    const handleSubmit = e => {
        e.preventDefault();
        // const errors = [];
        // if (inputs.user.length < 2) {
        //     errors.push("Name is too short");
        // }
        // if (inputs.surname.length < 2) {
        //     errors.push("Surname is too short");
        // }
        // if (inputs.address.length < 2) {
        //     errors.push("Address is too short");
        // }
        // setError(errors);
        if (db) {
            db.collection("Ordered_food").add({
                user: inputs.user,
                surname: inputs.surname,
                address: inputs.address,
                phone: inputs.phone,
                ...cart
            });
        };
    };
    console.log(cart);
    console.log(inputs);
    return (
        <form className="order-form" onSubmit={handleSubmit}>
            <input onChange={handleInputName} value={inputs.user} name="name" placeholder="name" />
            <input value={inputs.surname} name="surname" placeholder="surname" onChange={handleInputSurname}/>
            <input value={inputs.address} name="address" placeholder="address" onChange={handleInputAddres}/>
            <input value={inputs.phone} name="phone" placeholder="phone number" onChange={handleInputPhone}/>
            <button className="button">Submit</button>
            {error.map(el => <p className="error">{el}</p>)}
        </form>
    );
};