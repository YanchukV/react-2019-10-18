import React from 'react'
import {Card, Typography} from 'antd'

const {Text} = Typography

function Dish(props) {
  const {dish} = props
  return (
    <div>
      <Card title={dish.name}>
        <Text>{dish.ingredients.join(', ')}</Text>
        <br />
        <Text underline>${dish.price}</Text>
      </Card>
    </div>
  )
}

export default Dish
