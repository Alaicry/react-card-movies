import React from "react";

function Movie(props) {
	const { Title: title, Year: year, imdbID: id, Type: type, Poster: poster } = props;

	return (
		<div id={id} className="card">
			<div className="card-image waves-effect waves-block waves-light">
				{poster === "N/A" ? (
					<img
						className="activator"
						src={`https://via.placeholder.com/300x150.png?text=${title}`}
						alt="placeholder"
					/>
				) : (
					<img className="activator" src={poster} alt="poster" />
				)}
			</div>
			<div className="card-content">
				<span className="card-title activator grey-text text-darken-4">{title}</span>
				<p>
					{year} <span className="right">{type.toUpperCase()}</span>
				</p>
			</div>
		</div>
	);
}

export default Movie;
