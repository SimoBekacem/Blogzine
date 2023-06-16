import React from 'react';
const OtherArchives = () => {
    return (
        <li className=" spicial__li nav-item dropend">
            <a className="nav-link dropdown-toggle"  href="#" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
            Other Archives
            </a>
            <ul  className="Header__dropdowns__Home dropdown-menu">
                <li><a className="dropdown-item" href="#">Author Page</a></li>
                <li><a className="dropdown-item" href="#">Category Page 1</a></li>
                <li><a className="dropdown-item" href="#">Category Page 2</a></li>
                <li><a className="dropdown-item" href="#"># Tag</a></li>
                <li><a className="dropdown-item" href="#">Search Result</a></li>
            </ul>
        </li>
    )
}
export default OtherArchives;