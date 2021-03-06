import React from "react";

function AddBtn (props) {
  return (
    <div className = 'addBtnContainer'>
      <button 
        id = {props.id}
        onClick = {props.addFormMethod}>
        Add {props.title}
      </button>
    </div>
  )
}

export default AddBtn