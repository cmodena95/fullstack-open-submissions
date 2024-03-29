const Country = ({ country }) => {
    if (country === null) {
        return null
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital[0]}</p>
            <p>Area {country.area}</p>
        </div>
    )
}

export default Country