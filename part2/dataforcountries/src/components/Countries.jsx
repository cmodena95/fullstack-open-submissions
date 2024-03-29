const Countries = ({ countries, show }) => {
    return (
        <div>
            {countries.map((country) => <p key={country.name.common}>{country.name.common} <button onClick={() => show(country.name.common)}>Show</button></p>)}
        </div>
    )
}

export default Countries