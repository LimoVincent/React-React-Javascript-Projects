
import React from 'react';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';
import Assignment2 from './Assignment2/Assignment2.js';


class  App extends React.Component {

  state = {
    StateUserName : 'Vincent  Limo'
  }

  ChangeInputHandler = (event) => {
    this.setState({StateUserName : event.target.value})
  }

 render() 
 {
   return(
    <div>
      <header className = 'App-header'>
      <h1><strong>Input Output App</strong></h1>
      </header>

      <h1> <strong>React Exercises</strong> </h1>
      <hr></hr><hr></hr><h2> <strong>1. Assignment 1 - Base Syntax</strong> </h2>

  
      <UserInput changed = {this.ChangeInputHandler} currentName = {this.state.StateUserName}  />
     
      <UserOutput userName = {this.state.StateUserName}/>

      <UserOutput  userName = 'Kipruto'/>
      
      <UserOutput userName = 'Limo'/>


      <hr></hr><hr></hr> <h2> <strong>2. Assignment 2 - Validations, Lists and Conditionals</strong> </h2>

<Assignment2/>
    </div>

   );
}
};

export default App;



  /* 
currentName = {this.state.StateUserName}
*/