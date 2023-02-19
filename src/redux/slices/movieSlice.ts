import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export type MovieType = {
	Poster: string;
	Title: string;
	Type: string;
	Year: string;
	imdbID: string;
};

type FetchDataParams = {
	search: string;
	radioType: string;
};

type FetchData = {
	Search?: MovieType[];
	totalResults?: string;
	Response?: string;
};

enum Status {
	LOADING = "loading",
	REJECTED = "rejected",
	RECEIVED = "received",
}

interface MovieSliceState {
	list: FetchData;
	status: Status;
}

export const fetchMovies = createAsyncThunk<FetchData>("@@fetchMovies", async () => {
	const { data } = await axios.get<FetchData>(
		"https://www.omdbapi.com/?apikey=d5a51949&s=spider-man"
	);
	return data;
});

export const fetchSearchMovies = createAsyncThunk<FetchData, FetchDataParams>(
	"@@fetchMovies",
	async (params) => {
		const { search, radioType } = params;
		const { data } = await axios.get<FetchData>(
			`https://www.omdbapi.com/?apikey=d5a51949&s=${search}${
				radioType !== "all" ? `&type=${radioType}` : ""
			}`
		);
		return data;
	}
);

const initialState: MovieSliceState = {
	list: {},
	status: Status.LOADING,
};

const movieSlice = createSlice({
	name: "@@movies",
	initialState,
	reducers: {
		setMovies: (state, action) => {
			state.list = action.payload;
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchMovies.pending, (state) => {
				state.list = {};
				state.status = Status.LOADING;
			})
			.addCase(fetchMovies.rejected, (state) => {
				state.list = {};
				state.status = Status.REJECTED;
			})
			.addCase(fetchMovies.fulfilled, (state, action: PayloadAction<FetchData>) => {
				state.list = action.payload;
				state.status = Status.RECEIVED;
			}),
});

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;

export const selectMovies = (state: RootState) => state.movie.list.Search;
