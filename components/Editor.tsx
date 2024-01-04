'use client'

import { updatedEntry } from '@/utils/api'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content)
  const [loading, setLoading] = useState(false)
  useAutosave({
    data: value,
    // we use _value bcz of renderinf and batching issues
    onSave: async (_value) => {
      setLoading(true)
      const updated = await updatedEntry(entry.id, _value)
      setLoading(false)
    },
  })

  return (
    <div className="w-full h-full">
      {loading && <div>.... loading</div>}
      <textarea
        className="w-full h-full p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default Editor
