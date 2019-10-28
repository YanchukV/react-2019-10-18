// HOC higher order component
import React from 'react'
import useSubmit from '../hooks/use-submit'

function submit(OriginalComponent) {
  return props => {
    const {text, handleSubmit, handleInput} = useSubmit()

    return (
      <OriginalComponent
        {...props}
        text={props.text}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      />
    )
  }
}

export default submit
