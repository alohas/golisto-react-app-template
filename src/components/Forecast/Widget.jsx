import React, { useEffect } from 'react'
import Form from './Form'
import WeatherDetails from './WeatherDetails'

const myAPIKey = 'dce6d076b7a2ffe64e08efe5ff779fa3'

class Widget extends React.Component {
  constructor(props) {
    super(props)
    this.getWeatherData = this.getWeatherData.bind(this)
    this.state = {
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
    }
  }

  getWeatherData(event) {
    event.preventDefault()
    let fetchedData = {}
    const city = event.target.elements.city.value
    const country = event.target.elements.country.value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${myAPIKey}&units=metric`)
      .then((e) => e.json())
      .then((data) => {
        console.log(data)
        fetchedData = data
        this.setState({
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: '',
        })
      })
  }

  render() {
    return (
      <div>
        <h1>What is the weather? </h1>
        <h2>Find out now!</h2>
        <div>
          <Form getWeatherData={this.getWeatherData} />
          <WeatherDetails />
        </div>
      </div>
    )
  }
}
export default Widget
