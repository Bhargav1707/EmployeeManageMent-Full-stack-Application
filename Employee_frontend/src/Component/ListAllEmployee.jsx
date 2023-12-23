import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListAllEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    axios
      .get("http://localhost:5000/api/employees")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.log(error));
  };

  const deleteRecord = (employeeId) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this employee?");
    if (shouldDelete) {
    EmployeeService.deleteEmploye(employeeId)
      .then((response) => {
        console.log(response.data);
        navigate("/view-all-employee");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
  return (
    <div>
      <div className="container">
        <h1 className="text-center" style={{ color: "green", fontWeight: "bold" }}>
          Employee Details
        </h1>
        <table className="table table-bordered table-striped" style={{ color: "black", backgroundColor: "lightblue", fontFamily: "sans-serif" }}>
          <thead className="text-center">
            <tr>
              <th>Employee Id</th>
              <th>Employee Number</th>
              <th>Employee Firstname</th>
              <th>Employee lastName</th>
              <th>Employee Email</th>
              <th>Department Name</th>
              <th>Phone number</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.empNo}</td>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.email}</td>
                <td>{emp.depno}</td>
                <td>{emp.mobile}</td>
                <td>
                  <Link className="btn btn-success" style={{ marginRight: "10px" }} to={`/update-employee/${emp.id}`}>
                    Update
                  </Link>
                  </td>
                  <td>
                  <Link className="btn btn-danger" onClick={() => deleteRecord(emp.id)}>
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListAllEmployee;
