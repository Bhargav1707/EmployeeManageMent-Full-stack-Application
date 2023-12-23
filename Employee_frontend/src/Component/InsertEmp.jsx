import React, { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
const AddEmployeeComponent = () => {
  const [empNo, setEmpNo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setmobile] = useState("");
  const [depno, setdeptno] = useState("");
  //const [errors, setErrors] = useState({});
  
  const navigate = useNavigate();
  const saveEmployee = (event) => {
    event.preventDefault()
    const confirmed = window.confirm("Are you sure you want to submit this data?");
    if(confirmed){
    const formData = {
      empNo,
      firstName,
      lastName,
      email,
      mobile,
      depno
    };
      
     
      if (formData.firstName.trim() === "") {
        alert( "First Name is required");
      }
  
      if (formData.lastName.trim() === "") {
        alert("last name is required");
        return;
      }
  
      if (formData.mobile.length !== 10) {
        alert("Mobile number must be 10 digits");
        return;
      }
      if (formData.depno.trim() === "") {
        alert("department number is required");
        return;
      }
      
  axios.post("http://localhost:5000/api/save",formData).then(()=>{
    navigate('/view-all-employee')
  }
  ).catch(errors=>console.log(errors))
}
  };
  
  
  
  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-canter">Add Employee</h2>
          <div className="card-body">
            <form >
              <div className="form-group md-3">
                <label>Employee Num</label>
                <input
                  type="text"
                  name="empNo"
                  value={empNo}
                  placeholder="Enter your Employee Num"
                  className="form-control"
                  onChange={(event) => setEmpNo(event.target.value)}
                />
              </div>
              <div className="form-group md-3">
                <label>Employee FirstName</label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  placeholder="Enter your first name"
                  className="form-control"
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
              <div className="form-group md-3">
                <label>Employee last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  placeholder="Enter your last name"
                  className="form-control"
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
              <div className="form-group md-3">
                <label>Employee Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  className="form-control"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <label>Employee mobile</label>
                <input
                  type="text"
                  name="phone"
                  value={mobile}
                  placeholder="Enter your phone"
                  className="form-control"
                  onChange={(event) => setmobile(event.target.value)}
                />
              </div>
              <div className="form-group md-3">
                <label>Employee DeptNum</label>
                <input
                  type="text"
                  name="deptNo"
                  value={depno}
                  placeholder="Enter your deptNum"
                  className="form-control"
                  onChange={(event) => setdeptno(event.target.value)}
                />
              </div>
               <button className="btn btn-success"  onClick={(event)=>saveEmployee(event)}>submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddEmployeeComponent;