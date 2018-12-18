import React from 'react'
import './Person.css'

const person = (props) => {
  
  return (
    <div className="Person" >
      <p onClick={props.click}>Im a {props.name} and im {props.age}</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.handleNameChange} />
    </div>
  )
}

export default person