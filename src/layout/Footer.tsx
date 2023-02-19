import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-green-200 py-2 h-full grow-0 shrink-0 basis-auto">
			<div className="max-w-7xl mx-auto my-0 px-3 min-h-[50px] flex justify-center items-center text-center">
				<small className="text-lg">&copy; Copyright {new Date().getFullYear()}, Alaicry</small>
			</div>
		</footer>
	);
};

export default Footer;
