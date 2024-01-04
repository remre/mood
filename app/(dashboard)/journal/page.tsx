import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import { analyze } from '@/utils/ai'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import Link from 'next/link'

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

  await analyze(`im goning to give you a journal entry i want you to analyze for a few things, I need the 
  mood, a summary, what the subject is, and a collor representing the mood. You need to respond bac with formatted JSON like so
  {mood :"" , subject:"" , color:"", negatuve: ""}.
  entry: today is a grat day i feel myself wonderful and wanna run until i get fall asleep`)
  return entries
}

const JournalPage = async () => {
  const entries = await getEntries()
  // console.log('entries', entries)
  return (
    <div className="p-10 bg-zinc-400/10 h-full">
      <h2 className="text-3xl mb-8">Journal</h2>
      <div className="grid grid-cols-3 gap-4 ">
        <NewEntryCard />

        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default JournalPage
