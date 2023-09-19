import { createSlice } from '@reduxjs/toolkit';

const sideBarSlice = createSlice({
	name: 'sideBar',
	initialState: {
		isOpen: false,
	},
	reducers: {
		closeSideBar: (state) => {
			state.isOpen = !state.isOpen;
		},
	},
});
export const { closeSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
