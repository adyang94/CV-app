import React from 'react';
import AddBtn from './AddBtn';

function EducationSection () {
  

  return (
    <div className = "educationExperience">
      <h3>Education:</h3>
      <div className = "formsCtn-edu">
      </div>
      <AddBtn
        title = "Education"
        id = "addEducationBtn"
        addFormMethod = {addEducation}
      />
      
    </div>
  )
}

export default EducationSection

// const addEducation = () => {
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