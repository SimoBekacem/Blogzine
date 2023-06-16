import React from 'react';
const ParametersAndLinks = () => {
    return (
        <div className='ParametersAndLinks'>
            <div className='ParametersAndLinks__links'>
                <a href='#' target='_blank' rel="noopener noreferrer">About</a>
                <a href='#' target='_blank' rel="noopener noreferrer">Forum</a>
                <a href='#' target='_blank' rel="noopener noreferrer">Bay now!</a>
                <a href='#' target='_blank' rel="noopener noreferrer">Login / Join</a>
            </div>
            <div className='ParametersAndLinks__parameters'>
                <div className='ParametersAndLinks__parameters__item'>
                    <h1>A-</h1>
                    <h1>A</h1>
                    <h1>A+</h1>
                </div>
                <div className="dropdown-center">
                    <button className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-circle-half-stroke"></i>
                    </button>
                    <ul className="dropdown-menu">
                        <li><i className="fa-regular fa-sun"></i><p>Light</p></li>
                        <li><i className="fa-solid fa-moon"></i><p>Dark</p></li>
                        <li><i className="fa-solid fa-circle-half-stroke"></i><p>Auto</p></li>
                    </ul>
                </div>
                <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
                <a href=""><i className="fa-brands fa-square-instagram"></i></a>
                <a href=""><i className="fa-brands fa-square-twitter"></i></a>
                <a href=""><i className="fa-brands fa-youtube"></i></a>
                <a href=""><i className="fa-brands fa-square-vimeo"></i></a>
            </div>
        </div>
    )
}
export default ParametersAndLinks;