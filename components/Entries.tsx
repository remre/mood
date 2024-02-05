'use client'
import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import { analyze } from '@/utils/ai'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import Link from 'next/link'

import { Pagination } from 'flowbite-react'
import { useState } from 'react'
const getEntries = async () => {
  const user = await getUserByClerkId()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return entries
}

const Entries = async () => {
  const [currentPage, setCurrentPage] = useState(1)

  const onPageChange = (page: number) => setCurrentPage(page)
  const entries = await getEntries()
  // console.log('entries', entries)
  return (
    <div className="flex flex-col p-5 bg-zinc-400/10 ">
      <h2 className="flex text-3xl mb-8 ">Journal</h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard entry={entry} />
          </Link>
        ))}
        <NewEntryCard />
      </div>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          layout="table"
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  )
}

export default Entries
