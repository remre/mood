import { auth } from '@clerk/nextjs'
// import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const { userId } = await auth()

  let href = userId ? '/journal' : '/new-user'

  return (
    <div className="w-screen h-screen bg-yellow-300 flex  justify-center items-center text-white">
      <div className="max-width-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4"> journal app with ai assistance </h1>
        <p className="text-2xl text-black mb-4">
          this is the best app for tracking your mood through out your life All
          you have to do is be honest.
        </p>
        <ul className="list-disc ml-3">
          <li>see your mood chart</li>
          <li>make a query on your journal and learn more about your self</li>
          <li>get a suggestion on how to improve your mood</li>
        </ul>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 py-2 px-4 p-4 rounded-lg text-xl mt-4">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
