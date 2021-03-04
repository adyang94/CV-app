import React, {useState} from 'react';
import '../styles/generalInfo.css';

function GeneralInfo (props) {

  const [generalInfoData, setGeneralInfo] = useState({
    name: 'hi',
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
  };

  return (
    <div className = "generalInfo">
      <h3>General Info:</h3><br/>
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

    </div>
  )
};
export default GeneralInfo;