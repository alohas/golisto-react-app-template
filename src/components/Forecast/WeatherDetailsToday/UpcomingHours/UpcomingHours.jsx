import React from 'react'
import './UpcomingHours.scss'

class Inhours extends React.Component {
  render() {
    let time = new Date(this.props.data.dt * 1000).toTimeString().substring(0, 5)
    let icon = undefined
    if (this.props.data.weather[0].icon) {
      icon = `http://openweathermap.org/img/wn/${this.props.data.weather[0].icon}@2x.png`
    }

    return (
      <div className="Inhours">
        {this.props.data.dt && <p className="Inhours__time">{time}</p>}
        {this.props.data.weather[0].icon && (
          <p className="Inhours__icon">
            <img width="75" height="75" src={icon} alt="icon" />
          </p>
        )}
        {this.props.data.weather[0].description && <p className="Inhours__desc">{this.props.data.weather[0].description}</p>}
        {this.props.data.main.temp && <p className="Inhours__temp">{Math.round(this.props.data.main.temp)}°C</p>}
        {this.props.data.wind.speed && <p className="Inhours__wind">{this.props.data.wind.speed}m/s</p>}
      </div>
    )
  }
}

export default Inhours
