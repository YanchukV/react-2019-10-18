import React, {Component} from 'react'
import Restaurant from './restaurant'

class App extends Component {
  render() {
    const {restaurants} = this.props
    return restaurants.map(restaurant => (
      <Restaurant restaurant={restaurant} key={restaurant.id} />
    ))
  }
}

export default App
