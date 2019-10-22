import React, {useEffect} from 'react'
import {Card, Typography, Button} from 'antd'
import useAmount from '../../hooks/use-amount'

const {Text} = Typography

function Dish(props) {
  const {amount, increase, decrease} = useAmount()

  useEffect(() => {
    console.log('Apply Effect')
  })

  const {dish} = props
  return (
    <div>
      <Card title={dish.name}>
        <Text>{dish.ingredients.join(', ')}</Text>
        <br />
        <Text underline>${dish.price}</Text>
        <br />
        <Text>{amount}</Text>&nbsp;
        <Button onClick={decrease}>-</Button>
        <Button onClick={increase}>+</Button>
      </Card>
    </div>
  )
}

export default Dish
