import React from 'react';
import AddBtn from './AddBtn';
import RenderForm from './renderForm'

function WorkSection () {
  
  const addWorkExperience = () => {
    console.log('hi');
    RenderForm();
    return(
      <div>
        <h6>Add Work Experience:</h6>
      </div>
    )
  }

  return (
    <div className = 'workExperience'>
      <div className = 'formsCtn-WE'></div>

      <RenderForm/>
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

    // //select HTML element
    // const formsCtn = document.querySelector('.formsCtn-WE');

    // const formCtn = document.createElement('div');
    //   formCtn.classList.add('formCtn');
    
    // const companyInputLabel = document.createElement
    //   const companyInput = document.createElement('input');
    //   companyInput.classList.add('companyInput');

    // const positionInput = document.createElement('input');
    //   positionInput.classList.add('positionInput');

    // const responsibilitiesInput = document.createElement('input');
    //   responsibilitiesInput.classList.add('responsibilitiesInput');

    // const startDateInput = document.createElement('input');
    //   startDateInput.classList.add('startDateInput');

    // const endDateInput = document.createElement('input');
    //   endDateInput.classList.add('endDateInput');


    // //append to forms container.
    // formCtn.appendChild(companyInput);
    // formCtn.appendChild(positionInput);
    // formCtn.appendChild(responsibilitiesInput);
    // formCtn.appendChild(startDateInput);
    // formCtn.appendChild(endDateInput);
    // formsCtn.appendChild(formCtn);