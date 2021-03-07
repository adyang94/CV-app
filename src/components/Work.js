import React, {useState} from 'react';
import AddBtn from './AddBtn';
import RenderForm from './renderForm'

function SaveWorkExp (props) {
  // This component handles what happens after clicking the save btn on the input form.
  // May add rendering responsibilities here too.
  if (!props.openForm) return null;

  return (
    <div className = "WE-input-form-ctn">
      <div></div>
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
    </div>
  )
};


function WorkSection () {
  let [workExp, handleChange] = useState([]);
  let [openForm, toggleOpenForm] = useState(false);

  

  return (
    <div className = 'workExperience'>
      <h3>Work Experience:</h3>
      <div className = 'formsCtn-WE'></div>
      <SaveWorkExp />
      <AddBtn
        title = 'Work Experience' 
        id = 'addWorkExperienceBtn'
        addFormMethod = {addWorkExperience}
        //when button is clicked, above function will be called.
      />
    </div>
  )
}

export default WorkSection;

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