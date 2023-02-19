import React from "react";
import Filters from "../components/Filters";
import Movies from "../components/Movies";

const Main: React.FC = () => {
	return (
		<main className="grow-[1] shrink-0 basis-auto">
			<div className="max-w-7xl min-h-[50px] mx-auto my-4 px-3 text-gray-700 text-xl">
				<Filters />
				<Movies />
			</div>
		</main>
	);
};

export default Main;
