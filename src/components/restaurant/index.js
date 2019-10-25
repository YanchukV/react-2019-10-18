import React, {Component} from 'react'
import {Typography} from 'antd'
import Menu from '../menu'
import Reviews from '../reviews'
import AverageRating from '../average-rating'

class Restaurant extends Component {
  render() {
    const {
      restaurant: {name, reviews, menu},
    } = this.props
    return (
      <div>
        <Typography.Title level={2}>{name}</Typography.Title>
        <AverageRating reviews={reviews} />
        <Reviews reviews={reviews} />
        <Menu menu={menu} />
      </div>
    )
  }
}

export default Restaurant
