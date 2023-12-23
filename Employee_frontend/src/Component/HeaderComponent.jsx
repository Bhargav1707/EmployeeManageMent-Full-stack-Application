import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
 
  return (
    <div>
      <header>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div>
            <a href='https://amazon.com' className='navbar-brand'>Employee Management Application</a> 
            <Link to="/add-employee" className="btn btn-dark mb-2">Add Employee</Link>
            <Link to="/view-all-employee" className="btn btn-dark mb-2">viewAll Employee</Link>

            </div>
            <div>
            <Link to="/login-employee" className="btn btn-dark mb-2">Login</Link>
            <Link to="/sigin-employee" className="btn btn-dark mb-2">SignIn</Link>
            </div>
            
           
        </nav>
       
      </header>
    </div>
  )
}

export default HeaderComponent;