import React, { useEffect, useState } from "react";
//import { useHistoty } from "react-router-dom";
//import axios from 'axios';
import EmployeeService from "../service/EmployeeService";
import { useNavigate, Link, useParams } from "react-router-dom";




const UpdataEmployee = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const[depno,setdepno]=useState("");
  //const history = useHistoty();
  const navigate = useNavigate();

  const { id } = useParams();

  const updateEmployeedata= (event) => {
    event.preventDefault();

    const employee = { firstName, lastName, email, mobile,depno };
    console.log(employee);

    /*axios.put('http://localhost:5000/api/employee',id, employee)*/
    EmployeeService.updateEmployee(id,employee)
      .then((response) => {
        console.log(response.data);
       
        navigate("/view-all-employee");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    EmployeeService.getEmpbyId(id)
    //axios.get('http://localhost:5000/api/employee',id)
      .then((response) => {
        setfirstName(response.data.firstName);
        setlastName(response.data.lastName);
        setemail(response.data.email);
        setmobile(response.data.mobile);
        setdepno(response.data.depno);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-mvghvd-3">
            <h2 className="text-center">Update Employee</h2>

            <div className="card-body">
            <form >
                
              <div className="form-group md-3">
                <label>Employee FirstName</label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  placeholder="Enter your first name"
                  className="form-control"
                  onChange={(event) => setfirstName(event.target.value)}
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
                  onChange={(event) => setlastName(event.target.value)}
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
                  onChange={(event) => setemail(event.target.value)}
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
                <label>Employee Department</label>
                <input
                  type="text"
                  name="firstName"
                  value={depno}
                  placeholder="Enter your first name"
                  className="form-control"
                  onChange={(event) => setdepno(event.target.value)}
                />
              </div>
              

                <button
                  className="btn btn-success"
                  onClick={(event) => updateEmployeedata(event)}>Submit</button>
                <Link
                  to="/view-all-employee"
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}>Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdataEmployee;