import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './components/Layout/Header';
import {Meals} from './components/Meals/Meals';



export const App = () => {

  return (
    <>
        <Header/>
          <main>
            <Meals/>
          </main>
    </>
  
  );
};

