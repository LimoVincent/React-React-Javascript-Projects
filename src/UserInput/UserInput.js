
import React  from "react";


const UserInput = (props) => { 
    
    const style = {
        border: '2px solid blue',
        margin : 'auto',
        padding : '3px'
    };
return(
<input style = {style} type ="text" onChange = {props.changed}  value = {props.currentName}/>);
};

export default UserInput;


 

