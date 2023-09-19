import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { closeGrab } from './redux/slices/grabSlice';

const Grab = () => {
	const grab = useSelector((state) => state.grab.isExist);
	const dispatch = useDispatch();
	return (
		<div className={`Grab ${grab ? 'Grab__active' : 'Grab__inactive'}`}>
			<div className="Grab__title">
				<h1>Unlimited download! Starting from just $15/m</h1>
			</div>
			<div className="Grab__btn">
				<button>Grab new!</button>
				<i
					className="fa-solid fa-xmark"
					onClick={() => {
						dispatch(closeGrab());
					}}
				></i>
			</div>
		</div>
	);
};
export default Grab;
