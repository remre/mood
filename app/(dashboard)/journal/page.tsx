import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import { analyze } from '@/utils/ai'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import Link from 'next/link'
import { Question } from '@/components/Question'
import Header from '@/components/Header'
import Aside from '@/components/Aside'
import Questionnere from '@/components/Questionnere'
import Entries from '@/components/Entries'

export default function JournalPage() {
  return (
    <div className="container mx-auto flex flex-col my-2 ">
      <div className="flex w-full">
        <Header />
      </div>

      <div className="flex flex-row min-w-screen ">
        <div className="basis-1/5">
          <Aside></Aside>
        </div>
        <div className=" h-[calc(100vh-90px)] basis-1/2">
          <Entries />
        </div>
        <div className="basis-1/5">
          {' '}
          <Questionnere></Questionnere>
        </div>
      </div>
    </div>
  )
}
