import React from 'react'

class ADay extends React.Component {
  render() {
    let d = undefined
    let icon = undefined
    if (this.props.details) {
      console.log(this.props.details)
      d = new Date(this.props.details.dt * 1000)
      icon = `http://openweathermap.org/img/wn/${this.props.details.weather[0].icon}@2x.png`

      return (
        <div>
          {d && <h5>{d.toDateString().substring(0, 10)}</h5>}
          {this.props.details.weather[0].icon && <p> {<img src={icon} alt="icon" />}</p>}
          {this.props.details.main.temp && <p>{this.props.details.main.temp}°C</p>}
          {this.props.details.weather[0].description && <p>{this.props.details.weather[0].description}</p>}
          {this.props.details.wind.speed && <p>{this.props.details.wind.speed} m/s</p>}
          {this.props.details.clouds.all && this.props.details.main.pressure && (
            <p>
              Clouds: {this.props.details.clouds.all}%, {this.props.details.main.pressure} hpa
            </p>
          )}
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default ADay
