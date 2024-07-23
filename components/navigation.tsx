"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navigation.module.css";

export default function Naviagation() {
	const path = usePathname();
	const [count, setCount] = useState(0);

	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href="/">Home</Link>
					{path === "/" && "🩵"}
				</li>
				<li>
					<Link href="/about-us">About Us</Link>
					{path === "/about-us" && "🩵"}
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
