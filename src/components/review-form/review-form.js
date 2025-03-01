import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import useInput from '../../hooks/use-input'

import styles from './review-form.module.css'

const ReviewForm = () => {
  const [rate, setRate] = useState()
  const [text, setText, isValidText] = useInput()

  const handleSubmit = ev => {
    ev.preventDefault()
    console.log('submitted: ', rate, text)
  }

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Input.TextArea
              rows={3}
              value={text}
              onChange={setText}
              size="large"
              className={{
                [styles.invalid]: !isValidText,
              }}
            />
            <div>
              Rating: <Rate value={rate} onChange={setRate} />
            </div>
            <Button htmlType="submit" className={styles.submitButton}>
              PUBLISH REVIEW
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

export default ReviewForm
