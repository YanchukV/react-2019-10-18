// HOC higher order component
import React from 'react'
import useAmount from '../hooks/use-amount'

function amount(OriginalComponent) {
  return props => {
    const {amount, increase, decrease} = useAmount()

    return (
      <OriginalComponent
        {...props}
        amount={amount}
        increase={increase}
        decrease={decrease}
      />
    )
  }
}

export default amount
