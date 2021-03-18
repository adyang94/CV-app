import React, {useState} from 'react';



function EduExpForm (props) {
  const [newEduExp, setEduExp] = useState([props.initEduExp]);

  if(!props.formState) {
    return null;
  }
  
  const updateEduExp = (e) => {
    let {name, value} = e.target;

    setEduExp({...newEduExp, [name]: [value]});
  };

  return (
    <div>
      <form>
        <input
          name = 'school'
          value = {newEduExp.school}
          id = 'EduExp-school-input'
          placeholder = 'Insert School'
          onClick = {updateEduExp}
          type = 'text'
        >
        
        </input>
        <input
          name = 'major'
          value = {newEduExp.major}
          id = 'EduExp-major-input'
          placeholder = 'Insert Major'
          onClick = {updateEduExp}
          type = 'text'
        >
        
        </input>
        <input
          name = 'gpa'
          value = {newEduExp.gpa}
          id = 'EduExp-gpa-input'
          placeholder = 'Insert GPA'
          onClick = {updateEduExp}
          type = 'number'
        >
        
        </input>
        <input
          name = 'startDate'
          value = {newEduExp.startDate}
          id = 'EduExp-startDate-input'
          placeholder = 'Insert Start Date'
          onClick = {updateEduExp}
          type = 'date'
        >
        
        </input>
        <input
          name = 'endDate'
          value = {newEduExp.endDate}
          id = 'EduExp-endDate-input'
          placeholder = 'Insert End Date'
          onClick = {updateEduExp}
          type = 'date'
        >
        </input>
        <button
          onClick = {() => {
            props.toggleForm();
            props.addNewEduExp(newEduExp);
          }}>Submit
        </button>

      </form>
    </div>
  );
};
export default EduExpForm;