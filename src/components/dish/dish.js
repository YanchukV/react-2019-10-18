import React from 'react'
import {Card, Typography, Button, Row, Col} from 'antd'
import amount from '../../decorators/amount'
import styles from './dish.module.css'

function Dish(props) {
  const {
    dish,

    // from decorator
    amount,
    increase,
    decrease,
  } = props

  return (
    <Card className={styles.productDetailedOrderCard}>
      <Row type="flex" justify="space-between">
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title level={4} className={styles.title}>
            {dish.name}
          </Typography.Title>
          <Typography.Paragraph className={styles.description}>
            {dish.ingredients.join(', ')}
          </Typography.Paragraph>
          <div className={styles.price}>{dish.price} $</div>
        </Col>
        <Col xs={8} md={6} lg={4} align="right">
          <div className={styles.counter}>
            <div className={styles.count}>{amount}</div>
            <Button.Group>
              <Button
                className={styles.button}
                icon="minus"
                onClick={decrease}
              />
              <Button
                className={styles.button}
                icon="plus"
                onClick={increase}
              />
            </Button.Group>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default amount(Dish)
