import React from "react";
import { Routes,Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home'
import Page from "./Page";



const Routing = () =>{
    
    const name="onkar"
        console.log(name);




    return(
      
      <>
      
      <Routes> 
<Route exact path="/home/:userid"  element={<Home/>}/>
<Route exact path="/about"  element={<About/>}/>
<Route exact path="/contact/:userid"  element={<Contact/>}/>
<Route exact path="/"  element={<Page/>}/>
   </Routes>
      
      </>
    )
}


export default Routing;