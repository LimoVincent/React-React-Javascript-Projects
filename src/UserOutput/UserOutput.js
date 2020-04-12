import React  from "react";
import './UserOutput.css';


const UserOutput =(props) => {
         return(
            <div className = 'OutputStyle' >
            <p>My Name Is [1] :  <strong> {props.userName} </strong>  </p>
            <p>My Name Is [2] </p>
            </div>
         );
}

export default UserOutput;