import React, { useState } from "react";

const initialWorkExp = {
  company: '',
  position: '',
  responsbilities: '',
  startDate: '',
  endDate: ''
};


function WorkExpForm (props) {
  // This component handles what happens after clicking the save btn on the input form.
  // May add rendering responsibilities here too.
  const [newWorkExp, setWE] = useState(initialWorkExp);

  if (!props.openForm) {
    console.log(`openForm: ${props.openForm}`);
    return null;
  };


  
  
  function updateWE (e) {
    console.log("setting WE");
    const {name, value} = e.target;
    setWE({...newWorkExp, [name]: value})
  }

  return (
    <div className = "WE-input-form-ctn">
      <form>
        <input
          name = 'company'
          type = 'text'
          value = {newWorkExp.company}
          onChange = {updateWE}
          id = 'WE-company-input'
          placeholder = 'Add Company'
        /><br/>
        <input
          name = 'position'
          type = 'text'
          value = {newWorkExp.position}
          onChange = {updateWE}
          id = 'WE-position-input'
          placeholder = 'Add Position/Title'
        /><br/>
        <input
          name = 'responsibilities'
          type = 'text'
          // value = 
          // onChange = 
          id = 'WE-responsibilities-input'
          placeholder = 'Add Responsibilities'
        /><br/>
        <input
          name = 'startDate'
          type = 'date'
          // value = 
          // onChange = 
          id = 'WE-start-input'
          placeholder = 'Add Start Date'
        /><br/>
        <input
          name = 'endDate'
          type = 'date'
          // value = 
          // onChange = 
          id = 'WE-end-date'
          placeholder = 'Add End Date'
        /><br/>
        <button type="submit" onClick = {() => {
          props.handleForm();
          props.saveWorkExp();
        }}>Submit</button>
      </form>
      
    </div>
  )
};

export default WorkExpForm;