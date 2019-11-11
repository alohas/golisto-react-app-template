import React from 'react'
import Form from './Form/Form'
import WeatherDetailsToday from './WeatherDetailsToday/WeatherDetailsToday'
import FiveDayForecast from './FiveDayForecast/FiveDayForecast'

import './Widget.scss'

const myAPIKey = 'dce6d076b7a2ffe64e08efe5ff779fa3'

class Widget extends React.Component {
  constructor(props) {
    super(props)
    this.getWeatherData = this.getWeatherData.bind(this)
    this.goback = this.goback.bind(this)
    this.state = {
      cityFound: false,
      isClicked: false,
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      description: undefined,
      wind: undefined,
      pressure: undefined,
      sunrise: undefined,
      sunrise: undefined,
      icon: undefined,
      in3hours: undefined,
      in6hours: undefined,
      in9hours: undefined,
      in12hours: undefined,
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
              isClicked: true,
              cityFound: false,
              city: undefined,
              country: undefined,
              temperature: undefined,
              humidity: undefined,
              description: undefined,
              wind: undefined,
              pressure: undefined,
              sunrise: undefined,
              sunrise: undefined,
              icon: undefined,
              in3hours: undefined,
              in6hours: undefined,
              in9hours: undefined,
              in12hours: undefined,
              day1: undefined,
              day2: undefined,
              day3: undefined,
              day4: undefined,
              day5: undefined,
              error: data.message,
            })
          } else {
            this.setState({
              city: data.name,
              country: data.sys.country,
              temperature: data.main.temp,
              humidity: data.main.humidity,
              description: data.weather[0].description,
              icon: data.weather[0].icon,
              wind: data.wind,
              pressure: data.main.pressure,
              sunrise: data.sys.sunrise,
              sunset: data.sys.sunset,
              error: '',
            })
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${myAPIKey}&units=metric`)
              .then((e) => e.json())
              .then((data) => {
                this.setState({
                  cityFound: true,
                  isClicked: true,
                  in3hours: data.list[0],
                  in6hours: data.list[1],
                  in9hours: data.list[2],
                  in12hours: data.list[3],
                  day1: data.list[7],
                  day2: data.list[15],
                  day3: data.list[23],
                  day4: data.list[31],
                  day5: data.list[39],
                })
              })
          }
        })
    } else {
      this.setState({
        isClicked: true,
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        pressure: undefined,
        sunrise: undefined,
        sunrise: undefined,
        icon: undefined,
        in3hours: undefined,
        in6hours: undefined,
        in9hours: undefined,
        in12hours: undefined,
        day1: undefined,
        day2: undefined,
        day3: undefined,
        day4: undefined,
        day5: undefined,
        error: 'Please enter the city and country code.',
      })
    }
  }

  goback() {
    this.setState({ cityFound: false })
  }

  render() {
    return (
      <div className="WeatherApp">
        <h1 className="WeatherApp__Heading">Weather Forecast</h1>

        {!this.state.cityFound && <h5 className="WeatherApp__SubHeading">Enter the name of the city and country code!</h5>}
        {this.state.cityFound && (
          <button onClick={this.goback} className="back">
            Go back
          </button>
        )}
        <div className="WeatherApp__Display">
          {!this.state.cityFound && <Form getWeatherData={this.getWeatherData} isClicked={this.state.isClicked} error={this.state.error} />}

          {this.state.cityFound && (
            <WeatherDetailsToday
              city={this.state.city}
              country={this.state.country}
              temperature={this.state.temperature}
              humidity={this.state.humidity}
              description={this.state.description}
              icon={this.state.icon}
              wind={this.state.wind}
              pressure={this.state.pressure}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              in3hours={this.state.in3hours}
              in6hours={this.state.in6hours}
              in9hours={this.state.in9hours}
              in12hours={this.state.in12hours}
            />
          )}
          {this.state.cityFound && <FiveDayForecast day1={this.state.day1} day2={this.state.day2} day3={this.state.day3} day4={this.state.day4} day5={this.state.day5} />}
        </div>
      </div>
    )
  }
}
export default Widget
