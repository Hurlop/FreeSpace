import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
export function Blog({blog}) {
	const date = new Date(blog.published_at);
	const shortDate = date.toISOString().split("T")[0];
	const navigate = useNavigate()
	function goToDetail(){
		navigate(`/homeFeed/${blog.id}`)
	}
  return (
    <section className="bg-blue-50 m-4 p-6 rounded-2xl" >
			<div onClick={goToDetail} className="flex flex-col gap-4 rounded-xl p-5 hover:cursor-pointer hover:bg-blue-100 hover:shadow-[2px_0_15px_rgba(0,0,0,0.15)]">
				<div className="flex justify-between">
					<div>
						<h2 className="font-bold">{blog.authors[0].name}</h2>
						<small className="text-gray-400" >{shortDate}</small>
					</div>
					<button><Icon icon="mage:dots-circle" height={30}/></button>
				</div>
				<div>
					<img src={blog.image_url} alt='alt' className="max-h-[250px] rounded-2xl" />
				</div>
				<h3 className="font-bold">{blog.title}</h3>
				<p>{blog.summary}</p>
			</div>
			<div className="flex gap-4 mt-4">
				<button className="inline-flex items-center gap-1 hover:text-red-500"><Icon icon="line-md:heart-twotone"/>Like</button>
				<button className="inline-flex items-center gap-1 hover:text-blue-500"><Icon icon="lets-icons:comment-fill"/>Comments</button>
			</div>
    </section>
  )
}
