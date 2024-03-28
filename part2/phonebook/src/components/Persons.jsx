const Persons = ({ persons, destroy }) => {
    return (
        <ul>
            {persons.map((person) => <li key={person.name}>{person.name} - {person.number} <button onClick={() => destroy(person.id)}>Delete</button></li>)}
        </ul>
    )
}

export default Persons