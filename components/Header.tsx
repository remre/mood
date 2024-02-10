import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="container mx-auto py-2 ">
      <div className=" flex flex-row">
        {/* Logo */}
        <div>
          <Link href="/home">
            {/* <Image src={'/'} height={50} width={50} alt="App logo"></Image> */}
          </Link>
          <div className="divide-y-4 divide-yellow-700" />
        </div>

        <h1 className="h1">Msdasdood</h1>
        <div className="h-full w-full px-6 flex items-center justify-end">
          <UserButton />
        </div>
      </div>
      <div className="divider" />
    </header>
  )
}
