import React from 'react'

class Form extends React.Component {
  // function Form() {
  // function handleSubmit(e) {
  //   e.preventDefault()
  // }

  render() {
    return (
      <form onSubmit={this.props.getWeatherData}>
        <input type="text" name="city" placeholder="name of city" />
        <input type="text" name="country" placeholder="country code" />
        <button>Get Forecast</button>
      </form>
    )
  }
}
// }
export default Form
