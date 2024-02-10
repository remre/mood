import Aside from '@/components/Aside'
import Header from '@/components/Header'
import Questionnere from '@/components/Questionnere'

const DashboardLayout = ({ children }) => {
  return (
    <div className="container mr-auto flex flex-col my-2 min-h-screen">
      <div className="flex w-full">
        <Header />
      </div>

      <div className="flex flex-row   space-x-4 ">
        <div className=" basis-1/3 lg:basis-1/6">
          <Aside />
        </div>
        <div className="basis-1/3  lg:basis-4/6">{children}</div>
        <div className=" basis-1/3 lg:basis-1/6">
          <Questionnere></Questionnere>
        </div>
      </div>
    </div>
  )
}
export default DashboardLayout
