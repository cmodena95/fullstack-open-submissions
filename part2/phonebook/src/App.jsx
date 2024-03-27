import { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterQuery, setFilterQuery] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const submitNewName = (event) => {
    event.preventDefault()

    const names = persons.map((person) => person.name)
    if (names.includes(newName)) {
      alert(`${newName} already added to phonebook`)
    } else {
      setPersons(persons.concat({
        name: newName,
        number: newNumber
      }))
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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterQuery} onChange={handleFilter} />

      <h2>Add new</h2>

      <Form onSubmit={submitNewName} inputs={[{value: newName, handler: handleNameChange}, {value: newNumber, handler: handleNumberChange}]}/>

      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  )
}

export default App