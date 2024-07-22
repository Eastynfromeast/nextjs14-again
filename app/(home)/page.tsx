export const metadata = {
	title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

//k !important -  We are in a server component!
// when your using server components, NextJS will cache the fectched url
async function getMovies() {
	await new Promise(resolve => setTimeout(resolve, 5000));
	const response = await fetch(URL);
	const json = await response.json();
	return json;
}

export default async function HomePage() {
	const movies = await getMovies();
	return <div>{JSON.stringify(movies)}</div>;
}
