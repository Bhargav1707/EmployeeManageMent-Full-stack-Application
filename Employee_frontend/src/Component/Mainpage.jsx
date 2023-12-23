import React from 'react';

function App() {
  return (
    <nav class="navbar navbar-default" style={{backgroundColor:'lightblue'}}>
  <div class="container-fluid">
    
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only" style={{color:'green'}}>Employee Management System </span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#" ></a>
    </div>

    
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#" style={{color:'green'}}>addEmployee <span class="sr-only">(current)</span></a></li>
        <li><a href="#" style={{color:'blue'}}>Update Employee</a></li>
        <li><a href="#" style={{color:'violet'}}>viewall Employee</a></li>
        </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search"></input>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Login</a></li>
        <li><a href="#">Sign in</a></li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default App;
