import React from 'react'
import './Form.scss'

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeatherData}>
        <div className="formWrap">
          <input className="formWrap__input" type="text" name="city" autoComplete="off" required />
          <label htmlFor="city" className="formWrap__label">
            <span className="formWrap__label-span">City</span>
          </label>
        </div>
        <div className="formWrap">
          <input className="formWrap__input" type="text" name="country" autoComplete="off" required />
          <label htmlFor="city" className="formWrap__label">
            <span className="formWrap__label-span">Country Code</span>
          </label>
        </div>
        <button>Get Forecast</button>
        {this.props.error && <p className="error-message">{this.props.error}</p>}
      </form>
    )
  }
}

export default Form
