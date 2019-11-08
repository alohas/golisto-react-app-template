import React from 'react'

class WeatherDetails extends React.Component {
  render() {
    let icon = undefined
    if (this.props.icon) {
      icon = `http://openweathermap.org/img/wn/${this.props.icon}@2x.png`
    }
    return (
      <div>
        {this.props.city && this.props.country && (
          <h3>
            Location: {this.props.city}, {this.props.country}
          </h3>
        )}
        {this.props.city && this.props.country && <h4>Today</h4>}
        {this.props.temperature && (
          <p>
            <img width="50px" height="50px" src={icon} alt="icon" /> {this.props.temperature}°C
          </p>
        )}
        {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
        {this.props.humidity && <p>Conditions: {this.props.description}</p>}

        {this.props.error && <p>{this.props.error}</p>}
      </div>
    )
  }
}

export default WeatherDetails
