import React from 'react';
const Header__Post = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-auto-close="outside" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Post
            </a>
            <ul className="dropdown-menu">
                <li className="nav-item dropdown dropend">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Post Grid
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Post Grid</a></li>
                        <li><a className="dropdown-item" href="#">Post Grid 4 Col</a></li>
                        <li><a className="dropdown-item" href="#">Post Grid Masonry</a></li>
                        <li><a className="dropdown-item" href="#">Post Grid Masonry Filter</a></li>
                        <li><a className="dropdown-item" href="#">Post Mixed Large Than Grid</a></li>
                    </ul>
                </li>
                <li><a className="dropdown-item" href="#">Post List</a></li>
                <li><a className="dropdown-item" href="#">Post List 2</a></li>
                <li><a className="dropdown-item" href="#">Post Card</a></li>
                <li><a className="dropdown-item" href="#">Post Overlay</a></li>
                <li><a className="dropdown-item" href="#">Post Types</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Post Single Magzine</a></li>
                <li><a className="dropdown-item" href="#">Post Single Classic</a></li>
                <li><a className="dropdown-item" href="#">Post Single Minimal</a></li>
                <li><a className="dropdown-item" href="#">Post Single Card</a></li>
                <li><a className="dropdown-item" href="#">Post Single Review</a></li>
                <li><a className="dropdown-item" href="#">Post Single Video</a></li>
                <li><a className="dropdown-item" href="#">Podcast Single</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Pagination Styles</a></li>
            </ul>
        </li>
    )
}
export default Header__Post;