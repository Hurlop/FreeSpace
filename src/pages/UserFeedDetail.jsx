import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useLoginContext } from "../context/LoginContext"
import { useBlogDetail } from "../hooks/useBlogDetail"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useBlogComments } from "../hooks/useBlogComments.jsx"

export function UserFeedDetail() {
    const [toggleComments, setToggleComments] = useState(false)
    const { comments } = useBlogComments()
    const params = useParams()
    const { blog } = useBlogDetail(params.id)
    const checkLogin = useNavigate()
    const loginContext = useLoginContext()
    const shortDate = useMemo(() => {
        if (blog && blog.published_at) {
            const date = new Date(blog.published_at);
            return date.toISOString().split("T")[0];

        }
        return null
    }, [blog])
    useEffect(() => {
        const tokenExists = loginContext.token
        if (!tokenExists) {
            checkLogin('/')
        }
    }, [loginContext.token, checkLogin])
    if (blog === null) {
        return null
    }

    return (
        <section className=" h-screen overflow-y-auto">
            <div className="bg-blue-50 m-4 p-6 rounded-2xl">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <div>
                            <h2 className="font-bold">{blog.authors[0].name}</h2>
                            <small className="text-gray-400" >{shortDate}</small>
                        </div>
                        <button><Icon icon="mage:dots-circle" height={30} /></button>
                    </div>
                    <div>
                        <img src={blog.image_url} alt='alt' className="max-h-[250px] rounded-2xl" />
                    </div>
                    <h3 className="font-bold">{blog.title}</h3>
                    <p>{blog.summary}</p>
                </div>
                <div className="flex gap-4 mt-4">
                    <button className="inline-flex items-center gap-1 hover:text-red-500"><Icon icon="line-md:heart-twotone" />Like</button>
                    <button className="inline-flex items-center gap-1 hover:text-blue-500" onClick={()=> setToggleComments(!toggleComments)}><Icon icon="lets-icons:comment-fill" />Comments</button>
                </div>
                {
                    toggleComments && (
                        <div className="flex flex-col gap-4 p-4 bg-yellow-100 mt-4 rounded-2xl">
                            <h3>Comments</h3>
                            <div className="flex flex-col gap-4">
                                {
                                    comments.map((comment) => (
                                        <div key={comment.key} className="p-4 rounded-lg border border-yellow-300">
                                            <div className="flex items-center gap-4">
                                                <img src={comment.avatar} alt="" className="w-[40px] h-[40px] rounded-full object-cover" />
                                                <span className="font-bold">{comment.first_name}</span>
                                            </div>
                                            <p className="p-4">{comment.comment}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>

        </section>

    )
}

