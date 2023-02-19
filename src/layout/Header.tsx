import React from "react";
import { Link } from "react-router-dom";
import { resetFilters } from "../redux/slices/filterSlice";
import { useAppDispatch } from "../redux/store";

const Header: React.FC = () => {
	const dispatch = useAppDispatch();

	const resetSearch = (): void => {
		// setMovieSearch("");
		// setMovieType("all");
		dispatch(resetFilters());
	};

	return (
		<header className="bg-green-200  shadow-md h-full grow-0 shrink-0 basis-auto">
			<div className="max-w-7xl min-h-[50px] mx-auto my-0 px-3 flex justify-between items-center text-gray-700 text-xl">
				<Link to="/" onClick={() => resetSearch()}>
					Movies
				</Link>
				<Link to="https://github.com/Alaicry/react-card-movies" target="_blank">
					REPO
				</Link>
			</div>
		</header>
	);
};

export default Header;
