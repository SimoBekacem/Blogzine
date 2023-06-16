import React from 'react';
const Grab = () => {
    const [state, setState] = React.useState(true);
    const close = () => {setState(!state)}
    return (
        <div className={`Grab ${
            state ? 'Grab__active' : 'Grab__inactive'
        }`}>
            <div className='Grab__title'>
                <h1>Unlimited download! Starting from just $15/m</h1>
            </div>
            <div className='Grab__btn'>
                <button>Grab new!</button>
                <i className="fa-solid fa-xmark" onClick={close}></i>
            </div>
        </div>
    )
}
export default Grab;