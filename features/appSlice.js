import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
	name: "app",
	initialState: {
		currentLocation: "Edmonton",
	},
	reducers: {
		setCurrentLocation: (state, action) => {
			state.currentLocation = action.payload;
		},
	},
});

export const { setCurrentLocation } = appSlice.actions;
export const selectCurrentLocation = (state) => state.app.currentLocation;
export default appSlice.reducer;
