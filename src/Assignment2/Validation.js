import React from 'react'

const Validation = (props) => {
    let  sixCharaters  = false;
    let FirstUpperCase =  false;
    let LastUpperCase = false;
    let  OneSpace = false;
    let NotEmpty = false;
    let message = "";
   // let char1 = props.Input.chatAt(0);
   


   return(

    <div>
        {

    props.Input.length < 6 ?
message = "Name length short"  :
sixCharaters = true

}
<p>{message} </p>
<p>Building in progress. Objective is to get the validation showing with 1. Checkboxes 2. Button clicks and 3. Automatic Onchange from input. Stay safe :)</p>











<p>six charaters : {sixCharaters}</p>

    </div>
   );
};
export default Validation;

{/*
constructor(props) {
         super(props)
         this.state = {
            sixCharaters  : false,
            FirstUpperCase : false,
             LastUpperCase :false,
            OneSpace : false,
            NotEmpty : false
         }
     }
     
     
     /*
 <p>Validation : <strong>Validation Message</strong></p>
 {sixCharaters && FirstUpperCase && LastUpperCase && OneSpace && NotEmpty} ? 
 <di>Validation pass Chack all checkbox on button click :)</di> :
 <di>Validation fail Chack all checkbox on button click :(</di> 

 }
*/}
      
 
   
