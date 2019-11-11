import React from 'react'
import './ADay.scss'

class ADay extends React.Component {
  render() {
    let d = undefined
    let icon = undefined
    if (this.props.details) {
      d = new Date(this.props.details.dt * 1000)
      icon = `http://openweathermap.org/img/wn/${this.props.details.weather[0].icon}@2x.png`

      return (
        <div className="Upcoming__Day">
          {d && <h5>{d.toDateString().substring(0, 10)}</h5>}
          {this.props.details.weather[0].icon && <p className="Upcoming__Day-img-container"> {<img src={icon} width="50" height="50" alt="icon" />}</p>}
          {this.props.details.main.temp && <p className="Upcoming__Day-temp">{Math.round(this.props.details.main.temp)}°C</p>}
          {this.props.details.weather[0].description && <p className="Upcoming__Day-detail-desc">{this.props.details.weather[0].description}</p>}
          {this.props.details.wind.speed && <p className="Upcoming__Day-detail">{this.props.details.wind.speed} m/s</p>}
          {this.props.details.main.pressure && <p className="Upcoming__Day-detail">Clouds: {this.props.details.clouds.all}%</p>}
          {this.props.details.main.pressure && <p className="Upcoming__Day-detail">{this.props.details.main.pressure} hpa</p>}
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default ADay
