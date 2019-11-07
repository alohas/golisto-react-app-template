import React from 'react'
import ADay from './Day'

class upcomingDays extends React.Component {
  render() {
    return (
      <div>
        <ADay details={this.props.day1} />
        <ADay details={this.props.day2} />
        <ADay details={this.props.day3} />
        <ADay details={this.props.day4} />
        <ADay details={this.props.day5} />
      </div>
    )
  }
}

export default upcomingDays
