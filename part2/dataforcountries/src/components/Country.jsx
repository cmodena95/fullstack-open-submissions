const Country = ({ country }) => {
    if (country === null) {
        return null
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital[0]}</p>
            <p>Area {country.area}</p>

            <img src={country.flags.png} />

            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).map((lang) => <li key={lang}>{lang}</li>)}
            </ul>

            <h2>Weather in {country.name.common}</h2>
            <p>Temperature {country.temp} celcius</p>
            <img src={`https://openweathermap.org/img/wn/${country.icon}@2x.png`} />
            <p>Wind {country.wind} m/s</p>
        </div>
    )
}

export default Country