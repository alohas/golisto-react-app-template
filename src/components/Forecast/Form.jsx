import React from 'react'

class Form extends React.Component {
  // function Form() {
  // function handleSubmit(e) {
  //   e.preventDefault()
  // }

  render() {
    return (
      <form onSubmit={this.props.getWeatherData}>
        <input type="text" name="city" placeholder="name of city" autoComplete="off" />
        <input type="text" name="country" placeholder="country code" autoComplete="off" />
        <button>Get Forecast</button>
      </form>
    )
  }
}
// }
export default Form
