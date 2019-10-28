import React, {Component} from 'react'
import submit from '../../decorators/submit'

function ReviewForm(props) {
  const {text, handleSubmit, handleInput} = props

  return (
    <form onSubmit={handleSubmit}>
      <p>Add your review:</p>
      <input value={text} onChange={handleInput} type={'text'} />
    </form>
  )
}

export default submit(ReviewForm)
