import { RootState } from "./../store";
import { createSlice } from "@reduxjs/toolkit";

interface FilterSliceState {
	search: string;
	radioType: string;
}

const initialState: FilterSliceState = {
	search: "",
	radioType: "all",
};

const filterSlice = createSlice({
	name: "@@filter",
	initialState,
	reducers: {
		setSearch: (state, action) => {
			state.search = action.payload;
		},
		setRadioType: (state, action) => {
			state.radioType = action.payload;
		},
		resetFilters: (state) => {
			state.search = "";
			state.radioType = "all";
		},
	},
});

export const { setSearch, setRadioType, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;

export const selectFilters = (state: RootState) => state.filters;
