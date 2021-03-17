import React, {useState} from 'react';
import AddBtn from './AddBtn';
import EduExpForm from './EduExpForm';

const initEduExp = {
  school: '',
  major: '',
  gpa: '',
  startDate: '',
  endDate: '',
}

function EducationSection () {

  const [formState, updateFormState] = useState(false);
  
  const toggleForm = () => {
    console.log('toggling edu form');
    updateFormState(!formState);
  };
  
  const [eduExp, updateEduExp] = useState(initEduExp);

  const addNewEduExp = (newEduExp) => {
    console.log('Adding new educational experience to state');
    const placeholder = [...eduExp, newEduExp];
    updateEduExp(placeholder);
  }

  return (
    <div className = "educationExperience">
      <h3>Education:</h3>
      <div className = "formsCtn-edu">
        <EduExpForm
          initEduExp = {initEduExp}
          addNewEduExp = {addNewEduExp}
        />
      </div>
      <div className = 'addBtnContainer'>
        <button 
          onClick = {toggleForm}>
          Add Education
        </button>
      </div>
      
    </div>
  )
}

export default EducationSection

// const addEducation = () => {     school, major, GPA, start, end
//   console.log('adding education');
//       //select HTML element
//   const formsCtn = document.querySelector('.formsCtn-edu');

//   const formCtn = document.createElement('div');
//     formCtn.classList.add('formCtn');
    
//   const schoolInputCtn = document.createElement('div');
//     schoolInputCtn.innerHTML = 'School:';
//     schoolInputCtn.classList.add('schoolInputCtn');
//   const schoolInput = document.createElement('input');
//     schoolInput.classList.add('schoolInput');

//   const majorInputCtn = document.createElement('div');
//     majorInputCtn.innerHTML = 'Major/Study:';
//     majorInputCtn.classList.add('majorInputCtn');
//   const majorInput = document.createElement('input');
//     majorInput.classList.add('majorInput');

//   const gpaInputCtn = document.createElement('div');
//     gpaInputCtn.innerHTML = 'GPA:';
//     gpaInputCtn.classList.add('gpaInputCtn');
//   const gpaInput = document.createElement('input');
//     gpaInput.classList.add('gpaInput');

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
//   schoolInputCtn.appendChild(schoolInput);
//   formCtn.appendChild(schoolInputCtn);

//   majorInputCtn.appendChild(majorInput);
//   formCtn.appendChild(majorInputCtn);
  
//   gpaInputCtn.appendChild(gpaInput);
//   formCtn.appendChild(gpaInputCtn);

//   startDateInputCtn.appendChild(startDateInput);
//   formCtn.appendChild(startDateInputCtn);

//   endDateInputCtn.appendChild(endDateInput);
//   formCtn.appendChild(endDateInputCtn);

//   formsCtn.appendChild(formCtn);
// };