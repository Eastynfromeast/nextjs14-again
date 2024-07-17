"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Naviagation() {
	const path = usePathname();
	const [count, setCount] = useState(0);

	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Home</Link>
					{path === "/" && "🩵"}
				</li>
				<li>
					<Link href="/about-us">About Us</Link>
					{path === "/about-us" && "🩵"}
				</li>
				<li>
					<span>{count}</span>
					<button onClick={() => setCount(prev => prev + 1)}>plus</button>
				</li>
			</ul>
		</nav>
	);
}
/*
	hydration
		rendered in backend and hydrated in frontend
		doesn't happen for every components
		need to write down "use client" on the top 
	
	server components 
		are rendered in server first and not gonna be hydrated
*/
