'use client'

import { askQuestion } from '@/utils/api'
import { useState } from 'react'

const Question = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState()
  const onChange = (e) => {
    setValue(e.target.value)
    // do things here
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const answer = await askQuestion(value)
    setResponse(answer)
    setValue('')
    setLoading(false)
  }
  return (
    <div className="flex flex-col items-center justify-start p-5 space-y-4">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-5">
            <input
              disabled={loading}
              className="border border-black/20 px-4 py-3 text-lg rounded-lg items-center justify-center"
              onChange={onChange}
              value={value}
              type="text"
              placeholder="Ask a question"
            ></input>

            <div className="flex flex-col items-center">
              <button
                disabled={loading}
                type="submit"
                className="bg-blue-400 px-4 py-2 rounded-lg text-xl "
              >
                Ask
              </button>
            </div>
          </div>
        </form>
      </div>
      {loading && <div>...loading</div>}
      {response ? (
        <div className="text-xl py-5">{response}</div>
      ) : (
        <div className="py-5">You will the anser in here</div>
      )}
    </div>
  )
}

export { Question }
