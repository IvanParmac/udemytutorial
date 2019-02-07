import React from 'react'
import './Person.css'

const person = (props) => {
  const rnd =Math.random()
  console.log(rnd)
  if(rnd>0.7){
    throw new Error('Something ewnt wrong')
  }
  return (
    <div className="Person" >
      <p onClick={props.click}>Im a {props.name} and im {props.age}</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.handleNameChange} />
    </div>
  )
}

export default person