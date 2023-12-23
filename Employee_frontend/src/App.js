import React from 'react';
import InsertEmp from './Component/InsertEmp';
import ListAllEmployee from './Component/ListAllEmployee';
import HeaderComponent from './Component/HeaderComponent';
//import BackgroundImage from './Component/BackgroundImage'; 
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpdateEmployee from './Component/UpdateEmployee';
import FooterComponent from './Component/FooterComponent';
import Registration from './Component/Registration';
import LoginForm from './Component/LoginForm';

// Define a constant for the background image CSS properties
//const image='https://th.bing.com/th/id/OIP.GWzTJe2xuvJy-nB1Gm8LCAHaEJ?w=299&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7';
const backgroundStyle = {
  backgroundImage: `url(https://th.bing.com/th/id/OIP.GWzTJe2xuvJy-nB1Gm8LCAHaEJ?w=299&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7')`, // Use the imported image as the background
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
};

const App = () => {
  return (
    <div className='App' style={backgroundStyle}> 
      <Router>
        <div className="container">
          <HeaderComponent />
          <Routes>
          <Route path='/view-all-employee' Component={ListAllEmployee}></Route>
          <Route path='/update-employee/:id' Component={UpdateEmployee}></Route>
          <Route path='/add-employee' Component={InsertEmp}></Route>
          <Route path='/login-employee' Component={LoginForm}/>
          <Route path='/sigin-employee' Component={Registration}></Route>
          </Routes>
        </div>
      </Router>
      <FooterComponent/>
    </div>
  );
}

export default App;
