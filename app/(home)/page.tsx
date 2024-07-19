"use client";

import { useEffect, useState } from "react";

/* export const metadata = {
	title: "Home",
}; */

export default function Home() {
	const [movies, setMovies] = useState();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const getMovies = async () => {
			const response = fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
			const json = (await response).json();
			setMovies(await json);
			setIsLoading(false);
		};
		getMovies();
	}, []);
	return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
}
