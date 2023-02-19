import React from "react";
import { useSelector } from "react-redux";
import { resetFilters, selectFilters, setRadioType, setSearch } from "../redux/slices/filterSlice";
import { fetchSearchMovies } from "../redux/slices/movieSlice";
import { useAppDispatch } from "../redux/store";

const Filters: React.FC = () => {
	const dispatch = useAppDispatch();
	const [movieSearch, setMovieSearch] = React.useState("");
	const [movieType, setMovieType] = React.useState("all");
	const { search, radioType } = useSelector(selectFilters);

	const handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setMovieType(e.target.value);
		dispatch(setRadioType(e.target.value));
	};

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setMovieSearch(e.target.value);
		dispatch(setSearch(e.target.value));
	};

	const resetSearch = (): void => {
		setMovieSearch("");
		setMovieType("all");
		dispatch(resetFilters());
	};

	return (
		<form className="w-full">
			<div className="flex items-center border-b border-teal-800 py-2">
				<input
					className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none md:text-lg sm:text-base xsm:text-[15px]"
					type="text"
					placeholder="Enter movie name"
					aria-label="Movie name"
					value={movieSearch}
					onChange={onChangeSearch}
				/>
				<button
					type="button"
					className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-lg border-4 text-white py-1 px-2 rounded sm:text-base xsm:text-xs"
					onClick={() => dispatch(fetchSearchMovies({ search, radioType }))}
					disabled={movieSearch === "" ? true : false}
				>
					Search
				</button>
				<button
					type="button"
					className="flex-shrink-0 ml-2 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-lg border-4 text-white py-1 px-2 rounded sm:text-base xsm:text-xs"
					onClick={() => resetSearch()}
				>
					Reset
				</button>
			</div>
			<ul className="items-center mt-4 w-full text-base font-medium bg-white border border-gray-200 rounded-lg sm:flex">
				<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
					<div className="flex items-center pl-3">
						<input
							className="w-5 h-5"
							type="radio"
							name="list-radio"
							value="all"
							checked={movieType === "all"}
							onChange={handleFilter}
						/>
						<label className="w-full py-3 ml-2 font-medium">All</label>
					</div>
				</li>
				<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
					<div className="flex items-center pl-3">
						<input
							className="w-5 h-5"
							type="radio"
							name="list-radio"
							value="movie"
							checked={movieType === "movie"}
							onChange={handleFilter}
						/>
						<label className="w-full py-3 ml-2 font-medium">Movies</label>
					</div>
				</li>
				<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
					<div className="flex items-center pl-3">
						<input
							className="w-5 h-5"
							type="radio"
							name="list-radio"
							value="series"
							checked={movieType === "series"}
							onChange={handleFilter}
						/>
						<label className="w-full py-3 ml-2 font-medium">Series</label>
					</div>
				</li>
			</ul>
		</form>
	);
};

export default Filters;
