import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterQuery, setFilterQuery] = useState('')
  const [notification, setNotification] = useState(null)
  const [error, setError] = useState(null)

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
      window.alert(`${newName} is already in your phonebook, would you like to replace the number?`)
        const personToChange = persons.filter((person) => person.name == newName)[0]
        console.log('hi')
        const remainingPersons = persons.filter((person) => person.name != newName)
        personToChange.number = newNumber
        personService
        .update(personToChange.id, personToChange)
        .then(data => {
          setPersons(remainingPersons.concat(personToChange))
          setNotification(`${newName} was updated!`)
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      personService
      .create(newPerson)
      .then(person => {
        setPersons(persons.concat(person))

        setNotification(`${newPerson.name} was added!`)
        setTimeout(() => {
          setNotification(null)
        }, 5000)

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
    const person = persons.filter((person) => person.id == id)[0]
    console.log(person)
    if (window.confirm('are you sure?')) {
      personService
      .destroy(id)
      .then(data => {
          const newPersons = persons.filter((person) => person.id != id)
          setPersons(newPersons)
      })
      .catch(error => {
        setError(
          `${person.name} was already deleted from server`
        )
        setTimeout(() => {
          setError(null)
        }, 5000)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} type='message' />
      <Notification message={error} type='error' />
      <Filter value={filterQuery} onChange={handleFilter} />

      <h2>Add new</h2>

      <Form onSubmit={submitNewName} inputs={[{value: newName, handler: handleNameChange}, {value: newNumber, handler: handleNumberChange}]}/>

      <h2>Numbers</h2>
      <Persons persons={personsToShow} destroy={removePerson}/>
    </div>
  )
}

export default App