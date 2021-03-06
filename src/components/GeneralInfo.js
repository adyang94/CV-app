import React, {useState} from 'react';


function GeneralInfo (props) {

  const [generalInfoData, setGeneralInfo] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const saveGeneralInfo = (e) => {
    const { name, value } = e.target
    setGeneralInfo({
      ...generalInfoData,
      [name]: value //using square bracket for dynamic object key naming.
    });
    console.log(generalInfoData);
    // props.saveData()
  };
  const saveInfo = (e) => {
    /* This section contains the changes when save is clicked.
     -- change display of input form to 'none'
     -- change display of rendered form to show it.
     -- use JSX to display new finalized form.
     */
    e.preventDefault();
    document.querySelector('.generalInfoFormCtn').style.display = 'none';
    
  };

  return (
    <div className = "generalInfo">
      <div className = "generalInfoFormCtn">
        <h3>General Info Form:</h3><br/>
        <form onSubmit = {saveInfo}>
          <p className = 'generalInfoName'>Name<br></br>
            <input
              name = 'name'
              type = 'text'
              value = {generalInfoData.name}
              onChange = {saveGeneralInfo}
              id = 'generalInfoNameInput'
              placeholder = 'Insert Name'
            />
          </p>
          <p className = 'generalInfoPhoneNumber'>Phone Number<br></br>
            <input
              name = 'phoneNumber'
              type = 'text'
              value = {generalInfoData.phoneNumber}
              onChange = {saveGeneralInfo}
              id = 'generalInfoPhoneNumberInput'
              placeholder = 'Add Phone Number'
            />
          </p>
          <p className = 'generalInfoEmail'>Email<br></br>
            <input
              name = 'email'
              type = 'email'
              value = {generalInfoData.email}
              onChange = {saveGeneralInfo}
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