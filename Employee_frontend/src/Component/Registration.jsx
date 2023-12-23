import React, { useState } from "react";
import axios from "axios";
//import {  useNavigate } from "react-router-dom";
const Registration = () => {
 const[username,setUsername]=useState('');
 const[email,setEmail]=useState('');
 const[password,setPassword]=useState('');
 const[confirmpassword,setConfirmpassword]=useState('');
  
 // const navigate = useNavigate();
  const savenewuser = (event) => {
    event.preventDefault()
    const confirmed = window.confirm("Are you sure you want to submit this data?");
    if(confirmed){
    const formData = {
      username,
      email,
      password,
      confirmpassword

    };
      
     
      if (formData.username.trim() === "") {
        alert( "First Name is required");
      }

      if (formData.password !== formData.confirmpassword) {
        alert("password and confirm password same");
        return;
      }
      
  axios.post("http://localhost:5000/api/save-signin",formData).then((response)=>{
    console.log(response.data);
    alert('Registration successful!');
  }
  ).catch(errors=>console.log(errors))
}
  };
  
  
  
  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-canter">New Registartion</h2>
          <div className="card-body">
            <form >
              <div className="form-group md-3">
                <label>Enter Username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter your username"
                  className="form-control"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="form-group md-3">
                <label>Enter email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your first name"
                  className="form-control"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group md-3">
                <label>Enter password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your last name"
                  className="form-control"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="form-group md-3">
                <label>Enter confirmpassword</label>
                <input
                  type="text"
                  name="confirmpassword"
                  value={confirmpassword}
                  placeholder="Enter your confirmpassword"
                  className="form-control"
                  onChange={(event) => setConfirmpassword(event.target.value)}
                />
              </div>
               <button className="btn btn-success"  onClick={(event)=>savenewuser(event)}>submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;