import React, {useState} from 'react';

 

function EduExpForm () {
  const [eduExp, setEduExp] = useState([]);



return (
  <div>
    <form>
      <input
        name = 'school'
        value = 
        id = 'EduExp-school-input'
        placeholder = 'Insert School'
        onClick = 
        type = 'text'
      >
      
      </input>
      <input
        name = 'major'
        value = 
        id = 
        placeholder = 
        onClick = 
        type = 'text'
      >
      
      </input>
      <input
        name = 'gpa'
        value = 
        id = 'EduExp-gpa-input'
        placeholder = 'Insert GPA'
        onClick = 
        type = 'number'
      >
      
      </input>
      <input
        name = 'startDate'
        value = 
        id = 'EduExp-startDate-input'
        placeholder = 'Insert Start Date'
        onClick = 
        type = 'date'
      >
      
      </input>
      <input
        name = 'endDate'
        value = 
        id = 'EduExp-endDate-input'
        placeholder = 'Insert End Date'
        onClick = 
        type = 'date'
      >
      <button
        
      >
        Submit
      </button>
      </input>
    </form>
  </div>
)
};
export default EduExpForm;