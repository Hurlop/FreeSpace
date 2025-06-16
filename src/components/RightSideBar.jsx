import { useStories } from "../hooks/useStories.jsx"
import { useUsers } from "../hooks/useUsers.jsx"

export function RightSideBar() {
    const{storiesData} = useStories()
    const {usersData} = useUsers()
  return (
    <>
    <aside className="h-screen right-0 top-0 overflow-y-hidden w-[350px] border-l p-4">
        <section className="flex flex-col gap-4">
            <h2 className="font-bold">Stories</h2>
            <section className="flex flex-row justify-evenly">
                {storiesData.sort(() => 0.5 - Math.random()).slice(0, 2).map((report) => (
                    <div key={report.id} className=" w-[160px]">
                        <img src={report.image_url} alt='alt' className=" p-2 rounded-[30px] h-[220px] w-[150px] object-cover"/>
                        <span className="bg-white text-black inset-0 flex">{report.title}</span>                  
                    </div>
                ))}
            </section>
            <h2 className="font-bold">Suggestions</h2>
            <section>
                {usersData.sort(() => 0.5 - Math.random()).slice(0,3).map((user) =>(
                    <div key={user.id} className="flex flex-row gap-4 items-center mt-4">
                        <img src={user.avatar} alt="" className="rounded-full w-[50px] h-[50px] object-cover"/>
                        <div className="flex flex-col font-bold">
                            <span>{user.first_name}</span>
                            <span>{user.last_name}</span>
                        </div>
                        <button className="bg-black text-white rounded-lg text-sm ml-auto p-1 px-3">Follow</button>
                    </div>
                ))}
            </section>
        </section>
    </aside>
    </>
  )
}
