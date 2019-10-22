import {useState} from 'react'

function useAmount(initialAmount = 0) {
  // const amountHook = useState(0) // array
  // const amount = amountHook[0]
  // const setAmount = amountHook[1]

  const [amount, setAmount] = useState(initialAmount)

  const increase = () => setAmount(amount + 1)
  const decrease = () => amount > 0 && setAmount(amount - 1)

  return {
    amount,
    increase,
    decrease,
  }
}

export default useAmount
