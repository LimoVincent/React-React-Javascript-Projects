import React, { Component } from 'react'
import Validation from './Validation';

 class Assignment2 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              input : 'FirstName LastName'
              
         }
     }

     InputCahngeHandler = (event) => {
            this.setState({input : event.target.value});
    };

    

    render() {
        const style = {
            border: '3px solid blue',
            margin : '20px 30px',
            padding : '3px',
            backgroundColor : 'rgb(233, 171, 171)',
            borderRadius : '2px'
        };
        return (
            <div  style = {style}>
                <p><strong>Name conditions: </strong></p>
                <ol type ="1">
                    <li>Atleast 10 characters long</li>
                    <li>Frist name starts with upper case</li>
                    <li>last name starts with upper case</li>
                    <li>One Empty Space between the names</li>
                    <li>Should not be Empty</li>
                </ol>
               {/*value = {this.state.input*/} 
Name <input type ="text" onChange = {this.InputCahngeHandler} placeholder ='FirstName LastName' />

<p>Output Input : <strong>{this.state.input}</strong></p>


<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
<label for="vehicle1"> I have a bike</label>

<input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>
<label for="vehicle2"> I have a car</label>

<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"></input>
<label for="vehicle3"> I have a boat</label>

                <button><strong>Validate</strong></button>
                <Validation InputLength = {this.state.input.length}/>    
            </div>
        )
    }
}

export default Assignment2
