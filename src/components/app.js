import React, {Component} from 'react'
import Restaurant from './restaurant'

class App extends Component {
  state = {
    value: 0,
    otherValue: 'foo bar',
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 0
  //   }
  // }

  componentDidMount() {
    console.log('Did mount')
    this.setState(prevState => ({
      value: prevState.value + 1,
    }))
    // fetch data
  }
  componentDidUpdate(prevProps) {
    console.log('Did update', this.state.value, this.state.otherValue)
    // subscribe on some events
  }
  componentWillUnmount() {
    console.log('Did unmount')
    // unsubscribe from some events
  }

  render() {
    const {restaurants} = this.props
    return restaurants.map(restaurant => (
      <Restaurant restaurant={restaurant} key={restaurant.id} />
    ))
  }
}

export default App
