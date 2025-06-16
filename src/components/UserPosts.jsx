import { Icon } from "@iconify/react/dist/iconify.js";

export default function UserPosts({ post, onDelete }) {
  const date = new Date();
  const shortDate = date.toISOString().split("T")[0];
  return (
    <div>
      <section className="bg-green-100 m-4 p-6 rounded-2xl" >
        <div className="flex flex-col gap-4 rounded-xl p-5 border hover:shadow-[2px_0_15px_rgba(0,0,0,0.15)]">
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold">Hola</h2>
              <small className="text-gray-400" >{shortDate}</small>
            </div>
            <button onClick={() => onDelete(post.id)} title="Delete post"><Icon icon="mdi:trashcan" height={20} /></button>
          </div>
          <h3 className="font-bold">{post.title}</h3>
          <p>{post.description}</p>
        </div>
      </section>
    </div>
  )
}