import GeneralInfo from './components/GeneralInfo';
import React from 'react';
import EducationSection from './components/Education';
import WorkSection from './components/Work';
import HandleSubmit from './components/HandleSubmit';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <GeneralInfo/>
      <WorkSection/>
      <EducationSection/>
      <HandleSubmit/>
    </div>
  );
}

export default App;
