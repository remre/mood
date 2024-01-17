import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs'
import { Prisma } from '@prisma/client'
import { redirect } from 'next/navigation'

const createNewUser = async () => {
  const user = await currentUser()
  console.log(user)

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    },
  })

  if (!match) {
    try {
      await prisma.user.create({
        data: {
          clerkId: user.id as string,
          email: user?.emailAddresses[0].emailAddress,
        },
      })
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        console.error('A user with this clerkId already exists.')
      } else {
        throw error
      }
    }
  }

  redirect('/journal')
}

const NewUser = async () => {
  await createNewUser()
  return <div>...loading</div>
}

export default NewUser
