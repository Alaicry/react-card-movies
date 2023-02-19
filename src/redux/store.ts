import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slices/movieSlice";
import filterSlice from "./slices/filterSlice";

const store = configureStore({
	reducer: {
		movie: movieSlice,
		filters: filterSlice,
	},
	devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
