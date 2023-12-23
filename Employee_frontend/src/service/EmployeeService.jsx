import axios from "axios";
const EMPLOYEE_REST_API = 'http://localhost:5000/api/employee';
class EmployeeService{
   getEmpbyId(employeeId){
    return axios.get(EMPLOYEE_REST_API+'/'+employeeId);
   }
   updateEmployee(employeeId,employee){
    return axios.put(EMPLOYEE_REST_API + '/'+employeeId,employee);
   }
   deleteEmploye(employeeId){
      return axios.delete(EMPLOYEE_REST_API+'/'+employeeId)
   }
}
export default  new EmployeeService();