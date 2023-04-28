import { useEffect,useState } from 'react';
import React from "react";
import { useNavigate } from 'react-router-dom';
import './Style.css'
import axios from "axios";




const Page = () =>{
const[userdata,setUserdata]=useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();

const navigate=useNavigate()

console.log(email);

console.log(password);


  useEffect(  () => {
     axios.get("http://localhost:4455/user")
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

const loginHandler = (e) =>{


  e.preventDefault();

  // axios.get(`http://localhost:4455/user/getdatabyid/${email}/${password}`)
  //    .then(async (res)=>{
  //       const data=  await res.data ;
  //       console.log(data);
  //       setUserdata(data);
  //    }
  
  //    )
  //    .catch( err => console.log(err) )
  
  const login=userdata.filter((row) => {
    if(row.email === email && row.password === password){
      return row
    }


  })
  
  if(login){
    navigate(`/home/${login[0]._id}`)
 }



}
    
  



    return(
      
      <>

     
      <h1>Hii Page</h1>
      <form onSubmit={loginHandler} >
      
      <div className="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
  </div>

  <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="email" placeholder="Enter Username" name="uname" onChange={e => setEmail(e.target.value)} value={email} required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw"  onChange={e => setPassword(e.target.value)} value={password} required />

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>
  </div>

  <div className="container" >
    <button type="button" className="cancelbtn">Cancel</button>
    <span className="psw">Forgot </span>
  </div>
      
  </form>
      </>
    )
}


export default Page;