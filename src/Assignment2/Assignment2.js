import React,  {Component} from 'react'
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
            margin : '2% 3%', //'20px 30px',
            padding : '3px',
            backgroundColor : 'rgb(233, 171, 171)',
            borderRadius : '2px'
        };
        return (
            <div  style = {style}>
                <p><strong>Name conditions: </strong></p>
                <ol type ="1">
                    <li>Atleast 6 characters long.</li>
                    <li>Frist name should starts with upper case.</li>
                    <li>Last name shouldstarts with upper case</li>
                    <li>One Empty Space between the two names</li>
                    <li>Should not be Empty, <i>for example <strong>V</strong>incent <strong>L</strong>imo</i></li>
                    
                </ol>
               {/*value = {this.state.input*/} 
Name <input type ="text" onChange = {this.InputCahngeHandler} placeholder ='FirstName LastName' />

<p>Output Input : <strong>{this.state.input}</strong></p>

<input type="checkbox" id="validate" name="validate" value="Bike"></input>
<label for="validate">Atleast 6 characters long :). <strong>[{this.state.input.length} characters :)] </strong></label> <br></br>

<input type="checkbox" id="validate" name="validate" value="Bike"></input>
<label for="validate">Fristname should starts with uppercas: <strong>[{this.state.input.charAt(0)} characters :)] </strong></label> <br></br>

<input type="checkbox" id="validate" name="validate" value="Bike"></input>
<label for="validate">Lastname should starts with upper case..</label> <br></br>

<input type="checkbox" id="validate" name="validate" value="Bike"></input>
<label for="validate">One Space between.</label> <br></br>

<input type="checkbox" id="validate" name="validate" value="Bike"></input>
        <label for="validate">Not Empty.{

        }</label> <br></br>

                <button><strong>Validate</strong></button> <Validation Input= {this.state.input}/>
                <p><strong>{this.state.input.includes(' ')}</strong></p>

            </div>
        )

    }
}

export default Assignment2
