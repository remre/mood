import Editor from '@/components/Editor'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getEntry = async (id) => {
  const user = await getUserByClerkId()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        // check schema prisma   @@unique([userId, id]) that's what it is
        userId: user.id,
        id,
      },
    },
  })
  return entry
}

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id)
  return (
    <div>
      <Editor entry={entry}></Editor>
    </div>
  )
}

export default EntryPage
