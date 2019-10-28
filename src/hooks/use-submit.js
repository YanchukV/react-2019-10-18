import {useState} from 'react'

function useSubmit(initialText = '') {
  const [text, setText] = useState(initialText)

  const handleInput = e => {
    setText({
      text: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit', text)
  }

  return {
    text,
    handleInput,
    handleSubmit,
  }
}

export default useSubmit
