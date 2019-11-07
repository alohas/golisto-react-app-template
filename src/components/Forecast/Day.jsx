import React from 'react'

class ADay extends React.Component {
  render() {
    console.log(this.props.details)
    return <div>{this.props.details && <h4>{this.props.details.dt}</h4>}</div>
  }
}

export default ADay
