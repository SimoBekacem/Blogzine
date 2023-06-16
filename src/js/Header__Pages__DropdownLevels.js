import React from 'react';
const DropdownLevels = () => {
    return (
        <li className="Header__dropdowns__Pages spicial__li nav-item dropend">
            <a className="nav-link dropdown-toggle" data-bs-auto-close="outside"    href="#" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
            Dropdown Levels
            </a>
            <ul  className=" dropdown-menu">
                <li className=" spicial__li nav-item dropend">
                    <a className="nav-link dropdown-toggle"  href="#" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
                    Dropdown End
                    </a>
                    <ul  className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Dropdown Item</a></li>
                        <li><a className="dropdown-item" href="#">Dropdown Item</a></li>
                        <li><a className="dropdown-item" href="#">Dropdown Item</a></li>
                        <li><a className="dropdown-item" href="#">Dropdown Item</a></li>
                    </ul>
                </li>
                <li><a className="dropdown-item" href="#">Dropdown Item</a></li>
                <li className=" spicial__li nav-item dropend">
                    <a className="nav-link dropdown-toggle"  href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside"   aria-expanded="false">
                    Dropdown End
                    </a>
                    <ul  className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Dropdown Item</a></li>
                        <li><a className="dropdown-item" href="#">Dropdown Item</a></li>
                        <li><a className="dropdown-item" href="#">Dropdown Item</a></li>
                        <li><a className="dropdown-item" href="#">Dropdown Item</a></li>
                    </ul>
                </li>
                <li><a className="dropdown-item" href="#">Dropdown Item</a></li>
            </ul>
        </li>
    )
}
export default DropdownLevels;