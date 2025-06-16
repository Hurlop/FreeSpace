import { LeftSideBar } from '../components/LeftSideBar.jsx'
import { RightSideBar } from '../components/RightSideBar.jsx'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className='flex font-primary'>
      <LeftSideBar/>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <RightSideBar/>
    </div>
  )
}
