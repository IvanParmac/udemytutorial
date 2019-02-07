import React, { Component } from 'react'
import classes from './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'fgfjnfgb', name: 'Max', age: 28 },
      { id: 'fgfjmhjm', name: 'Manu', age: 29 },
      { id: 'fgfljhkjb', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  handlePersonDelete = (personIndex) => {
    const persons = [...this.state.persons.slice(0, personIndex), ...this.state.persons.slice(personIndex + 1)]
    this.setState({ persons: persons })
  }

  handleNameChange = (e, id) => {

    const personIndex = this.state.persons.findIndex(p => (p.id === id))
    // this.setState({
    //   persons: [
    //     ...this.state.persons.slice(0, personIndex),
    //     {
    //       ...this.state.persons[personIndex],
    //       name: e.target.value
    //     },
    //     ...this.state.persons.slice(personIndex + 1)
    //   ]
    // })

    const person = { ...this.state.persons[personIndex] }
    person.name = e.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({
      persons: persons
    })



  }

  togglePersons = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    let persons = null
    let btnClass = ""

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) =>
              <Person
                name={person.name}
                age={person.age}
                click={() => this.handlePersonDelete(index)}
                key={person.id}
                handleNameChange={(e) => this.handleNameChange(e, person.id)}
              />
            )
          }
        </div>
      )

      btnClass = classes.Red
    }

    const assignedClasses= []
    if (this.state.persons.length <= 2) {
      assignedClasses.push()
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push('bold')
    }

    return (
      <div className={classes.App}>
        <h1>hi,i am react app</h1>
        <p className={assignedClasses.join(' ')}>this is working</p>
        <button onClick={this.togglePersons}>Switch name</button>
        {persons}
      </div>
    );
  }
}

export default App;
