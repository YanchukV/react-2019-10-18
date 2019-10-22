import React, {Component} from 'react'
import {Typography} from 'antd'
import Menu from '../menu'

class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    return (
      <div>
        <Typography.Title level={2}>{restaurant.name}</Typography.Title>
        <Menu menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
