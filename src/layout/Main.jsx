import { useState, useEffect } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

function Main() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const searchMovie = (str, type = "all") => {
		setLoading(true);
		fetch(`http://www.omdbapi.com/?apikey=d5a51949&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setMovies(data.Search);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetch(`http://www.omdbapi.com/?apikey=d5a51949&s=spider-man`)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.Search);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	return (
		<main className='container content'>
			<Search searchMovie={searchMovie} />
			{loading ? <Preloader /> : <Movies movies={movies} />}
		</main>
	);
}

export default Main;
