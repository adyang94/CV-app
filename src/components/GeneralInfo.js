import React, {useState} from 'react';


function renderingGenInfo () {
  /* This section contains the changes when save is clicked.
   -- change display of input form to 'none'
   -- change display of rendered form to show it.
   -- use JSX to display new finalized form.
   */
};
function GeneralInfo (props) {


  let [generalInfoData, setGeneralInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    renderGenInfo: false
  });

  const onChange = (e) => {
    const { name, value } = e.target  // destructuring the values from the clicked statement.
    setGeneralInfo({
      ...generalInfoData,
      
      [name]: value 
      //using square bracket for dynamic object key naming.
    });
    console.log(`hi: ${generalInfoData.name}`);
    // props.saveData()
  };
  const saveInfo = (e) => {

    e.preventDefault();
    console.log(`Save Info running`)
    document.querySelector('.generalInfoFormCtn').style.display = 'none';
    setGeneralInfo({
      ...generalInfoData,
      renderGenInfo: true
    });
  };

  return (
    <div className = "generalInfo">
      
      <renderingGenInfo renderGenInfo = {generalInfoData.renderGenInfo}/>  
      
      <div className = "generalInfoFormCtn">
        <h3>General Info Form:</h3><br/>
        <form onSubmit = {saveInfo}>
          <p className = 'generalInfoName'>Name<br></br>
            <input
              name = 'name'
              type = 'text'
              value = {generalInfoData.name}
              onChange = {onChange}
              id = 'generalInfoNameInput'
              placeholder = 'Insert Name'
            />
          </p>
          <p className = 'generalInfoPhoneNumber'>Phone Number<br></br>
            <input
              name = 'phoneNumber'
              type = 'text'
              value = {generalInfoData.phoneNumber}
              onChange = {onChange}
              id = 'generalInfoPhoneNumberInput'
              placeholder = 'Add Phone Number'
            />
          </p>
          <p className = 'generalInfoEmail'>Email<br></br>
            <input
              name = 'email'
              type = 'email'
              value = {generalInfoData.email}
              onChange = {onChange}
              id = 'generalInfoEmailInput'
              placeholder = 'Insert Email'
            />
          </p>
          <button type = "submit">Save</button>
        </form>
      </div>
    </div>
  )
};
export default GeneralInfo;