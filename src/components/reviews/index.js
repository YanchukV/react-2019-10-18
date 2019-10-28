import React from 'react'
import {Comment, Rate} from 'antd'

function Reviews(props) {
  const {reviews} = props

  return (
    <div>
      {reviews.map(textItem => (
        <Comment
          author={<a>{textItem.user}</a>}
          content={textItem.text}
          key={textItem.id}
        />
      ))}
    </div>
  )
}

export default Reviews
