import React from "react";
import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from "axios";


const Home = () =>{
    
const{userid}=useParams()
console.log(userid);

const[userdata,setUserdata]=useState();


const navigate=useNavigate()






  useEffect(  () => {
     axios.get(`http://localhost:4455/user/getdatabyid/${userid}`)
     .then(async (res)=>{
        const data=  await res.data ;
        console.log(data);
        setUserdata(data);
     }
  
     )
     .catch( err => console.log(err) )
}
,[])


console.log(userdata);




    return(
      
      <>
     <h1>hii</h1>
      
      </>
    )
}


export default Home;