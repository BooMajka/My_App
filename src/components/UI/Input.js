import React from 'react';
import ReactDOM from 'react-dom';

export const Input = (props) => {
  return (
    <div className="input">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};
