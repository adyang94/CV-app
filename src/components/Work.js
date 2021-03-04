import React from 'react';
import AddBtn from './AddBtn';

function WorkSection () {
  
  const addWorkExperience = () => {

  }

  return (
    <div className = 'workExperience'>
      <AddBtn 
        title = 'Work Experience' 
        id = 'addWorkExperienceBtn'
        addFormMethod = {addWorkExperience}
      />
    </div>
  )
}

export default WorkSection;