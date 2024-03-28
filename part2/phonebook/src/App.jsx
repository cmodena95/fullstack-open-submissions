import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterQuery, setFilterQuery] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const submitNewName = (event) => {
    event.preventDefault()

    const names = persons.map((person) => person.name)
    if (names.includes(newName)) {
      alert(`${newName} already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }

      personService
      .create(newPerson)
      .then(person => {
        setPersons(persons.concat(person))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const personsToShow = filterQuery == ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterQuery.toLowerCase()))

    const handleFilter = (event) => {
      setFilterQuery(event.target.value)
  }

  const removePerson = (id) => {
    personService
        .destroy(id)
        .then(data => {
            const newPersons = persons.filter((person) => person.id != id)
            setPersons(newPersons)
        })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterQuery} onChange={handleFilter} />

      <h2>Add new</h2>

      <Form onSubmit={submitNewName} inputs={[{value: newName, handler: handleNameChange}, {value: newNumber, handler: handleNumberChange}]}/>

      <h2>Numbers</h2>
      <Persons persons={personsToShow} destroy={removePerson}/>
    </div>
  )
}

export default App