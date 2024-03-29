import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org'
const key = import.meta.env.VITE_SOME_KEY

const weatherByCoords = (lat, lon) => {
    const request = axios.get(`${baseUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    return request.then(response => {
        const data = response.data
        const info = { condition: data.weather[0].main, temp: data.main.temp, wind: data.wind.speed, icon: data.weather[0].icon }
        return info
    })
}

const getWeather = (place) => {
    const request = axios.get(`${baseUrl}/geo/1.0/direct?q=${place}&appid=${key}`)
    return request.then(response => {
        return weatherByCoords(response.data[0].lat, response.data[0].lon)
    })
}

export default { getWeather }
