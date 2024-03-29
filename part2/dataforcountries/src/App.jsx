import { useState, useEffect } from 'react'
import Countries from './components/Countries'
import Country from './components/Country'
import countryService from './services/countries'

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(null)
  const [query, setQuery] = useState('')
  const [message, setMessage] = useState('')

  const searchQuery = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery)
    countryService
      .getCountries()
      .then(data => {
        const countriesToShow = data.filter((country) => country.name.common.toLowerCase().includes(newQuery.toLowerCase()))
        // if between 2 and 10 countries
        if ((countriesToShow.length <= 10) && (countriesToShow.length > 1)) {
          setMessage('')
          setCountry(null)
          setCountries(countriesToShow)
          // if just one country
        } else if (countriesToShow.length == 1) {
          countryService
            .getCountry(countriesToShow[0].name.common)
            .then(data => {
              setCountries([])
              setMessage('')
              setCountry(data)
            })
        } else if (newQuery == '') {
          setMessage('')
          setCountry(null)
          setCountries([])
        } else {
          setMessage('too many countries, please be more specific')
          setCountry(null)
          setCountries([])
        }
      })
  }

  const displayShow = (country) => {
    console.log(country)
    countryService
    .getCountry(country)
    .then(data => {
      setCountries([])
      setMessage('')
      setCountry(data)
    })
  }

  return (
    <>
      <p>Find countries</p>
      <input value={query} onChange={searchQuery}/>
      <p>{message}</p>
      <Countries countries={countries} show={displayShow}/>
      <Country country={country}/>
    </>
  )
}

export default App
