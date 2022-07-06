import React, { Component } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
	state = {
		movies: [],
		loading: true,
	};

	componentDidMount() {
		const apiURL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`;
		fetch(apiURL)
			.then((res) => res.json())
			.then((data) => this.setState({ movies: data.Search, loading: false }));
	}

	searchMovie = (str, type = "all") => {
		this.setState({ loading: true });
		fetch(
			`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== "all" ? `&type=${type}` : ""}`
		)
			.then((res) => res.json())
			.then((data) => this.setState({ movies: data.Search, loading: false }));
	};

	render() {
		const { movies, loading } = this.state;

		return (
			<main className="container content">
				<Search searchMovie={this.searchMovie} />
				{loading ? <Preloader /> : <Movies movies={movies} />}
			</main>
		);
	}
}

export default Main;
