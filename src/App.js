
import React from 'react';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class  App extends React.Component {

  state = {
    StateUserName : 'Vincent Kipruto Limo'
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

      <h1> <strong>React basics Exercises</strong> </h1>
      
      <UserInput changed = {this.ChangeInputHandler} currentName = {this.state.StateUserName}  />
     
      <UserOutput userName = {this.state.StateUserName}/>

      <UserOutput  userName = 'Kipruto'/>
      
      <UserOutput userName = 'Limo'/>
    </div>

   );
}
};

export default App;



  /* 
currentName = {this.state.StateUserName}
*/
