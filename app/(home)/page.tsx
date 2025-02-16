import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
	title: "Home",
};

// !important -  We are in a server component!
// when your using server components, NextJS will cache the fectched url
// this is gonna be fetched on the backend until this function doesn't finished
async function getMovies() {
	//await new Promise(resolve => setTimeout(resolve, 1 * 1000));
	const response = await fetch(API_URL);
	const json = await response.json();
	return json;
}

export default async function HomePage() {
	const movies = await getMovies();
	return (
		<div className={styles.container}>
			{movies.map(movie => (
				<Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
			))}
		</div>
	);
}
