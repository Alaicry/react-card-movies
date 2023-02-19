import React from "react";
import { fetchMovies, selectMovies } from "../redux/slices/movieSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";
import Movie from "./Movie";

const Movies: React.FC = () => {
	const dispatch = useAppDispatch();
	const movies = useSelector(selectMovies);

	React.useEffect(() => {
		dispatch(fetchMovies());
	}, [dispatch]);

	return (
		<React.Fragment>
			{movies?.length ? (
				<ul className="grid gap-8 py-8 justify-items-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
					{movies?.map((obj) => (
						<Movie key={obj.imdbID} {...obj} />
					))}
				</ul>
			) : (
				<h2 className="text-center pt-6 pb-4">Loading...</h2>
			)}
		</React.Fragment>
	);
};

export default Movies;
