import React from "react";

function AddBtn (props) {
  return (
    <div className = 'returnBtnContainer'>
      <button 
        id = {props.id}
        onClick = {props.addFormMethod}>
        Add {props.title}
      </button>
    </div>
  )
}

export default AddBtn