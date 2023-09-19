import { createSlice } from '@reduxjs/toolkit';

const grabSlice = createSlice({
	name: 'grab',
	initialState: {
		isExist: true,
	},
	reducers: {
		closeGrab: (state) => {
			state.isExist = !state.isExist;
		},
	},
});

export const { closeGrab } = grabSlice.actions;
export default grabSlice.reducer;
