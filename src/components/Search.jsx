import React, { useState } from "react";

function Search({ searchMovie } = Function.prototype) {
	const [search, setSearch] = useState("");
	const [type, setType] = useState("all");

	const handleKey = (e) => {
		if (e.key === "Enter") {
			searchMovie(search, type);
		}
	};

	const handleFilter = (e) => {
		setType(e.target.dataset.type);
		searchMovie(search, e.target.dataset.type);
	};
	return (
		<div className='row'>
			<div className='input-field'>
				<input
					placeholder='search'
					type='search'
					className='validate'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={handleKey}
				/>
				<button className='btn search-btn' onClick={() => searchMovie(search, type)}>
					Search
				</button>
			</div>
			<div className='search-input-btns'>
				<label>
					<input
						onChange={handleFilter}
						className='with-gap'
						name='card-type'
						type='radio'
						data-type='all'
						checked={type === "all"}
					/>
					<span>All</span>
				</label>
				<label>
					<input
						onChange={handleFilter}
						className='with-gap'
						name='card-type'
						type='radio'
						data-type='movie'
						checked={type === "movie"}
					/>
					<span>Movies</span>
				</label>
				<label>
					<input
						onChange={handleFilter}
						className='with-gap'
						name='card-type'
						type='radio'
						data-type='series'
						checked={type === "series"}
					/>
					<span>Series</span>
				</label>
			</div>
		</div>
	);
}

export default Search;
