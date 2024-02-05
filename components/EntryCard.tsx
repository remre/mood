import { Card } from 'flowbite-react'
import Editor from './Editor'

const EntryCard = ({ entry }) => {
  // const color = analysis.color
  const date = new Date(entry.createdAt).toDateString()
  return (
    // <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
    //   <div className="px-4 py-5">{date}</div>
    //   {/* <div className="px-4 py-5">{entry.id}</div> */}
    //   <div className="px-4 py-5">summary</div>
    //   <div className="px-4 py-5">mood</div>
    // </div>
    <div className="container relative">
      <Card className="max-w-lg">
        {/* <div className={`bg bg-${color} h-[30px] w-[]` }></div> */}

        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {date}
        </h5>
        <p className="font-normal text-gray-700 overflow-hidden dark:text-gray-400 text-start text-sm lg:text-lg">
          {entry.id}
        </p>
      </Card>
    </div>
  )
}

export default EntryCard
