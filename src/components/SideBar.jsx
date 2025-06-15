import { NavLink } from "react-router-dom"
import { getUserService } from "../services/getUserService.js"
import useUserInfo from "../hooks/useUserInfo.jsx"
import { useLoginContext } from "../context/LoginContext.jsx"

export function SideBar() {
    const {userData} = useUserInfo()
    const loginContext = useLoginContext()
    
  return (
    <aside className="h-screen w-[200px]">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
            <div className="">
                <img src={userData.avatar} alt={userData.first_name} className="w-32"/>
                <h2>{userData.first_name}</h2>
                <p>{userData.email}</p>
            </div>
            <ul className="font-bold p-2">
                <li className="p-2"><NavLink className={({isActive }) => isActive ? "bg-black rounded-[16px] text-white py-2 px-4" : "p-2"} to='/homeFeed'>My Feed</NavLink></li>
                <li className="p-2"><NavLink className={({isActive }) => isActive ? "bg-black rounded-[16px] text-white py-2 px-4" : "p-2"} to='/userProfile'>Profile</NavLink></li>
                <li className="p-2"><button onClick={loginContext.logOut}>Log Out</button></li>
            </ul>
        </nav>
    </aside>
  )
}
