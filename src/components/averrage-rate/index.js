import React from 'react'
import {Typography, Rate} from 'antd'

function AverrageRate(props) {
  const {rating} = props
  const averrage = rating.reduce(
    (acc, item, index, array) => acc + item.rating / array.length,
    0
  )

  return (
    <div>
      <Rate disabled value={averrage} />
    </div>
  )
}

export default AverrageRate
