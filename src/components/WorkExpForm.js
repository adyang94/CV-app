import React, { useState } from "react";

const initialWorkExp = {
  company: '',
  position: '',
  responsibilities: '',
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
    console.log(newWorkExp);
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
          value = {newWorkExp.responsbilities}
          onChange = {updateWE}
          id = 'WE-responsibilities-input'
          placeholder = 'Add Responsibilities'
        /><br/>
        <input
          name = 'startDate'
          type = 'date'
          value = {newWorkExp.startDate}
          onChange = {updateWE}
          id = 'WE-start-input'
          placeholder = 'Add Start Date'
        /><br/>
        <input
          name = 'endDate'
          type = 'date'
          value = {newWorkExp.endDate}
          onChange = {updateWE}
          id = 'WE-end-date'
          placeholder = 'Add End Date'
        /><br/>
        <button type="submit" onClick = {() => {
          props.handleForm();
          props.saveWorkExp(newWorkExp);
        }}>Submit</button>
      </form>
      
    </div>
  )
};

export default WorkExpForm;