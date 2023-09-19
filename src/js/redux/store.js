import { configureStore } from '@reduxjs/toolkit';
import configReducer from './slices/configSlice';
import grabReducer from './slices/grabSlice';
import sideBarReducer from './slices/sideBarSlice';

const store = configureStore({
	reducer: {
		config: configReducer,
		grab: grabReducer,
		sideBar: sideBarReducer,
	},
});
export default store;
