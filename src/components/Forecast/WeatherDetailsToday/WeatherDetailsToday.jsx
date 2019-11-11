import React from 'react'
import Inhours from './UpcomingHours/UpcomingHours'
import './WeatherDetailsToday.scss'

class WeatherDetails extends React.Component {
  render() {
    let icon = undefined
    if (this.props.icon) {
      icon = `http://openweathermap.org/img/wn/${this.props.icon}@2x.png`
    }
    let rised = new Date(this.props.sunrise * 1000).toTimeString().substring(0, 5)
    let setd = new Date(this.props.sunset * 1000).toTimeString().substring(0, 5)

    let today = new Date()

    let windDirection = undefined
    if (this.props.wind.deg == 350 || this.props.wind.deg == 360 || this.props.wind.deg == 10) {
      windDirection = 'N'
    } else if (this.props.wind.deg == 20 || this.props.wind.deg == 30) {
      windDirection = 'N/NE'
    } else if (this.props.wind.deg == 40 || this.props.wind.deg == 50) {
      windDirection = 'NE'
    } else if (this.props.wind.deg == 60 || this.props.wind.deg == 70) {
      windDirection = 'E/NE'
    } else if (this.props.wind.deg == 80 || this.props.wind.deg == 90 || this.props.wind.deg == 100) {
      windDirection = 'E'
    } else if (this.props.wind.deg == 110 || this.props.wind.deg == 120) {
      windDirection = 'E/SE'
    } else if (this.props.wind.deg == 130 || this.props.wind.deg == 140) {
      windDirection = 'SE'
    } else if (this.props.wind.deg == 150 || this.props.wind.deg == 160) {
      windDirection = 'S/SE'
    } else if (this.props.wind.deg == 170 || this.props.wind.deg == 180 || this.props.wind.deg == 190) {
      windDirection = 'S'
    } else if (this.props.wind.deg == 200 || this.props.wind.deg == 210) {
      windDirection = 'S/SW'
    } else if (this.props.wind.deg == 220 || this.props.wind.deg == 230) {
      windDirection = 'SW'
    } else if (this.props.wind.deg == 240 || this.props.wind.deg == 250) {
      windDirection = 'W/SW'
    } else if (this.props.wind.deg == 260 || this.props.wind.deg == 270 || this.props.wind.deg == 280) {
      windDirection = 'W'
    } else if (this.props.wind.deg == 290 || this.props.wind.deg == 300) {
      windDirection = 'W/NW'
    } else if (this.props.wind.deg == 310 || this.props.wind.deg == 320) {
      windDirection = 'NW'
    } else if (this.props.wind.deg == 330 || this.props.wind.deg == 340) {
      windDirection = 'N/NW'
    }

    return (
      <div className="Today">
        <div className="Today__details">
          {this.props.city && this.props.country && (
            <h3 className="Today__Location">
              {this.props.city}, {this.props.country}
            </h3>
          )}
          {this.props.city && this.props.country && <h4 className="Today__When-date">{new Date().toDateString().substring(0, 10)}</h4>}
          {this.props.city && this.props.country && <h4 className="Today__When-time">{new Date().toTimeString().substring(0, 5)}</h4>}
          {this.props.description && <p className="Today__Desc">{this.props.description}</p>}
          {this.props.temperature && (
            <p className="Today__Icon">
              <img width="100px" height="100px" src={icon} alt="icon" />
            </p>
          )}
          {this.props.temperature && <p className="Today__Temp">{Math.round(this.props.temperature)}°C</p>}
          {this.props.humidity && (
            <p className="Today__Humi">
              <span className="Today__Humi-span">Humidity:</span> {this.props.humidity}%
            </p>
          )}
          {this.props.wind && (
            <p className="Today__Wind">
              <span className="Today__Wind-span">Wind:</span> {this.props.wind.speed} m/s <span className="Today__Wind-dir">{windDirection}</span>
            </p>
          )}
          {this.props.pressure && (
            <p className="Today__Press">
              <span className="Today__Press-span">Pressure:</span> {this.props.pressure}hpa
            </p>
          )}
          {this.props.sunrise && (
            <p className="Today__Sunrise">
              <span className="Today__Sunrise-span">Sunrise:</span> {rised}
            </p>
          )}
          {this.props.sunset && (
            <p className="Today__Sunset">
              <span className="Today__Sunset-span">Sunset:</span> {setd}
            </p>
          )}
        </div>
        <div className="Today__hourly">
          <Inhours data={this.props.in3hours} />
          <Inhours data={this.props.in6hours} />
          <Inhours data={this.props.in9hours} />
          <Inhours data={this.props.in12hours} />
        </div>
      </div>
    )
  }
}

export default WeatherDetails
