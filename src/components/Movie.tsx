import React from "react";
import { MovieType } from "../redux/slices/movieSlice";

const Movie: React.FC<MovieType> = ({ Poster, Title, Type, Year, imdbID }) => {
	return (
		<li
			className="flex flex-col min-h-[580px] rounded-lg bg-white max-w-sm shadow-lg transition hover:transform-cpu hover:scale-105"
			key={imdbID}
		>
			<img className="rounded-t-lg min-h-[450px]" src={Poster} alt={Poster} />
			<div className="px-6 py-4 gap-1 flex flex-col text-center h-full">
				<h2 className="text-gray-900 text-xl font-semibold grow items-center justify-center inline-flex">
					{Title}
				</h2>
				<p className="text-gray-700 text-base">{Year}</p>
				<p className="text-gray-700 text-base">{Type}</p>
			</div>
		</li>
	);
};

export default Movie;
