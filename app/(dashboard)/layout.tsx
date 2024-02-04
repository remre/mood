import Aside from '@/components/Aside'
import Header from '@/components/Header'
import { ThemeModeScript } from 'flowbite-react'
const DashboardLayout = ({ children }) => {
  return (
    <div className=" flex flex-row h-screen w-screen relative">
      <div className="flex">
        <Aside></Aside>
      </div>
      <div className="flex h-full w-full">
        <div className="flex flex-col">
          <Header />
          <div className="h-[calc(100vh-90px)]">{children}</div>
        </div>
      </div>
    </div>
  )
}
export default DashboardLayout
