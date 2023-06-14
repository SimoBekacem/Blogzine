import React from 'react';
import logo from '../images/logo.png';
const Header__sidebar = () => {
    return (
        <div className="Header__sidebar">
            <i className="Header__sidebar__icon fa-solid fa-bars-staggered fa-rotate-180"></i>
            <div className="Header__sidebar__window-hidden">
                <i class="close fa-solid fa-xmark"></i>
                <div className='description'>
                    <a className="navbar-brand Header__logo" href="#"><img src={logo} width='50px'/><h1>ZINE</h1></a>
                    <p>
                        The next-generation blog, news, and magazine theme for you to start sharing your stories today!
                    </p>
                </div>
                <div className='links'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Our Journal</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className='card'>
                    <p>The Blogzine</p>
                    <h1>Save on Premium Membership</h1>
                    <p>Get the insights report trusted by experts around the globe. Become a Member Today!</p>
                    <button>View pricing plans</button>
                </div>
                <div className='informations'>
                    <span>New York, USA HQ</span>
                    <p>
                        750 Sing Sing Rd, Horseheads, NY, 14845
                        Call: 469-537-2410 (Toll-free)
                    </p>
                    <p>hello@blogzine.com</p>
                </div>
            </div>
        </div>
    )
}
export default Header__sidebar;