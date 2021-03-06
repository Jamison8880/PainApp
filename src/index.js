import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
import App_Qualtrics from './App_Qualtrics';
import App3 from './App3';

import reportWebVitals from './reportWebVitals';

import LandingPage from './Components/LandingPage'


//To the "App" (Original Settings): 
ReactDOM.render(<App_Qualtrics/>,  document.getElementById('root'));


//DIRECT TO LANDING PAGE
//ReactDOM.render(<LandingPage />,  document.getElementById('root'));


//DIRECT TO TESTING PAGE
//ReactDOM.render(<TestingPage />,  document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
