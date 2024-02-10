'use client'
import Link from 'next/link'
import { Flowbite, Sidebar } from 'flowbite-react'
import type { CustomFlowbiteTheme } from 'flowbite-react'

import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from 'react-icons/hi'
const links = [
  { href: '/', label: 'Home' },
  { href: '/journal', label: 'Journal' },
  { href: '/history', label: 'History' },
]

const customTheme: CustomFlowbiteTheme = {
  sidebar: {
    root: {
      inner: 'bg bgbg  min-h-screen border-2 border-black',
    },
    item: {
      base: 'text-gray-900 text-2xl font-semibold  h-16 flex items-center  my-2',
      icon: {
        base: 'h-[25px] w-[25px] ',
      },
    },
  },
}
{
  /* <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-black/10">
Mood
<div>
  <ul>
    {links.map((link) => (
      <li key={link.href} className="px-2 py-6 text-xl">
        <Link href={link.href}>{link.label}</Link>
      </li>
    ))}
  </ul>
</div>
</aside> */
}
export default function Aside() {
  return (
    <div className="items-center justify-center">
      <div>
        <Flowbite theme={{ theme: customTheme }}>
          <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="/journal" icon={HiChartPie}>
                  Journal
                </Sidebar.Item>
                <Sidebar.Item
                  href="/history"
                  icon={HiViewBoards}
                  label="Pro"
                  labelColor="dark"
                >
                  History
                </Sidebar.Item>
                <Sidebar.Item href="/" icon={HiInbox} label="3">
                  Home
                </Sidebar.Item>
                {/* <Sidebar.Item href="#" icon={HiUser}>
                  Users
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiShoppingBag}>
                  Products
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                  Sign In
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiTable}>
                  Sign Up
                </Sidebar.Item> */}
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </Flowbite>
      </div>
    </div>
  )
}
