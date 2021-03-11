import React, {useState} from 'react';
import RenderForm from './renderForm'

function WorkExpForm (props) {
  // This component handles what happens after clicking the save btn on the input form.
  // May add rendering responsibilities here too.
  if (!props.openForm) {
    console.log('hi');
    console.log(`openForm: ${props.openForm}`);
    return null;
  };

  return (
    <div className = "WE-input-form-ctn">
      <form onSubmit = {props.saveWorkExp}>
        <input
          name = 'company'
          type = 'text'
          // value = 
          // onChange = 
          id = 'WE-company-input'
          placeholder = 'Add Company'
        /><br/>
        <input
          name = 'position'
          type = 'text'
          // value = 
          // onChange = 
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
          name = 'start-date'
          type = 'date'
          // value = 
          // onChange = 
          id = 'WE-start-input'
          placeholder = 'Add Start Date'
        /><br/>
        <input
          name = 'end-date'
          type = 'date'
          // value = 
          // onChange = 
          id = 'WE-end-date'
          placeholder = 'Add End Date'
        /><br/>
      </form>
    </div>
  )
};

function AddBtn (props) {
  return (
    <div className = 'addBtnContainer'>
      <button 
        id = {props.id}
        onClick = {props.handleForm}>
        Add {props.title}
      </button>
    </div>
  )
}


function WorkSection () {
  let [workExp, handleChange] = useState([]);
  let [openForm, toggleOpenForm] = useState(false);

  const handleForm = () => {
    toggleOpenForm(!openForm);
  }
  const saveWorkExp = (newWorkExp) => {
    handleChange([...workExp, newWorkExp])
    
    // Current stopping point:  I just added forms toggling options.
    // Next Step:  Test out updating the state for React and console log the work exp array right after setting state.
  }

  return (
    <div className = 'workExperience'>
      <h3>Work Experience:</h3>
      <div className = 'formsCtn-WE'></div>
      <WorkExpForm
        openForm = {openForm}
        saveWorkExp = {saveWorkExp}
      />
      <AddBtn
        title = 'Work Experience' 
        id = 'addWorkExperienceBtn'
        handleForm = {handleForm}
        //when button is clicked, above function will be called.
      />
    </div>
  )
}

export default WorkSection;

// 3-11-21
  // CURRENT STOPPING POINT: JUST SET UP WORK EXPERIENCE ARRAY STATE AND TOGGLE FORM STATE.
  // NEXT STEP:  Bring the 'add' btn out of its own module and change the onClick attribute to have JS change the openForm variable to be true.

  // I AM WORKING ON THE WORK EXPERIENCE SECTION AND SETTING UP STATE FOR THE WORK EXPERIENCE ARRAY AS WELL AS THE TOGGLE OPEN FORMS CONDITION.
  // THIS IS TO OPEN THE INPUT FORM.
  // INPUT FORM WILL ADD INFORMATION TO WORK EXPERIENCE ARRAY

// const addWorkExperience = () => {
  //   console.log('adding work experience');
  //       //select HTML element
  //   const formsCtn = document.querySelector('.formsCtn-WE');

  //   const formCtn = document.createElement('div');
  //     formCtn.classList.add('formCtn');
      
  //   const companyInputCtn = document.createElement('div');
  //     companyInputCtn.innerHTML = 'Company:';
  //     companyInputCtn.classList.add('companyInputCtn');
  //   const companyInput = document.createElement('input');
  //     companyInput.classList.add('companyInput');

  //   const positionInputCtn = document.createElement('div');
  //     positionInputCtn.innerHTML = 'Position Title:';
  //     positionInputCtn.classList.add('positionInputCtn');
  //   const positionInput = document.createElement('input');
  //     positionInput.classList.add('positionInput');

  //   const responsibilitiesInputCtn = document.createElement('div');
  //     responsibilitiesInputCtn.innerHTML = 'Responsibilities:';
  //     responsibilitiesInputCtn.classList.add('responsibilitiesInputCtn');
  //   const responsibilitiesInput = document.createElement('input');
  //     responsibilitiesInput.classList.add('responsibilitiesInput');

  //   const startDateInputCtn = document.createElement('div');
  //     startDateInputCtn.classList.add('startDateInputCtn');
  //     startDateInputCtn.innerHTML = 'Start Date:'
  //   const startDateInput = document.createElement('input');
  //     startDateInput.classList.add('startDateInput');

  //   const endDateInputCtn = document.createElement('div');
  //     endDateInputCtn.classList.add('endDateInputCtn');
  //     endDateInputCtn.innerHTML = 'End Date:'
  //   const endDateInput = document.createElement('input');
  //     endDateInput.classList.add('endDateInput');


  //   //append to forms container.
  //   companyInputCtn.appendChild(companyInput);
  //   formCtn.appendChild(companyInputCtn);

  //   positionInputCtn.appendChild(positionInput);
  //   formCtn.appendChild(positionInputCtn);
    
  //   responsibilitiesInputCtn.appendChild(responsibilitiesInput);
  //   formCtn.appendChild(responsibilitiesInputCtn);

  //   startDateInputCtn.appendChild(startDateInput);
  //   formCtn.appendChild(startDateInputCtn);

  //   endDateInputCtn.appendChild(endDateInput);
  //   formCtn.appendChild(endDateInputCtn);

  //   formsCtn.appendChild(formCtn);
  // }