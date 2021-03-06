import GeneralInfo from './components/GeneralInfo';
import React, { useState } from 'react';
import EducationSection from './components/Education';
import WorkSection from './components/Work';
import HandleSubmit from './components/HandleSubmit';
import './styles/style.css';



function App() {
  const [allData, handleChange] = useState ({
    generalInfoData: '',
    workExp: '',
    eduExp: ''
  })

  const saveData = (name) => {
    handleChange({
      ...allData,
      [name]: name
    });
    console.log(allData);
  };

  return (
    <div className="App">
      <GeneralInfo saveData = {saveData}/>
      <WorkSection/>
      <EducationSection/>
      <HandleSubmit/>
    </div>
  );
}

export default App;
