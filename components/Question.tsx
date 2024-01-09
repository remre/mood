'use client'

import { useState } from 'react'

const Question = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
    // do things here
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-black/20 px-4 py-3 text-lg rounded-lg "
          onChange={onChange}
          value={value}
          type="text"
          placeholder="Ask a question"
        ></input>
        <button
          type="submit"
          className="bg-blue-400 px-4 py-2 rounded-lg text-lg"
        >
          Ask
        </button>
      </form>
    </div>
  )
}

export { Question }
