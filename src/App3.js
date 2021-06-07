import './App.css';
import ImageMapper from 'react-image-mapper';

import React, { useState, View, Text } from "react";
import axios from 'axios'
import one  from './one.jpeg'
import logo from './logo.svg';
import human from './human.png';


const NEWAPP = () => {
  
  return (
  
   <div>
     <h1> hey </h1>

   <ImageMapper  imgHeight={551} imgWidth={244} src={human}/>
   {/* <img src = {one} /> */}
   
   </div>
 
   );

};

export default NEWAPP;
