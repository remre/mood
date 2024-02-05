'use client'

import { createNewEntry } from '@/utils/api'
import { Card, Flowbite } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import type { CustomFlowbiteTheme } from 'flowbite-react'

const NewEntryCard = () => {
  const router = useRouter()
  const handleOnClick = async () => {
    const data = await createNewEntry()
    router.push(`/journal/${data.id}`)
  }

  const customTheme: CustomFlowbiteTheme = {
    card: {
      img: {
        base: 'items-end justify-end ',
      },
    },
  }

  return (
    <div>
      <Flowbite theme={{ theme: customTheme }}>
        <div className="flex flex-col" onClick={handleOnClick}>
          <Card
            className="max-w-md items-center justify-center relative shadow-lg "
            // imgAlt="new entry card"
            // imgSrc="/newenrtyplus.svg"
            // height={300}
            renderImage={() => (
              <Image
                className="mt-4"
                width={70}
                height={90}
                src="/newenrtyplus.svg"
                alt="new entry card"
              />
            )}
          >
            <span className="text-3xl">New Entry</span>
          </Card>
        </div>
      </Flowbite>
    </div>
  )
}

export default NewEntryCard
