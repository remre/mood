import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="max-width-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">The best journal app </h1>
        <p className="text-2xl text-white/30 mb-4">
          this is the best app for tracking your mood through out your life All
          you have to do is be honest.
        </p>
        <div>
          <Link href="/journal">
            <button className="bg-blue-600 py-2 px-4 p-4 rounded-lg text-xl">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
