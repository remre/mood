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
    <div className="container mr-auto flex flex-col my-2 min-h-screen">
      <div className="flex w-full">
        <Header />
      </div>

      <div className="flex flex-row   space-x-4 ">
        <div className=" basis-1/ lg:basis-1/6">
          <Aside></Aside>
        </div>
        <div className="  1/3  lg:basis-4/6">
          <Entries />
        </div>
        <div className="1/3 lg:basis-1/6">
          <Questionnere></Questionnere>
        </div>
      </div>
    </div>
  )
}
