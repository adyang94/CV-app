import React, {useState} from 'react';

function GeneralInfo (props) {

  const [generalInfoData, setGeneralInfo] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const saveGeneralInfo = (newInfo) => {
    setGeneralInfo(
      ...generalInfoData,

      )
  };

  return (  //JSX
    <div>
      <h1>General Info:</h1><br></br>
      <h4>Name</h4>
        <input
          name = 'name'
          type = 'text'
          value = {generalInfoData.name}
          onChange = {saveGeneralInfo}
          id = 'generalInfoNameInput'
          placeholder = 'Insert Name'
        />
      <h4>Email</h4>
        <input
          name = 'email'
          type = 'email'
          value = {generalInfoData.email}
          onChange = {saveGeneralInfo}
          id = 'generalInfoEmailInput'
          placeholder = 'Insert Email'
        />
      <h4>Phone Number</h4>
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