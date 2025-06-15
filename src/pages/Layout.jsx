import { SideBar } from '../components/SideBar.jsx'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className='flex'>
      <SideBar/>
      <main className="flex-1 overflow-auto">
        <Outlet /> {/* Or your routed content */}
      </main>
    </div>
  )
}
