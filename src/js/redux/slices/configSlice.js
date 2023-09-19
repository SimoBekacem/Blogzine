import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
	name: 'configuration',
	initialState: {
		darkMode: false,
		fontSize: 62.5,
	},
	reducers: {
		switchToDark: (state, action) => {
			state.darkMode = action.payload ? 'App_darkmode' : '';
		},
		switchToDarkAutomaticly: (state) => {
			const hour = new Date().getHours();
			if (hour >= 18 || hour <= 6) {
				state.darkMode = 'App_darkmode';
			} else {
				state.darkMode = '';
			}
		},
		changeFontSize: (state, action) => {
			if (action.payload === 'A-') {
				state.fontSize = 50;
			} else if (action.payload === 'A+') {
				state.fontSize = 80;
			} else {
				state.fontSize = 62.5;
			}
			//! take attention on this :
			// html.style.fontSize = size + '%';
		},
	},
});

export const { switchToDark, switchToDarkAutomaticly, changeFontSize } =
	configSlice.actions;
export default configSlice.reducer;
