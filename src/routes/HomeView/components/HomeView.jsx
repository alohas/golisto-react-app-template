import React, { Component } from 'react'

// Components

import { WeatherForecast } from '_/components/Forecast'

// Styles
import './HomeView.scss'

class HomeView extends Component {
  // = Handlers =======================================

  // = Getters ========================================

  // = Lifecycle ======================================

  render() {
    return (
      <div id="HomeView">
        <WeatherForecast />
      </div>
    )
  }
}

export default HomeView
