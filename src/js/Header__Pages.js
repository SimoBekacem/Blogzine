import React from 'react';
import Shop from './Header__Pages__Shop';
import OtherArchives from './Header__Pages__OtherArchives';
import DropdownLevels from './Header__Pages__DropdownLevels'
const Header__Pages = () => {
    return (
        <li className=" Header__dropdowns__Pages nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-auto-close="outside" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">About</a></li>
                <li><a className="dropdown-item" href="#">Contact</a></li>
                <Shop />
                <OtherArchives />
                <li><a className="dropdown-item" href="#">Error 404</a></li>
                <li><a className="dropdown-item" href="#">Singin</a></li>
                <li><a className="dropdown-item" href="#">Singup</a></li>
                <li><a className="dropdown-item" href="#">Pffline</a></li>
                <li><hr class="dropdown-divider"/></li>
                <DropdownLevels />
                <li><hr class="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#"><span className='orange'><i class="fa-solid fa-life-ring"></i></span>Suppor</a></li>
                <li><a className="dropdown-item" href="#"><span className='red'><i class="fa-solid fa-book"></i></span>Documentation</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#"><span className='red'><i class="fa-solid fa-toggle-off"></i></span>RTL Demo</a></li>
                <li><a className="dropdown-item" href="#"><span className='red'><i class="fa-solid fa-cloud-arrow-down"></i></span>Buy Blogzine!</a></li>
            </ul>
        </li>
    )
}
export default Header__Pages;