import React, { Component } from 'react'
import './App.css'
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
    const style = {
      color: 'white',
      backgroundColor: 'green',
      font: 'inherrit',
      border: '1px solid blue',
      padding: '8 px',
      cursor: 'pointer'
    }

    let persons = null

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
      style.backgroundColor = "red"
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
        <div className="App">
          <h1>hi,i am react app</h1>
          <p className={classes.join(' ')}>this is working</p>
          <button onClick={this.togglePersons} style={style}>Switch name</button>
          {persons}
        </div>
    );
  }
}

export default App;
