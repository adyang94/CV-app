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
      <h1>General Info:</h1><br/>
      <p>Name</p>
        <input
          name = 'name'
          type = 'text'
          value = {generalInfoData.name}
          onChange = {saveGeneralInfo}
          id = 'generalInfoNameInput'
          placeholder = 'Insert Name'
        />
      <p>Email</p>
        <input
          name = 'email'
          type = 'email'
          value = {generalInfoData.email}
          onChange = {saveGeneralInfo}
          id = 'generalInfoEmailInput'
          placeholder = 'Insert Email'
        />
      <p>Phone Number</p>
        <input
          name = 'phoneNumber'
          type = 'number'
          value = {generalInfoData.phoneNumber}
          onChange = {saveGeneralInfo}
          id = 'generalInfoPhoneNumber'
          placeholder = 'Add Phone Number'
        />

    </div>
  )
};
export default GeneralInfo;