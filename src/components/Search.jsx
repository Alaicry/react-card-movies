import React, { Component } from "react";

export class Search extends Component {
	state = {
		search: "",
		type: "all",
	};

	handleKey = (e) => {
		if (e.key === "Enter") {
			this.props.searchMovie(this.state.search, this.state.type);
		}
	};

	handleFilter = (e) => {
		this.setState(
			() => ({ type: e.target.dataset.type }),
			() => {
				this.props.searchMovie(this.state.search, this.state.type);
			}
		);
	};

	render() {
		return (
			<div className="row">
				<div className="input-field">
					<input
						placeholder="search"
						type="search"
						className="validate"
						value={this.state.search}
						onChange={(e) => this.setState({ search: e.target.value })}
						onKeyDown={this.handleKey}
					/>
					<button
						className="btn search-btn"
						onClick={() => this.props.searchMovie(this.state.search, this.state.type)}
					>
						Search
					</button>
				</div>
				<div className="search-input-btns">
					<label>
						<input
							onChange={this.handleFilter}
							className="with-gap"
							name="card-type"
							type="radio"
							data-type="all"
              checked={this.state.type === 'all'}
						/>
						<span>All</span>
					</label>
					<label>
						<input
							onChange={this.handleFilter}
							className="with-gap"
							name="card-type"
							type="radio"
							data-type="movie"
              checked={this.state.type === 'movie'}
						/>
						<span>Movies</span>
					</label>
					<label>
						<input
							onChange={this.handleFilter}
							className="with-gap"
							name="card-type"
							type="radio"
							data-type="series"
              checked={this.state.type === 'series'}
						/>
						<span>Series</span>
					</label>
				</div>
			</div>
		);
	}
}

export default Search;
