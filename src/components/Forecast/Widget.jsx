import React, { useEffect } from 'react'
import Form from './Form'
import WeatherDetails from './WeatherDetails'
import UpcomingDays from './UpcomingDays'

import './Widget.scss'

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
      icon: undefined,
      day1: undefined,
      day2: undefined,
      day3: undefined,
      day4: undefined,
      day5: undefined,
      error: undefined,
    }
  }

  getWeatherData(event) {
    event.preventDefault()

    const city = event.target.elements.city.value
    const country = event.target.elements.country.value

    event.target.elements.city.value = ''
    event.target.elements.country.value = ''

    if (city && country) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${myAPIKey}&units=metric`)
        .then((e) => e.json())
        .then((data) => {
          if (data.cod == '404') {
            this.setState({
              city: undefined,
              country: undefined,
              temperature: undefined,
              humidity: undefined,
              description: undefined,
              icon: undefined,
              day1: undefined,
              day2: undefined,
              day3: undefined,
              day4: undefined,
              day5: undefined,
              error: data.message,
            })
          } else {
            console.log(data)
            this.setState({
              city: data.name,
              country: data.sys.country,
              temperature: data.main.temp,
              humidity: data.main.humidity,
              description: data.weather[0].description,
              icon: data.weather[0].icon,
              error: '',
            })
          }
        })
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${myAPIKey}&units=metric`)
        .then((e) => e.json())
        .then((data) => {
          //console.log(data)
          this.setState({
            day1: data.list[7],
            day2: data.list[15],
            day3: data.list[23],
            day4: data.list[31],
            day5: data.list[39],
          })
          //console.log(this.state)
        })
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        day1: undefined,
        day2: undefined,
        day3: undefined,
        day4: undefined,
        day5: undefined,
        error: 'Please enter the city and country code.',
      })
      //console.log(this.state)
    }
  }

  render() {
    return (
      <div className="WeatherApp">
        <h1>What is the weather? </h1>
        <h2>Find out now!</h2>
        <div className="WeatherApp__Display">
          <Form getWeatherData={this.getWeatherData} />

          <WeatherDetails
            city={this.state.city}
            country={this.state.country}
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            description={this.state.description}
            icon={this.state.icon}
            error={this.state.error}
          />
          <UpcomingDays day1={this.state.day1} day2={this.state.day2} day3={this.state.day3} day4={this.state.day4} day5={this.state.day5} />
        </div>
      </div>
    )
  }
}
export default Widget
