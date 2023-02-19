import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<header className="bg-green-200  shadow-md h-full grow-0 shrink-0 basis-auto">
			<div className="max-w-7xl min-h-[50px] mx-auto my-0 px-3 flex justify-between items-center text-gray-700 text-xl">
				<Link to="/">Movies</Link>
				<Link to="https://github.com/Alaicry/react-card-movies" target="_blank">
					REPO
				</Link>
			</div>
		</header>
	);
};

export default Header;
