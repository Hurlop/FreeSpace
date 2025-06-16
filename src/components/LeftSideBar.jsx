import { NavLink } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";
import { Icon } from "@iconify/react/dist/iconify.js";


export function LeftSideBar() {
	const { user, logOut } = useLoginContext();

	const getLinkClass = ({ isActive }) =>
		`block p-2 rounded-lg ${isActive ? "bg-black text-white" : "hover:bg-gray-100 text-black"
		}`;

	if (!user) {
		return null;
	}

	return (
		<aside className="h-screen w-[250px] bg-white border-r shadow-sm">
			<nav className="h-screen flex flex-col items-center py-1 px-4">
				<h1 className="font-bold text-3xl py-4">FreeSpace</h1>
				<ul className="w-full space-y-2 font-semibold h-full">
					<li>
						<NavLink to="/homeFeed" className={getLinkClass}>
						<span className="inline-flex gap-2 items-center">
							<Icon icon="material-symbols:stack-hexagon"/>My Feed
						</span>
							
						</NavLink>
					</li>
					<li>
						<NavLink to="/userProfile" className={getLinkClass}>
							<span className="inline-flex gap-2 items-center">
								<Icon icon="gg:profile"/>Profile
							</span>
						</NavLink>
					</li>
					
				</ul>
				<div className="flex flex-col items-center mb-8">
					<h2 className="mt-2 text-lg font-semibold">{user.first_name}</h2>
					<p className="text-sm text-gray-500">{user.email}</p>
				</div>
				<div className="mt-auto border-t w-full pt-4">
					<button
					onClick={logOut}
					className="block w-full text-left p-2 rounded-lg hover:bg-red-100 text-red-600 "
					>
						<span className="inline-flex gap-2 items-center">
							<Icon icon="majesticons:door-exit-line"/>Log Out
						</span>
					</button>
				</div>
			</nav>
		</aside>
	);
}
