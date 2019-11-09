import React from 'react'
import './WeatherDetail.scss'

class WeatherDetails extends React.Component {
  render() {
    let icon = undefined
    if (this.props.icon) {
      icon = `http://openweathermap.org/img/wn/${this.props.icon}@2x.png`
    }
    return (
      <div className="Today">
        {this.props.city && this.props.country && (
          <h3>
            {this.props.city}, {this.props.country}
          </h3>
        )}
        {this.props.city && this.props.country && <h4>Today</h4>}
        {this.props.temperature && (
          <p>
            <img width="100px" height="100px" src={icon} alt="icon" />
          </p>
        )}
        {this.props.temperature && <p>{Math.round(this.props.temperature)}°C</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
        {this.props.humidity && <p>Conditions: {this.props.description}</p>}

        {this.props.error && <p>{this.props.error}</p>}
      </div>
    )
  }
}

export default WeatherDetails
