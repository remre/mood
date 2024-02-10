'use client'

import { updatedEntry } from '@/utils/api'
import { data } from 'autoprefixer'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content)
  const [loading, setLoading] = useState(false)
  const [analysis, setAnalysis] = useState(entry.analysis)

  const { mood, summary, color, subject, negative } = analysis
  const analysisData = [
    { name: 'Subject', value: subject },
    { name: 'Mood', value: mood },
    { name: 'Summary', value: summary },
    { name: 'Negative', value: negative ? 'True' : 'False' },
  ]
  useAutosave({
    data: value,
    // we use _value bcz of renderinf and batching issues
    onSave: async (_value) => {
      setLoading(true)
      const data = await updatedEntry(entry.id, _value)
      setAnalysis(data.analysis)
      setLoading(false)
    },
  })

  return (
    <div className="w-full h-full grid grid-cols-3">
      <div className="col-span-2">
        {/* <span className="loading  loading-dots loading-lg m-auto block py-5 duration-100" /> */}
        {loading && <div className="loading  loading-dots ">....loading</div>}
        <textarea
          className="w-full h-full p-8 text-xl outline-none box"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="border-l  border-black/10">
        <div
          className=" px-6 py-10 box box-border "
          style={{ backgroundColor: color }}
        >
          <h2 className="text-2xl font-bold text-white">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li
                key={item.name}
                className="px-2 py-4  border-b  border-t boder-black/10 flex items-center justify-between"
              >
                <span className="text-lg font-semibold">{item.name}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Editor
