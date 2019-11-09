import React from 'react'

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeatherData}>
        <input type="text" name="city" placeholder="name of city" autoComplete="off" required />
        <input type="text" name="country" placeholder="country code" autoComplete="off" required />
        {this.props.isClicked && <button>Check another</button>}

        {!this.props.isClicked && <button>Get Forecast</button>}
        {this.props.error && <p>{this.props.error}</p>}
      </form>
    )
  }
}

export default Form
