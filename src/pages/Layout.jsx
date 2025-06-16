import { LeftSideBar } from '../components/LeftSideBar.jsx'
import { RightSideBar } from '../components/RightSideBar.jsx'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-[250px] flex-shrink-0">
        <LeftSideBar />
      </div>

      <main className="flex-1 overflow-y-auto bg-gray-50">
        <Outlet />
      </main>

      <div className="w-[350px] flex-shrink-0">
        <RightSideBar />
      </div>
    </div>
  )
}
